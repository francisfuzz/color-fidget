import generateGradient from './generate-gradient'

function generateSpectrum (colors, step) {
  let spectrum = []
  for (let i = 0; i < colors.length - 1; i++) {
    spectrum = spectrum.concat(
      generateGradient(colors[i], colors[i+1], step)
    )
  }

  // Concatenate a copy of the spectrum in reverse order
  spectrum = spectrum.concat(spectrum.splice().reverse())

  return spectrum
}

export default generateSpectrum