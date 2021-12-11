module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue'],
      },
      colors: {
        dark: '#141515',
        light: '#F7F9F9',
      },
      fontSize: {
        displayLargeText: '190px',
        smallBodyText: '16px',
      },
      lineHeight: {
        displayLargeHeight: '180.5px',
      },
      spacing: {
        page: '100vh',
      },
    },
  },
  plugins: [],
}
