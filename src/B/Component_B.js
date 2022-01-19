import React, { Component } from 'react';
import '../style.css';
import MessageBus from '../MessageBus';
import Component_B1 from './Component_B1';
import Component_B2 from './Component_B2';

class B extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.textAreaRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    MessageBus.on('SUBMIT_ON_BACK', this.handleSubmit, this);
  }

  handleSubmit(event) {
    console.log('HANDLE SUBMIT CALLED');
    const { payload = 'Submit' } = event;
    alert(
      `Name is ${this.inputRef.current.state.value}\nDescription ${this.textAreaRef.current.state.value}\nCalled from ${payload}`
    );
    event?.preventDefault?.();
  }

  componentWillUnmount() {
    MessageBus.off('SUBMIT_ON_BACK', this.handleSubmit, this);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Component_B1 ref={this.inputRef} />
          <Component_B2 ref={this.textAreaRef} />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default B;
