import React from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import generateGradient from './generate-gradient'

// https://colorhunt.co/palette/132892
const autumnalColors = [
  'f3f0d1',
  'e29c68'
]

const spectrum = generateGradient(autumnalColors[0], autumnalColors[1], 20)

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
