/**
 * @file about
 */

import './about.less';
import React, {Component} from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'about' 
        }
    } 

    componentDidMount() {
        
    } 

    login() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="about-page-view">
                <div className="title">this is {this.state.title} page</div>
                <input type="button" value="去登录" onClick={() => this.login()} />
            </div>
        )
    }
} 