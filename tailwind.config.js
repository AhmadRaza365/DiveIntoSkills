module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        'dark-green': '#183114',
        'green': '#446129',
        'light-green': '#92A65F',
        'yellow': '#FCEE21',
        'light-yellow': '#DCDE9F',
        'lighter-yellow': '#F3F4D3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
