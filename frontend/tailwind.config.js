/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 4px 4px 1px rgba(0, 0, 0, 0.25);'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')]
}
