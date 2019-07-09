import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component{

    constructor(props){
        super(props);

        this.state ={
            visible : false
        };
    }

    handleMouseDown = (e) => {
        this.toggleMenu();

        console.log("click!");
        e.stopPropagation();
    }

    toggleMenu = () => {
        this.setState({
            visible : !this.state.visible
        });
    }

    render(){
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown = {this.handleMouseDown}
                      menuVisibility={this.state.visible} />
                <div>
                    <p> Menu </p>
                    <ul>
                        <li> One </li>
                        <li> Two </li>
                        <li> Three </li>
                        <li> Four </li>
                        <li> Five </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;