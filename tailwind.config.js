module.exports = {
  purge: ['./src/**/*.svelte',
    './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem'
      },
      backgroundColor: theme => ({
        'custom-white': '#fdfdfd',
        'custom-blue': '#1 8BFFF',
        'custom-blue-100': 'rgba(24,191,255,0.1)',
        'custom-blue-200': 'rgba(24,191,255,0.2)',
        'custom-blue-300': 'rgba(24,191,255,0.3)',
        'custom-blue-400': 'rgba(24,191,255,0.4)',
        'custom-blue-500': 'rgba(24,191,255,0.5)',
        'custom-blue-600': 'rgba(24,191,255,0.6)',
        'custom-blue-700': 'rgba(24,191,255,0.7)',
        'custom-blue-800': 'rgba(24,191,255,0.8)',
        'custom-pink': '#edb5f5',
        'custom-orange': '#FCB400',
        'custom-orange-100': 'rgba(252,180,0,0.1)',
        'custom-orange-200': 'rgba(252,180,0,0.2)',
        'custom-orange-300': 'rgba(252,180,0,0.3)',
        'custom-orange-400': 'rgba(252,180,0,0.4)',
        'custom-orange-500': 'rgba(252,180,0,0.5)',
        'custom-orange-600': 'rgba(252,180,0,0.6)',
        'custom-orange-700': 'rgba(252,180,0,0.7)',
        'custom-orange-800': 'rgba(252,180,0,0.8)',
        'custom-red': '#F82B60',
        'custom-red-100': 'rgba(248,43,96,0.1)',
        'custom-red-200': 'rgba(248,43,96,0.2)',
        'custom-red-300': 'rgba(248,43,96,0.3)',
        'custom-red-400': 'rgba(248,43,96,0.4)',
        'custom-red-500': 'rgba(248,43,96,0.5)',
        'custom-red-600': 'rgba(248,43,96,0.6)',
        'custom-red-700': 'rgba(248,43,96,0.7)',
        'custom-red-800': 'rgba(248,43,96,0.8)',
        'custom-main-blue': '#1F3C88',
        'custom-accent': '#FF8540'
      }),
      textColor: theme => ({
        'custom-white': '#fdfdfd',
        'custom-blue': '#18BFFF',
        'custom-pink': '#edb5f5',
        'custom-orange': '#FCB400',
        'custom-main-blue': '#1F3C88',
        'custom-accent': '#FF8540'
      }),
      minWidth: {
        '0': '0',
        '0.5': '0.5rem',
        '0.8': '0.8rem',
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '24': '24rem',
      },
      maxWidth: {
        '0': '0',
        '0.5': '0.5rem',
        '0.8': '0.8rem',
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '24': '24rem',
        '28': '28rem',
        '30': '30rem',
        '34': '34rem',
        '38': '38rem',
      },
      minHeight: {
        '0': '0',
        '5': '5rem',
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '24': '24rem',
      },
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#ecfcff',
        'secondary': '#edb5f5',
      })
    }

  }
}
