/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ros1: 'var(--ros1, #FBFACD)',
        ros2: 'var(--ros2, #DEBACE)',
        ros3: 'var(--ros3, #BA94D1)',
        ros4: 'var(--ros4, #7F669D)',
      },
    },
  },
  plugins: [],
}
