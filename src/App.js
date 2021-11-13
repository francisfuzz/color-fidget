import React from 'react'
import ColorBlock from './components/color-block'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class App extends React.Component {
  targetRef = React.createRef()
  targetElement = null

  componentDidMount () {
    this.targetElement = this.targetRef.current
    disableBodyScroll(this.targetElement)
  }

  componentWillUnmount () {
    clearAllBodyScrollLocks()
  }

  render () {
    return (
      <div className="app">
        <ColorBlock
          ref={this.targetRef}
          palette="autumn" />
      </div>
    )
  }
}

export default App
