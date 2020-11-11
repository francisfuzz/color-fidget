import React from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import ColorBlock from './components/color-block'

class App extends React.Component {
  targetElement = null

  componentDidMount() {
    this.targetElement = document.querySelector('#root')
    disableBodyScroll(this.targetElement)
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  render() {
    return (
      <ColorBlock />
    )
  }
}

export default App
