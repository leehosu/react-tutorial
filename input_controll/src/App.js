import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm.js';

class App extends Component { 
    handleCreate = (e) => {
        console.log(e);
    }
    render() { 
        return ( 
        <div className = "App">
            <PhoneForm onCreate = {this.handleCreate}/>
        </div>
        ); 
    } 
} 


export default App;

