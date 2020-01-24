import React, { Component } from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info : {
            name : '이름',
            phone : '010-1234-5678',
            id : 0
        }
    }
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 2be033f41587414cbab6d8ca434d537201aeb28a

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
<<<<<<< HEAD
        const { name, phone, value } = e.target;
        this.setState({
            [name] : value,
            [phone] : value
=======
        const { name, value } = e.target;
        this.setState({
            [name] : value
>>>>>>> 2be033f41587414cbab6d8ca434d537201aeb28a
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

<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 2be033f41587414cbab6d8ca434d537201aeb28a
    render(){

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
        const { editing } = this.state;

=======
        const { editing } = this.state;

        if(editing){
>>>>>>> 2be033f41587414cbab6d8ca434d537201aeb28a
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
<<<<<<< HEAD
=======
        }
>>>>>>> 2be033f41587414cbab6d8ca434d537201aeb28a




<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 2be033f41587414cbab6d8ca434d537201aeb28a
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