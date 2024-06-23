module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark_blue: '#102542',
        red_orange: '#F87060',
        white_gray: '#CDD7D6',
        beigee: '#B3A394',
      }
    },
  },
  plugins: [],
};
