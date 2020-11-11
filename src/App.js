import React from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import generateSpectrum from './lib/generate-spectrum'
import colors from './lib/colors'

const palette = colors.summer

const spectrum = generateSpectrum(palette, 60)

class App extends React.Component {

  targetElement = null

  constructor(props) {
    super(props)
    this.state = {
      colors: spectrum,
      color: palette[0]
    }
    this.changeColor = this.changeColor.bind(this)
  }

  componentDidMount() {
    this.targetElement = document.querySelector('#root')
    disableBodyScroll(this.targetElement)
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  changeColor(event) {
    event.preventDefault()
    event.stopPropagation()

    const newColors = this.state.colors.slice()
    const nextColor = newColors.shift()
    newColors.push(nextColor)

    this.setState({
      color: nextColor,
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
        'minWidth': '100vw',
        'minHeight': '100vh',
        'backgroundColor': `#${this.state.color}`
      }}>
      </div>
    )
  }
}

export default App
