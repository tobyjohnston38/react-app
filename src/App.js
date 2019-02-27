import React, { Component } from "react"
import classes from "./App.css"
import Person from "./Person/Person"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
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
    let persons = null
    let btnClass = ""

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                key={person.id}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
      btnClass = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>This is a React app!</h1>
        <p className={assignedClasses.join(" ")}>thing</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this should work'))
}
export default App
