/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#2a2a2a',
          text: '#e5e5e5',
          muted: '#888888'
        },
        accent: {
          blue: '#1e40af',
          brown: '#78350f'
        }
      }
    },
  },
  plugins: [],
}
