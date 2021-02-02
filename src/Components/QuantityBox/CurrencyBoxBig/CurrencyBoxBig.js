import React, { Component } from 'react'
import '../box.css'

export default class CurrencyBoxBig extends Component {
  render(){
    return(
      <div className='big-box'>  
      {this.props.quantity} {this.props.currency}     
      </div>
    )
  }
}