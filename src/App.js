import React from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import generateGradient from './generate-gradient'

// https://colorhunt.co/palette/132892
const steps = 60
const autumnalColors = generateGradient('f3f0d1', 'e29c68', steps)
  .concat(generateGradient('e29c68', 'c85108', steps))
  .concat(generateGradient('c85108', 'a20e0e', steps))
  .concat(generateGradient('a20e0e', 'c85108', steps))
  .concat(generateGradient('c85108', 'e29c68', steps))
  .concat(generateGradient('e29c68', 'f3f0d1', steps))

class App extends React.Component {

  targetElement = null

  constructor(props) {
    super(props)
    this.state = {
      colors: autumnalColors,
      color: 'f3f0d1'
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
