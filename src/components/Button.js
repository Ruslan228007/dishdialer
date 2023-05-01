import React, { Component } from 'react'
import './../css/button.css'
export default class Button extends Component {
  render() {
    return (
        <a href={this.props.link} className={'button dark '+ this.props.variant} >{this.props.content}</a>
    )
  }
}
