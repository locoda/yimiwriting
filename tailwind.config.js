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
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.625rem',
        '2xl': '2.125rem',
        '3xl': '2.625rem',
        '4xl': '3.5rem',
        '5xl': '4.5rem',
      },
      boxShadow: {
        sm: '0px 6px 3px rgba(9, 11, 17, 0.01), 0px 4px 2px rgba(9, 11, 17, 0.01), 0px 2px 2px rgba(9, 11, 17, 0.02), 0px 0px 1px rgba(9, 11, 17, 0.03)',
        md: '0px 28px 11px rgba(9, 11, 17, 0.01), 0px 16px 10px rgba(9, 11, 17, 0.03), 0px 7px 7px rgba(9, 11, 17, 0.05), 0px 2px 4px rgba(9, 11, 17, 0.06)',
        lg: '0px 62px 25px rgba(9, 11, 17, 0.01), 0px 35px 21px rgba(9, 11, 17, 0.05), 0px 16px 16px rgba(9, 11, 17, 0.1), 0px 4px 9px rgba(9, 11, 17, 0.12)',
      },
    },
  },
  plugins: [],
};