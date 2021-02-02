import React, { Component } from 'react'
import './box.css'
import BigBox from './CurrencyBoxBig/CurrencyBoxBig'
import SmallBox from './CurrencyBoxSmall/CurrencyBoxSmall'
import axios from "axios"
import SwapVertIcon from '@material-ui/icons/SwapVert'

export default class QuantityBox extends Component{
  state  ={
    btcAmount : this.props.btcAmount,
    currency: 'USD',
    currencySymbol: '$',
    price: '',
    quantityInFiat: 0,
  }

  savePrice() {
    axios
      .get(`https://api.coinbase.com/v2/prices/spot?currency=${this.state.currency}`)
      .then((response) => {
        this.setState({ price: response.data.data.amount });
        //console.log(response.data.data.amount)
      })
      .then(() => 
      this.amountCalculator()
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  changeCurrencySymbol() {
    if (this.state.currency === 'EUR'){
      this.setState({
        currencySymbol: '€'
      })
    }
  }
  amountCalculator(){
    this.setState({
      quantityInFiat: this.state.price * this.state.btcAmount 
    })
  }
  componentDidMount(){
    var url = 'https://ipapi.co/json/';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          currency: responseJson.currency
        });
      })
      .then(() =>
      this.savePrice())
      .then(() => 
      this.changeCurrencySymbol())
      .catch((error) => {
       //console.error(error);
      });
      
  }
  render(){
    return(
      <div className="mainBox">
        <h1>Quantity</h1>
        <BigBox quantity={this.state.btcAmount} currency={'BTC'}/>
        <SmallBox quantity={this.state.quantityInFiat.toFixed(2)} currencySymbol={this.state.currencySymbol} currency={this.state.currency}/>
        <div className="box-interior marginBottom">
            <p className="precio-final">
            Actual Price
              {" "}
              ~ {( 1 ).toFixed(2)} BTC @{" "}
              <span className="marketPrice">
              {this.state.price ? this.state.price : "..."}{this.state.currencySymbol}</span>
            </p>
          </div>
      </div>
    )
  }
}