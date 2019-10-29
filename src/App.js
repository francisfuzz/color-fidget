import React from 'react';
import generateGradient from './generate-gradient'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // https://colorhunt.co/palette/132892
      colors: generateGradient('f3f0d1', 'e29c68', 10),
      color: 'f3f0d1'
    }
    this.changeColor = this.changeColor.bind(this)
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
    );
  }
}

export default App;
