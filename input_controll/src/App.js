import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';

class App extends Component { 

    id = 0
    state = {
        information: [
            {
                id : this.id ++,
                name : '이호수',
                phone : '010 - 1234 - 5678'
            },
            {
                id : this.id++,
                name : '볼빨간 사춘기',
                phone : '010 - 4332 - 5678'
            }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information : information.concat({
                id : this.id ++,
                ...data
            })
        })
        console.log(data);
    }

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information : information.filter(
                info => info.id !== id
            )
        })
    }

    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState ({
            information : information.map(
                info => id === info.id
                ? { ...info, ...data}
                : info
            )
        })
    }

    render() {
        return ( 
        <div className = "App">
            <PhoneForm onCreate = {this.handleCreate}/>
            <PhoneInfoList 
                data={this.state.information}
                onRemove = {this.handleRemove}
                onUpdate = {this.handleUpdate}
                />
        </div>
        ); 
    } 
} 


export default App;

