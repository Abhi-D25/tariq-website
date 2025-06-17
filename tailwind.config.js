module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B1538', // Deep burgundy
        gold: '#D4AF37',    // Gold accent
        charcoal: '#2C2C2C',
        warmwhite: '#FAFAFA',
        lightgray: '#F5F5F5',
        darkoverlay: 'rgba(44,44,44,0.7)',
        burgundyoverlay: 'rgba(139,21,56,0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 