import React, { Component } from "react"

class HelloWorld extends Component {
  render() {
    // console.log(this.props)
    {
      if (this.props.person === "Non-Binary Pals") {
        return <h1>and our amazing {this.props.person}!</h1>
      } else if (this.props.person === "Guys") {
        return <h1>Hello {this.props.person},</h1>
      } else {
        return <h1>{this.props.person},</h1>
      }
    }
  }
}

export default HelloWorld
