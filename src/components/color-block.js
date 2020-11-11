import React from 'react'
import generateSpectrum from '../lib/generate-spectrum'
import colors from '../lib/colors/seasonal-colors'
const defaultPalette = Object.keys(colors)[0]

class ColorBlock extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: this.safelyGenerateSpectrum(props.palette)
    }

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(event) {
    event.preventDefault()
    event.stopPropagation()

    // Make a copy of the spectrum.
    const newColors = this.state.colors.slice()
    // Move the first element of spectrum to the last.
    newColors.push(newColors.shift())

    this.setState({
      colors: newColors
    })
  }

  // This validates the selected palette by checking colors,
  // setting to a valid default.
  safelyGenerateSpectrum(palette) {
    let spectrum
    if (colors.hasOwnProperty(palette)) {
      spectrum = generateSpectrum(colors[palette], 60)
    } else {
      spectrum = generateSpectrum(colors[defaultPalette], 60)
    }
    return spectrum
  }

  render() {
    return (
      <div
        onClick={this.changeColor}
        onTouchStart={this.changeColor}
        onTouchMove={this.changeColor}
        onMouseMove={this.changeColor}
        onTouchEnd={this.changeColor}
        style={{
        'width': `${this.props.width}`,
        'height': `${this.props.height}`, 
        'backgroundColor': `#${this.state.colors[0]}`
      }}>
      </div>
    )
  }
}

// Default to a square proportional to the viewport.
// https://www.w3.org/TR/css-values-4/#viewport-relative-lengths
ColorBlock.defaultProps = {
  width: '10vw',
  height: '10vh'
}

export default ColorBlock
