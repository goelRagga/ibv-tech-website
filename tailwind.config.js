/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'rainbow-red': '#E30A13',
        'blush-rose': '#E54C73',
        'ruby-red': '#981727',
        'coral-wine': '#680717',
        // Greyscale
        'anchor-gray': '#555556',
        'graphite': '#222234',
        'carbon': '#222234',
        'refresh-black': '#111112',
        // Semantic
        'simple-green': '#16AA4A',
        'strong-amber': '#F59B00',
        'tangy-red': '#F72222',
        'mirror-blue': '#206BEB',
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
        'instrument': ['Instrument Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
        'serif': ['Source Serif 4', 'serif'],
      },
      fontSize: {
        // Type scale from design system
        'display': ['96px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h1': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['56px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h4': ['32px', { lineHeight: '1.2' }],
        'h5': ['24px', { lineHeight: '1.3' }],
        'h6': ['20px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        // 8px grid system
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
        '11': '88px',
        '12': '96px',
        '13': '104px',
        '14': '112px',
        '15': '120px',
        '16': '128px',
        '18': '144px',
        '20': '160px',
        '24': '192px',
        '28': '224px',
        '32': '256px',
      },
      maxWidth: {
        'container': '1344px',
        'container-wide': '1680px',
      },
      screens: {
        'sm': '375px',
        'md': '720px',
        'lg': '1440px',
        'xl': '1920px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
