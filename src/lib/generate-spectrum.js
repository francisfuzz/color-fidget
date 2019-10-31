import generateGradient from './generate-gradient'
function generateSpectrum (colors, step) {
  let spectrum = []
  for (let i = 0; i < colors.length - 1; i++) {
    spectrum = spectrum.concat(
      generateGradient(colors[i], colors[i+1], step)
    )
  }
  return spectrum
}

export default generateSpectrum