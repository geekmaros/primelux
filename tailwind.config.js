module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Inter', 'sans-serif'],
        sans: ['Montserrat', 'sans'],
      },
      colors: {
        'primelux-grey': '#EFF1F5',
        'primelux-orange': '#F5B172',
      },
      spacing: {
        '18rem': '19rem',
        '30rem': '30rem',
        5.5: '5.9rem',
        7.5: '7.2rem',
        78: '78px',
        84: '84px',
        93: '93.65px',
        99: '99.65px',
        126: '126px',
        132: '132px',
        150: '150px',
        156: '156px',
        216: '216px',
        320: '320px',
      },
      fontSize: {
        '56px': '56px',
      },
      lineHeight: {
        '16px': '16px',
        '24px': '24px',
        '30px': '30px',
        '36px': '36px',
        '56px': '56px',
      },
      maxWidth: {
        '15rem': '15rem',
        '30rem': '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
