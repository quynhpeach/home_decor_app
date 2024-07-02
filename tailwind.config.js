// tailwind.config.js
const colors = require('./src/utils/colors');
module.exports = {
    content: [],
    content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
          colors,
          fontFamily: {
            normalCG: ["CormorantGaramond-Regular"],
            boldCG: ["CormorantGaramond-Bold"],
            boldItalic: ["CormorantGaramond-BoldItalic"],
            semiBold: ["CormorantGaramond-SemiBold"],
            semiBoldItalic: ["CormorantGaramond-SemiBoldItalic"],
            lightCG: ["CormorantGaramond-Light"],
            lightItalic:  ["CormorantGaramond-LightItalic"],
            italicCG: ["CormorantGaramond-Italic"],
            mediumCG: ["CormorantGaramond-Medium"],
            mediumItalic:  ["CormorantGaramond-MediumItalic"],
          },
        },
      },
      plugins: [],
    }