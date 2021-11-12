import React, {useState, useEffect} from 'react'
import generateSpectrum from '../lib/generate-spectrum'
import seasonalColors from '../lib/colors/seasonal-colors'
const defaultPalette = Object.keys(seasonalColors)[0]

function ColorBlock ({
  palette = defaultPalette,
  width = '100vw',
  height = '100vh',
  ...props
}) {
  const spectrum = generateSpectrum(seasonalColors[palette], 60)
  const [state, setState] = useState({
    color: spectrum[0],
    step: 0
  })

  function changeColor () {
    const next
      = (state.step === spectrum.length - 1)
        ? 0
        : state.step + 1

    setState({
      color: spectrum[next],
      step: next
    })
  }

  useEffect(() => {
    const interval = setInterval(changeColor, 32)
    return () => clearInterval(interval)
  })

  return (
    <div
      {...props}
      onClick={changeColor}
      onTouchStart={changeColor}
      onTouchMove={changeColor}
      onMouseMove={changeColor}
      onTouchEnd={changeColor}
      className='color-block'
      style={{
      'width': `${width}`,
      'height': `${height}`,
      'backgroundColor': `#${state.color}`
    }}>
    </div>
  )
}

export default ColorBlock
