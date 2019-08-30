import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps ={
        list : [],
        onRemove : () => console.warn('not exist remove data'),
        onUpdate : () => console.warn('not exist update data')
    };

    render(){

        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo 
                    key = {info.id} 
                    info = {info} 
                    onRemove = {onRemove}
                    onUpdate = {onUpdate}    
                />)
        )

        return(
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;