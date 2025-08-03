module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#1a0d11',
          50: '#26161a',
          100: '#3a2328',
          200: '#4f3238',
          300: '#66454c',
          400: '#7c5a61',
          500: '#98777c',
          600: '#b49ba0',
          700: '#d1bfc4',
          800: '#e9dde0',
          900: '#f8f3f4',
          999: '#ffffff',
        },
        accent: {
          light: '#ffc6c7',
          DEFAULT: '#ff8ba7', // maps to "accent"
          dark: '#ad4466',
          overlay: '#594a4e',
          subtleOverlay: '#594a4e',
          textOver: '#ffc6c7',
        },
        background: {
        DEFAULT: '#faeee7',
      },
      },
      fontFamily: {
        body: ['"Libertinus Serif"', 'system-ui', 'serif'],
        brand: ['"Libertinus Sans"', 'system-ui', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};