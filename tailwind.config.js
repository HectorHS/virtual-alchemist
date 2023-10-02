



import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#89d0f5',
        primaryDull: '#7dc3e8',
        primaryDark: '#5bbcf1',
        secondary: '#0c1f31',
        secondaryDull: '#1c344a',
        secondaryDark: '#050d15',
        offWhite: '#ECE9E6',
        offWhiteDark: '#ded9d3',
        offWhiteDull: '#fff',
        offBlack: '#1D2423',
        offGray: '#2d3937',
        offGrayDull:'#2d3039',
        offGrayDark: '#171c1b',
      },
      fontFamily: {
        'main': ['Poppins','Open Sans', 'Segoe UI', 'Roboto', 'Arial'],
      }
    }
  }
}