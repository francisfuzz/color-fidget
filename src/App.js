import React from 'react';

// https://colorhunt.co/palette/132892
// How do I transition these?
const colors = [
  'f3f0d1',
  'e29c68',
  'c85108',
  'a20e0e'
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: `#${colors[0]}`
    }

  }

  render() {
    return (
      <div style={{
        'minWidth': '100vw',
        'minHeight': '100vh',
        'backgroundColor': this.state.color
      }}>
      </div>
    );
  }
}

export default App;
