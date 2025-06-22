import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f3e5ab',  // fundo tipo papel antigo
        ink: '#4b2e2e',        // texto tipo tinta marrom escura
        pirateRed: '#a12c2f',  // destaque (ex: cabeçalhos)
        pirateGold: '#c5a059', // dourado velho (detalhes, bordas)
      },
      fontFamily: {
        serif: ['"IM Fell English SC"', ...defaultTheme.fontFamily.serif], // estilo clássico
      },
    },
  },
  plugins: [],
}