const colors = require('tailwindcss/colors')

export default {
  purge: {
    enabled: true,
    content: [
      '../layout/*.vue',
      '../pages/*.vue',
      '../components/*.vue',
    ],
  },
  theme: {
    fill: {
      current: 'currentColor',
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        blue: colors.blue,
        teal: colors.teal,
        purple: colors.purple,
        green: colors.green,
        orange: colors.orange,
        red: colors.red,
        white: colors.white,
        gray: colors.gray,
        black: colors.black,

        social: {
          fb: '#1877F2',
          twitter: '#1DA1F2',
          whatsapp: '#25D366',
          pinterest: '#BD081C',
        }
      },
    },
  },
  variants: {
    extend: {
      opacity: [
        "disabled"
      ],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
