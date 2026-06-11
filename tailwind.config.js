/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kidza: {
          beige: 'var(--kidza-beige)',
          orange: 'var(--kidza-orange)',
          'orange-hover': 'var(--kidza-orange-hover)',
          purple: 'var(--kidza-purple)',
          navy: 'var(--kidza-navy)',
        },
        playful: {
          pink: 'var(--playful-pink)',
          'pink-light': 'var(--playful-pink-light)',
        },
        sky: {
          blue: 'var(--sky-blue)',
          'blue-light': 'var(--sky-blue-light)',
        },
        lime: {
          green: 'var(--lime-green)',
          'green-light': 'var(--lime-green-light)',
        },
        joyful: {
          yellow: 'var(--joyful-yellow)',
          'yellow-light': 'var(--joyful-yellow-light)',
        },
        neutral: {
          dark: 'var(--neutral-dark)',
          muted: 'var(--neutral-muted)',
          light: 'var(--neutral-light)',
        }
      },
      fontFamily: {
        headings: ['var(--font-comfortaa)', 'Comfortaa', 'sans-serif'],
        body: ['var(--font-quicksand)', 'Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'sm-kidza': 'var(--radius-sm)',
        'md-kidza': 'var(--radius-md)',
        'lg-kidza': 'var(--radius-lg)',
        'pill-kidza': 'var(--radius-pill)',
      },
      boxShadow: {
        'sm-kidza': 'var(--shadow-sm)',
        'md-kidza': 'var(--shadow-md)',
        'lg-kidza': 'var(--shadow-lg)',
        'glow-kidza': 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'normal': 'cubic-bezier(0.175, 0.885, 0.32, 1.15)',
        'slow': 'cubic-bezier(0.175, 0.885, 0.32, 1.05)',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
      }
    },
  },
  plugins: [],
};
