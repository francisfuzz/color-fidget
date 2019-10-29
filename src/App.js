import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // https://colorhunt.co/palette/132892
      colors: [
        'f3f0d1',
        'e29c68',
        'c85108',
        'a20e0e'
      ],
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
        'minWidth': '90vw',
        'minHeight': '90vh',
        'backgroundColor': `#${this.state.color}`
      }}>
      </div>
    );
  }
}

export default App;
