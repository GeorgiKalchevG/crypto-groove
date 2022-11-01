/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'warning-primary': '#F28705',
      'warning-secondary': '#F2BC57',
      'warning-tertiary': '#F2CB05',
      'warning-2': '#F2AF5C',
      'warning-3': '#F29F05',
      danger: '#F23030',
      'danger-secondary': '#F2937E',
      'success-primary': '#20BF1B',
      'success-secondary': '#47A644',
      'success-tertiary': '#6CBF30',
      'success-2': '#208C1C',
      'success-3': '#20731D',
      'success-4': '#98EB13',
      'neutral-tertiary': '#03A688',
      'neutral-secondary': '#026873',
      'neutral-primary': '#025E73',
      'neutral-2': '#1D594E',
      'background-primary': '#262626',
      'background-secondary': '#011F26',
      'background-tertiary': '#F2668B',
      'text-color': '#F2DEDC',
      'text-color-secondary': '#F2F2F2',
    },
    extend: {
      boxShadowColor: '#F2668B',
    },
  },
  plugins: [],
}
