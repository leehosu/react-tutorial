import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.handleMouseDown === this.props.handleMouseDown){
            return false;
        } else {
            return true;
        }
    }
    
    render() {
        console.log("Rendering : MenuButton");
        return(
            <button id = "roundButton"
                    onMouseDown = {this.props.handleMouseDown} />
        );
    }
}

export default MenuButton;