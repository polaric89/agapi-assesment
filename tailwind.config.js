module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)'
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      }
    }
  }
}