import React, { Component } from "react"
import HelloWorld from "./components/HelloWorld"
import FirstClass from "./components/FirstClass"

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <FirstClass />
      </div>
    )
  }
}

export default App
