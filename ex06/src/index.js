import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component { 
  render() {
    // Change code below this line
    const world = "World";
    // Change code above this line
    return (
      <div ClassName="App">
        <h1>Hello, {world}!</h1> // Change this line
      </div>
    )
  }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reactDom.render(<App />, document.getElementById('root'));