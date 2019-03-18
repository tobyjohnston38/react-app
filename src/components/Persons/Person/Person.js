import React, { Component } from "react"
import PropTypes from "prop-types"

import Aux from "../../../hoc/Aux"
// import withClasses from "../../../hoc/withClass"
import withClass from "../../../hoc/withClass"
import classes from "./Person.css"
class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
  }
  render() {
    console.log("[Person.js] rendering...")
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>} 
        <p key="i1" onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person)
