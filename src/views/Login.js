import React, { Component } from 'react'
import './Login.css'

import apiClient from "../Services/ApiClient";

export default class Login extends Component{
  
  state = {
    emailPayer: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      emailPayer
    } = this.state;
    console.log('it works', emailPayer)
    apiClient
    .login({
      emailPayer
    })
    .catch((err) =>{
      console.log(err)
    });
  };
  
  render(){
    
    return(
      <div className='loginBox'>
        <h1>Login</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="emailPayer"
            placeholder="jhondoe@gmail.com"
            onChange={this.handleChange}
          />
          <br/>
          <input
            type='submit'
            value='Login'
          />
          </form>
      </div>
    )
  }
}