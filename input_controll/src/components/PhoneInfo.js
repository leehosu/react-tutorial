import React, { Component } from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info : {
            name : '이름',
            phone : '010-1234-5678',
            id : 0
        }
    }
    render(){

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone
        } = this.props.info;

        return (
            <div className = "App-main" style = {style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>

        );
    }
}

export default PhoneInfo;