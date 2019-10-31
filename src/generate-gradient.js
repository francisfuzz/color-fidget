// Modification of the algorithm in Meyer Web's Color Blender
// Source: https://meyerweb.com/eric/tools/color-blend/#F3F0D1:E29C68:10:hex
// License: Creative Commons Attribution-ShareAlike 1.0 License.
import rgbHex from 'rgb-hex'
import hexRgb from 'hex-rgb'

function calculateIncrements(initialColor, terminalColor, steps) {
  const first = hexRgb(initialColor)
  const second = hexRgb(terminalColor)

  return {
    redStep: (second.red - first.red) / steps,  
    greenStep: (second.green - first.green) / steps,
    blueStep: (second.blue - first.blue) / steps
  }
}

function generateGradient(initialColor, terminalColor, steps) {  
  const first = hexRgb(initialColor)
  const increment = calculateIncrements(initialColor, terminalColor, steps)

  let palette = []
  for (let i = 0; i < steps + 1; i++) {
    palette.push(
      rgbHex(
        Math.round(((first.red + (increment.redStep * i)))),
        Math.round(((first.green + (increment.greenStep * i)))),
        Math.round(((first.blue + (increment.blueStep* i))))
      )
    )
  }
  return palette
}

export default generateGradient
