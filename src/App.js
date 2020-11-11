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
      <div>
        <ColorBlock width="100vw" height="20vh"/>
        <ColorBlock palette="autumn" width="100vw" height="20vh"/>
        <ColorBlock palette="summer" width="100vw" height="20vh"/>
        <ColorBlock palette="winter" width="100vw" height="20vh"/>
        <ColorBlock palette="autumn" width="100vw" height="20vh"/>
      </div>
    )
  }
}

export default App
