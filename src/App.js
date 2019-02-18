import React, { useState } from "react"
import "./App.css"
import Person from "./Person/Person"

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  });

  switchNameHandler = () => {
    // console.log('this was clicked')
    // DONT DO THIS this.state.persons[0].name = 'Maxy Max';
    this.setState({
      persons: [
        { name: "Maxy Max", age: 29 },
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
  render() {
    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>thing</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={personsState.switchNameHandler.bind(this, "Max!")}
          changed={personsState.nameChangedHandler}>
          My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this should work'))
  }
}

export default app
