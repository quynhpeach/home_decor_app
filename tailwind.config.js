// tailwind.config.js
const colors = require('./src/utils/colors');
module.exports = {
    content: [],
    content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
          colors,
          fontFamily: {
            normal: ["CormorantGaramond-Regular"],
            bold: ["CormorantGaramond-Bold"],
            boldItalic: ["CormorantGaramond-BoldItalic"],
            semiBold: ["CormorantGaramond-SemiBold"],
            semiBoldItalic: ["CormorantGaramond-SemiBoldItalic"],
            light: ["CormorantGaramond-Light"],
            lightItalic:  ["CormorantGaramond-LightItalic"],
            italic: ["CormorantGaramond-Italic"],
            medium: ["CormorantGaramond-Medium"],
            mediumItalic:  ["CormorantGaramond-MediumItalic"],
          },
        },
      },
      plugins: [],
    }