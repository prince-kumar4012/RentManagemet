/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        dpxTeal:        'var(--color-teal)',
        dpxTealDark:    'var(--color-teal-dark)',
        dpxTealLight:   'var(--color-teal-light)',
        dpxOrange:      'var(--color-orange)',
        dpxOrangeDark:  'var(--color-orange-dark)',
        dpxOrangeLight: 'var(--color-orange-light)',
        dpxGreen:       'var(--color-green)',
        dpxGreenDark:   'var(--color-green-dark)',
        dpxGreenLight:  'var(--color-green-light)',
        dpxNavy:        'var(--color-navy)',
        dpxNavyLight:   'var(--color-navy-light)',
        dpxRed:         'var(--color-red)',
        dpxRedLight:    'var(--color-red-light)',
        dpxBg:          'var(--color-bg)',
        dpxBorder:      'var(--color-border)',
      },
    },
  },
  plugins: [],
};
