import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  }

  switchNameHandler = newName => {
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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>thing</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this should work'))
}
export default App
