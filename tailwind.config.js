/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '73': '18.5rem',
      },
      height: {
        '73': '18.5rem'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wave-gradient': "url('/blue-bg.jpg')",
      }
    },
  },
  plugins: [],
}
