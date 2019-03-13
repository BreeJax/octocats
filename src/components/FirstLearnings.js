import React, { Component } from "react"

class FirstLearnings extends Component {
  render() {
    {
      if (this.props.learning === "Liz") {
        return (
          <ul>
            <li>How crazy into musicals {this.props.learning} is</li>
          </ul>
        )
      } else if (this.props.learning === "Component") {
        return (
          <ul>
            <li>How evil {this.props.learning} are</li>
          </ul>
        )
      } else if (this.props.learning === "Props") {
        return (
          <ul>
            <li>How confusing {this.props.learning} are</li>
          </ul>
        )
      } else {
        return (
          <ul>
            <li>Along with {this.props.learning}</li>
          </ul>
        )
      }
    }
  }
}

export default FirstLearnings
