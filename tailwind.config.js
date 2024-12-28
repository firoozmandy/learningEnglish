/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    fontFamily: {
      'body': ['Be Vietnam Pro', 'sans-serif'],
    },
  },
  plugins: [
    require('@frostui/tailwindcss/plugin'),
  ],
}
