/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030213',
        'primary-foreground': '#ffffff',
        background: '#ffffff',
        foreground: '#0a0a0a',
        muted: '#ececf0',
        'muted-foreground': '#717182',
        border: 'rgba(0, 0, 0, 0.1)',
        card: '#ffffff',
        'card-foreground': '#0a0a0a',
        secondary: '#f3f3f5',
        'secondary-foreground': '#030213',
        accent: '#e9ebef',
        'accent-foreground': '#030213',
      },
      borderRadius: {
        'radius': '0.625rem',
      },
    },
  },
  plugins: [],
} 