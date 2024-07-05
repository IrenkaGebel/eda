const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'butter-bun': '#F0EFD5',
        'volcano-dust': '#3B3A3A',
        'coral-sweets': '#F96F88',
        'open-sky': '#AADCFF',
      },
      dropShadow: {
        tea: '2px 4px 6px rgba(255, 192, 203, 0.75)',
      },
      // Overriding fontFamily to use @next/font loaded families
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
}
