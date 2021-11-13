import React from 'react'
import ColorBlock from './components/color-block'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class App extends React.Component {
  targetElement = null

  componentDidMount () {
    this.targetElement = document.querySelector('#primary-color-block')
    disableBodyScroll(this.targetElement)
  }

  componentWillUnmount () {
    clearAllBodyScrollLocks()
  }

  render () {
    return (
      <div className="app">
        <ColorBlock
          id="primary-color-block"
          palette="autumn" />
      </div>
    )
  }
}

export default App
