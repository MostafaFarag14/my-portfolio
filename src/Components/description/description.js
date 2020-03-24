import React, { Component } from 'react'
import './description.css'
export default class Description extends Component {
  render() {
    return (

      <div id="overView" className="overlay container" >
        {this.props.description}
      </div>

    )
  }
}
