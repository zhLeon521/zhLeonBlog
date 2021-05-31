/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-30 13:50:26
 * @LastEditTime: 2021-05-31 23:52:21
 * @FilePath: \zhleon\tailwind.config.js
 */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-serif', 'Georgia',],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
