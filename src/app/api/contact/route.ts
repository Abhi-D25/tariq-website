// src/app/api/contact/route.ts

// Define proper TypeScript interfaces
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  formType?: string;
  page?: string;
  utmSource?: string;
  utmMedium?: string;
}

interface AirtableData {
  "Lead Name": string;
  "Phone Number": string;
  "Email": string;
  "Project Type": string;
  "Lead Source": string;
  "Status": string;
  "Notes": string;
  "Follow-up Due": string;
  "Created Date": string;
  "_rawFormData": {
    firstName: string;
    lastName: string;
    message: string;
    formType?: string;
    page?: string;
    utmSource?: string;
    utmMedium?: string;
    userAgent?: string | null;
    referer?: string | null;
    ip?: string | null;
  };
}

export async function POST(request: Request) {
    try {
      const formData: FormData = await request.json();
      
      // Map project type values to full names
      const projectTypeMapping: { [key: string]: string } = {
        'kitchen': 'Kitchen Remodeling',
        'bathroom': 'Bathroom Renovation', 
        'flooring': 'Flooring Installation',
        'tile': 'Tile Selection Only',
        'consultation': 'Design Consultation',
        'other': 'Other'
      };
  
      // Calculate follow-up due date (24 hours from now)
      const followUpDue = new Date();
      followUpDue.setHours(followUpDue.getHours() + 24);
  
      // Format data to match your Airtable Leads table exactly
      const airtableData: AirtableData = {
        // Airtable field names (use these exact names in Zapier)
        "Lead Name": `${formData.firstName} ${formData.lastName}`.trim(),
        "Phone Number": formData.phone,
        "Email": formData.email,
        "Project Type": projectTypeMapping[formData.projectType] || formData.projectType,
        "Lead Source": determineLeadSource(formData),
        "Status": "New Lead", // Default status for new leads
        "Notes": buildNotesField(formData),
        "Follow-up Due": followUpDue.toISOString(),
        "Created Date": new Date().toISOString(),
        
        // Additional data for context (you can use these in Zapier filters/logic)
        "_rawFormData": {
          firstName: formData.firstName,
          lastName: formData.lastName,
          message: formData.message,
          formType: formData.formType,
          page: formData.page,
          utmSource: formData.utmSource,
          utmMedium: formData.utmMedium,
          userAgent: request.headers.get('user-agent'),
          referer: request.headers.get('referer'),
          ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
        }
      };
  
      // Send to Zapier
      const zapierResponse = await fetch(process.env.ZAPIER_WEBHOOK_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData)
      });
  
      if (zapierResponse.ok) {
        return Response.json({ 
          success: true, 
          message: 'Lead submitted successfully',
          leadName: airtableData["Lead Name"]
        });
      } else {
        console.error('Zapier webhook failed:', zapierResponse.status, await zapierResponse.text());
        return Response.json(
          { error: 'Failed to process lead submission' }, 
          { status: 500 }
        );
      }
    } catch (error) {
      console.error('API route error:', error);
      return Response.json(
        { error: 'Internal server error' }, 
        { status: 500 }
      );
    }
  }
  
  // Helper function to determine lead source
  function determineLeadSource(formData: FormData): string {
    // Priority order for determining lead source
    if (formData.utmSource && formData.utmSource !== 'direct') {
      // UTM source takes priority (Google Ads, Facebook, etc.)
      const sourceMap: { [key: string]: string } = {
        'google': 'Google Ads',
        'facebook': 'Facebook Ads',
        'instagram': 'Instagram',
        'bing': 'Bing Ads',
        'email': 'Email Marketing',
        'social': 'Social Media'
      };
      return sourceMap[formData.utmSource.toLowerCase()] || `UTM: ${formData.utmSource}`;
    }
    
    if (formData.formType) {
      // Form type as secondary indicator
      if (formData.formType.includes('Modal')) {
        return 'Website - Popup Form';
      }
      if (formData.formType.includes('Contact')) {
        return 'Website - Contact Page';
      }
    }
    
    // Default based on page
    if (formData.page === '/') {
      return 'Website - Homepage';
    } else if (formData.page === '/about') {
      return 'Website - About Page';
    }
    
    return 'Website - Direct';
  }
  
  // Helper function to build comprehensive notes
  function buildNotesField(formData: FormData): string {
    const notes = [];
    
    // Add user's message if provided
    if (formData.message && formData.message.trim()) {
      notes.push(`Customer Message: "${formData.message.trim()}"`);
    }
    
    // Add form context
    notes.push(`Submitted via: ${formData.formType || 'Website Form'}`);
    
    // Add page context
    if (formData.page) {
      notes.push(`Page: ${formData.page}`);
    }
    
    // Add marketing attribution if available
    if (formData.utmSource && formData.utmSource !== 'direct') {
      notes.push(`Traffic Source: ${formData.utmSource}`);
    }
    if (formData.utmMedium && formData.utmMedium !== 'website') {
      notes.push(`Medium: ${formData.utmMedium}`);
    }
    
    // Add timestamp
    notes.push(`Submitted: ${new Date().toLocaleString('en-US', { 
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })} CT`);
    
    return notes.join(' | ');
  }