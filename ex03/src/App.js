import logo from './logo.svg';
import './App.css';
import React from 'react';
ReactDOM.render(<App />, document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    )
  }
}

export default App;
