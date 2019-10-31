import React from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import generateSpectrum from './lib/generate-spectrum'

// https://colorhunt.co/palette/132892
const autumnalColors = [
  'a20e0e',
  'c85108',
  'e29c68',
  'f3f0d1'
]

const spectrum = generateSpectrum(autumnalColors, 10)

class App extends React.Component {

  targetElement = null

  constructor(props) {
    super(props)
    this.state = {
      colors: spectrum,
      color: autumnalColors[1]
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
    const nextColor = newColors.pop()
    newColors.unshift(nextColor)

    console.log(newColors)
    console.log(nextColor) 

    this.setState({
      color: nextColor,
      colors: newColors
    })
  }

  render() {
    return (
      <div
        onClick={this.changeColor}
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
