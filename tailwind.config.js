/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024'
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion3.webp")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif']
      }
    }
  },
  container: {
    padding: {
      DEFAULT: '15px'
    }
  },
  plugins: [require('tailwind-scrollbar')]
};
