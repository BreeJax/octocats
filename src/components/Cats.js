import React, { Component } from "react"

// class Cats extends Component {
//   render() {
//     let cats = []
//     fetch("https://sdg-octodex.herokuapp.com/")
//       .then(function(response) {
//         return response.json()
//       })
//       .then(function(myJson) {
//         cats = myJson
//         // console.log(JSON.stringify(myJson))
//       })
//     console.log(cats)
//     return <h2>This is cats!</h2>
//   }
// }

// {
//   learning.map((learningX) => {
//     return <FirstLearnings learning={learningX} />
//   })
// }

class Cats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      cats: []
    }
  }

  componentDidMount() {
    fetch("https://sdg-octodex.herokuapp.com")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cats: result.data
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, cats } = this.state
    console.log(cats)

    return (
      <ul>
        {cats.map((cat) => (
          <li key={cat.name}>
            <div>
              <img src={cat.image} />
              <p>{cat.name}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default Cats
