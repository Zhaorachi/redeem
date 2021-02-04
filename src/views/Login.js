import React, {Component} from 'react'
import './Login.css'

import apiClient from "../Services/ApiClient";

export default class Login extends Component {

    state = {
        email: '',
        cname: '',
        message: '',
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
                const status = res.data.status;
                if(status === 200) this.setState({cname: 'success', message: res.data.message});
                else if(status === 500) this.setState({cname: 'error', message: res.data.message});
                else this.setState({cname: 'warning', message: res.data.message});
            })
            .catch((err) => {
                console.log(err)
            });
    };

    render() {
        const { cname, message } = this.state;
        return (
            <div className='loginBox'>
                <h1>Login</h1>
                {cname !== "" &&
                    <div className={cname}>
                        {message}
                    </div>
                }
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
