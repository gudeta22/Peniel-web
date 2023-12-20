/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
  screens:{
       
      'sm': '640px',
      'md': '768px',
      'mi':'914px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      width: {
        'inherit': 'inherit',
      },
      height: {
        'inherit': 'inherit',
      },
       backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              '::before': {
                content: '""',
                display: 'inline-block',
                width: '20px',
                height: '2px',
                backgroundColor: '#000',
                marginRight: '10px',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')
],
}

