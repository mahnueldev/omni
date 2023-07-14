/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
  
      extend: {
        colors: {
          // Configure your color palette here
          transparent: 'transparent',
          light: {
            100: '#F8FAFC',
            200: '#ECEBF0',
            300: '#D5D6DF',
            400: '#878998',
            500: '#7A7D89',
            600: '#696977',
          },
          dark: {
            100: '#1F1E2C',
            200: '#242635',
            300: '#343645',
            400: '#6C6D7F',
            500: '#99A0A8',
           
          },
          orange: {
            100: '#F76519',
            200: '#FDDBDC',
            
          },
          blue: {
            100: '#016ADF',
            200: '#0177FB',
            300: '#B1D3FE',
            
          },
        },
        backgroundColor: {
          body: 'var(--bg-body)', // Define your desired background color for body
        },
        dropShadow: {
          '3xl': '5px 5px 15px rgb(0 0 0 / 75%)',
        },
      },
      fontFamily: {
        sans: ['Inter'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '6.052rem',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
    },
    plugins: [],
  }