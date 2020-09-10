/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        mid:
          '0 12px 15px -3px rgba(0, 0, 0, .04), 0 5px 5px -2px rgba(0, 0, 0, .01)'
      }
    },
    container: {
      padding: '2rem',
      center: true
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}
