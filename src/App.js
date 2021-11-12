import React, { useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import ColorBlock from './components/color-block'

function App () {
  const targetRef = useRef(null)

  useEffect(() => {
    disableBodyScroll(targetRef.current)
    return () => {
      clearAllBodyScrollLocks()
    }
  })

  return (
    <div>
      <ColorBlock ref={targetRef} palette="autumn" width="100vw" height="100vh"/>
    </div>
  )
}

export default App
