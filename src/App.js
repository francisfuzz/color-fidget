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
        <ColorBlock palette="spring" width="100vw" height="25vh"/>
        <ColorBlock palette="autumn" width="100vw" height="25vh"/>
        <ColorBlock palette="summer" width="100vw" height="25vh"/>
        <ColorBlock palette="winter" width="100vw" height="25vh"/>
      </div>
    )
  }
}

export default App
