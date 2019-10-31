// Modification of the algorithm in Meyer Web's Color Blender
// Source: https://meyerweb.com/eric/tools/color-blend/#F3F0D1:E29C68:10:hex
// License: Creative Commons Attribution-ShareAlike 1.0 License.
import rgbHex from 'rgb-hex'
import hexRgb from 'hex-rgb'

function calculateIncrements(initialColor, terminalColor, steps) {
  const ic = hexRgb(initialColor)
  const tc = hexRgb(terminalColor)

  // Take the difference of two colors, then divide it by steps
  return {
    redStep: (tc.red - ic.red) / steps,  
    greenStep: (tc.green - ic.green) / steps,
    blueStep: (tc.blue - ic.blue) / steps
  }
}

function generateGradient(initialColor, terminalColor, steps) {  
  const ic = hexRgb(initialColor)
  const increment = calculateIncrements(initialColor, terminalColor, steps)

  let gradient = []
  for (let i = 0; i < steps + 1; i++) {
    gradient.push(
      rgbHex(
        Math.round(((ic.red + (increment.redStep * i)))),
        Math.round(((ic.green + (increment.greenStep * i)))),
        Math.round(((ic.blue + (increment.blueStep * i))))
      )
    )
  }
  return gradient
}

export default generateGradient
