// Modifies the algorithm used in Meyer Web's Color Blender.
// Source: https://meyerweb.com/eric/tools/color-blend/#F3F0D1:E29C68:10:hex
// License: Creative Commons Attribution-ShareAlike 1.0 License.

function extract (hexColorCode) {
  let base = 16
  return {
    r: parseInt(hexColorCode.slice(0, 2), base),
    g: parseInt(hexColorCode.slice(2, 4), base),
    b: parseInt(hexColorCode.slice(4, 6), base)
  }
}

function generateGradient (firstColor, secondColor, steps) {  
  // Obtain RGB for firstColor and secondColor
  const first = extract(firstColor)
  const second = extract(secondColor)

  // Diff between the reds, greens, and blues
  let step = [
    (second.r - first.r) / steps+1,  
    (second.g - first.g) / steps+1,
    (second.b - first.b) / steps+1
  ]

  let palette = Array(steps+1)

  for (let i = 0; i < palette.length; i++) {
    palette[i] = [
      toHex(Math.round(((first.r + (step[0] * i))))),
      toHex(Math.round(((first.g + (step[1] * i))))),
      toHex(Math.round(((first.b + (step[2] * i)))))
    ].join('')
  }

  palette.push(secondColor)

  // Returns an array of colors between firstColor and secondColor
  return palette
}

function toHex (n) {
  // (256).toString(16) returns '100'.
  // This limits a component color from ever getting to that value.
  if (n > 255) {
    return 'ff'
  }

  // Because a single letter is returned for numbers less than 16,
  // this prepends zero to the numeric value to match the hex format.
  return (n < 16 ? '0' : '') + n.toString(16)
}

export default generateGradient