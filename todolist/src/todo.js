import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items : []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          itemArray.push(newItem);

          this.setState({
              items : itemArray
          });

        }
         
        console.log(this.state.items);
           
        this._inputElement.value = "";
        e.preventDefault();
      }

      deleteItem(key){
          var filteredItems = this.state.items.filter(function(item) {
              return (item.key !== key);
          });

          this.setState({
              items: filteredItems
          });
          
      }
    render(){
        return (
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit = {this.addItem}>
                        <input ref = {(a) => this._inputElement = a} 
                        placeholder = "enter!"></input>
                        <button type = "submit">add</button>
                    </form>
                </div>
                <TodoItems add={this.state.items}
                            delete = {this.deleteItem} />
            </div>

        );
    }
}

export default TodoList;