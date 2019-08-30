import React, { Component } from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info : {
            name : '이름',
            phone : '010-1234-5678',
            id : 0
        }
    }

    state = {
        editing : false,
        name : '',
        phone : ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing : !editing
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    componentDidUpdate(prevProps, prevState){
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing){
            this.setState({
                name : info.name,
                phone : info.phone
            })
        }
        
    if(prevState.editing && !this.state.editing){
        onUpdate(info.id, {
            name : this.state.name,
            phone : this.state.phone
        });
    }
    }

    render(){

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if(editing){
            if (editing) { // 수정모드
                return (
                  <div style={style}>
                    <div>
                      <input
                        value={this.state.name}
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <input
                        value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                      />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                  </div>
                );
              }
        }




        const {
            name, phone
        } = this.props.info;

        return (
            <div className = "App-main" style = {style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>

        );
    }
}

export default PhoneInfo;