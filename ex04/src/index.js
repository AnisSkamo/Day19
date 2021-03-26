import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component { 
  render() {
    return (
      <div ClassName="App">
        <h1>Hello, React"</h1>
      </div>
    )
  }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reactDom.render(<App />, document.getElementById('root'));
