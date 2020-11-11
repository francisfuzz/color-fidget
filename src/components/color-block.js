import React from 'react'
import generateSpectrum from '../lib/generate-spectrum'
import colors from '../lib/colors/seasonal-colors'

const palette = colors.winter
const spectrum = generateSpectrum(palette, 60)

class ColorBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: spectrum
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
