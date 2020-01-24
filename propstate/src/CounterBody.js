import React, {Component} from 'react';

class Counter extends Component {
  render() {
    return <span>Clicked {this.props.value} thies.</span>;
  }
}

export default Counter;