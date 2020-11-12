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
    const blocks = []
    let i = 0
    do {
      i += 1
      blocks.push(<ColorBlock palette="autumn" width="100vw" height="10vh"/>)
    } while (i < 10)

    return (
      <div>
        {blocks}
      </div>
    )
  }
}

export default App
