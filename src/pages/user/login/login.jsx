
import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username：</label>
                    <input type="text" autoFocus={true} required={true} />
                </div>
                <div>
                    <label>Password：</label>
                    <input type="password" required={true} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        )
    }
}