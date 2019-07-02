import React, { Component } from "react";
import "./IPAddress.js"
import IPAddress from "./IPAddress.js";

var xhr;
class IPAddressContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            ip_address : "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://ip-api.com/json", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address : response.query
            });
        }
    }
    render(){
        return (
            <IPAddress ip = {this.state.ip_address} />
        );
    }
};

export default IPAddressContainer;