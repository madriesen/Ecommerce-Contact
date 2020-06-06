module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: { 0: '#07393C', light: '#DADDD8', dark: '#171219' },
        secondary: { 0: '#F0803C', light: '#EDF060', dark: '#310D20' },
        services: { background: '#F5F5F5' },
      },
      fontFamily: {
        light: ['Nexa Light', 'cursive'],
        bold: ['Nexa Bold', 'sans-serif'],
        regular: ['Oxygen', 'sans-serif'],
        'regular-light': ['Oxygen Light', 'cursive'],
        'regular-bold': ['Oxygen Bold', 'sans-serif'],
      },
      letterSpacing: {
        title: '0.45rem',
        subtitle: '1.2rem',
      },
      spacing: {
        'cta-slogan': '23.813rem',
        'cta-slogan-sm': '100vw',
        'services-item': '28.5rem',
        'services-item-sm': '100vw',
      },
      boxShadow: {
        services: '0 18px 4px 4px rgba(0, 0, 0, .25)',
        contact: '0 0 0 3px rgba(70,84,118,1)',
      },
      container: {
        padding: '2rem',
        center: true,
      },
      minWidth: {
        contact: '21.875rem',
      },
    },
  },
  variants: ['hover', 'responsive', 'focus', 'active'],
  plugins: [],
};
