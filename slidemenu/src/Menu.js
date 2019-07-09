import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component{
    render() {
        var visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = "show";
        }
        
        console.log("Rendering : Menu");
        return (
            <div id = "flyoutMenu"
                onMouseDown = {this.props.handleMouseDown}
                className = {visibility}>

                <h2><a href = "/"> HOME </a></h2>
                <h2><a href = "/"> About </a></h2>
                <h2><a href = "/"> Contact </a></h2>
                <h2><a href = "/"> Search </a></h2>
            </div>
        );
    }
}

export default Menu;