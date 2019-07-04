import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./todo.js";
import TodoList from "./todo.js";

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
);
