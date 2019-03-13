import React, { Component } from "react"
import HelloWorld from "./components/HelloWorld"
import FirstClass from "./components/FirstClass"
import FirstLearnings from "./components/FirstLearnings"

const persons = ["Guys", "Gals", "Non-Binary Pals"]
const learning = ["Component", "Props", "App-App", "Liz"]

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {persons.map((person) => {
//           return <HelloWorld person={person} />
//         })}
//         //* <HelloWorld person="Guys" />
//         // <HelloWorld person="Gals" />
//         // <HelloWorld person="Non-Binary Pals" /> *//
//         <FirstClass />
//       </div>
//     )
//   }
// }
class App extends Component {
  render() {
    return (
      <div>
        {persons.map((personX) => {
          return <HelloWorld person={personX} />
        })}
        <FirstClass />
        <h4>Today We are learning about:</h4>
        {learning.map((learningX) => {
          return <FirstLearnings learning={learningX} />
        })}
      </div>
    )
  }
}

export default App
