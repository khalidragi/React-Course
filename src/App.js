import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Ragi", age: 32 },
      { name: "Salim", age: 1 }
    ]
  };

  switchNameHandler = () => {
    // DON'T DO THAT
    //  this.state.persons[0].name = "something";
    this.setState({
      persons: [
        { name: "Mira", age: 29 },
        { name: "Ragi", age: 33 },
        { name: "Salim", age: 1 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Mira", age: 29 },
        { name: event.target.value, age: 33 },
        { name: "Salim", age: 1 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid grey",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi I am a React App.</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}
        >
          Hobbies: Web Development
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
