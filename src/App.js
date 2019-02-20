import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
      ],
          otherState: "some other value"
    }

  switchNameHandler = (newName) => {
    // console.log('this was clicked')
    // DONT DO THIS this.state.persons[0].name = 'Maxy Max';
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Manu Panu Po Fanu", age: 29.5 },
        { name: "Stephanie Wephanie", age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
        ]
    })
  }

  render () {
  return (
    <div className="App">
      <h1>This is a React app!</h1>
      <p>thing</p>
      <button onClick={() => this.switchNameHandler("Maximillion!!")}>
        Switch Name
      </button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Max!")}>
        My Hobbies: Racing
      </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
  )
  }
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this should work'))
}
export default App
