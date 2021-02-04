import React, {Component} from 'react'
import './Login.css'

import apiClient from "../Services/ApiClient";

export default class Login extends Component {

    state = {
        email: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {
            email
        } = this.state;
        console.log('it works', email);
        apiClient.login({email: email})
            .then(res => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    render() {

        return (
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
