import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>thing</p>
        <button>Switch Name</button>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" >My Hobbies</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this should work'))
  }
}

export default App;
