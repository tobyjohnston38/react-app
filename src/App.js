import React, { useState } from "react"
import "./App.css"
import Person from "./Person/Person"

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  })

  const [otherState] = useState("some other value")

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('this was clicked')
    // DONT DO THIS this.state.persons[0].name = 'Maxy Max';
    setPersonsState({
      persons: [
        { name: "Maxy Max", age: 29 },
        { name: "Manu Panu Po Fanu", age: 29.5 },
        { name: "Stephanie Wephanie", age: 27 }
      ]
    })
  }

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
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
        {" "}
        My Hobbies: Racing
      </Person>
    </div>
  )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this should work'))
}

export default app
