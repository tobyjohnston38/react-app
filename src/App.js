import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { id: "dfgf", name: "Max", age: 28 },
      { id: "fggr", name: "Manu", age: 29 },
      { id: "ggie", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
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

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            )
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
