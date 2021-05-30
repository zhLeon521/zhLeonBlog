/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-30 13:50:26
 * @LastEditTime: 2021-05-30 14:50:25
 * @FilePath: \zhleon\tailwind.config.js
 */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
        'html': ['font-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
