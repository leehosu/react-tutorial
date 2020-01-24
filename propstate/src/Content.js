import React, {Component} from 'react';
import ClickCounterButton from './ClickCounterButton';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = (event) => {
    this.setState({
      counter : this.state.counter++,
    })
  }

  render() {
    return  (
      <div>
        <ClickCounterButton handler={this.handleClick} />
      </div>
    )
  }
}

export default Content;