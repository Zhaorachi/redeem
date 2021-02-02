import React, { Component } from 'react'
import '../box.css'

export default class CurrencyBoxSmall extends Component {
  render(){
    return(
      <div className='small-box'>   
      {this.props.quantity} {this.props.currency}     
      </div>
    )
  }
}