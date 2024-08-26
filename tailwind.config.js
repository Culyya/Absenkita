/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         
        fontFamily: {
          pop: ['Poppins', 'sans'],
        },
        fontWeight: {
          light: 300,     // Bobot ringan
          regular: 400,   // Bobot reguler
          medium: 500,    // Bobot medium
          semibold: 600,  // Bobot semibold
          bold: 700,      // Bobot tebal
          extrabold: 800, // Bobot ekstra tebal
        },
       },
       screens: {
        xxs: '360px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
      },
      fontSize: {
        xxs: '10px',
        sm: '12px',
        md: '13px',
        mutiara:'18px',
        judul:'22px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'ungu': '#606691',
        'hijau' : '#82C97C'
       })
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/forms'),
      require('flowbite/plugin')
     ],
     content: [
      "./node_modules/flowbite/**/*.js"
  ]
  }
