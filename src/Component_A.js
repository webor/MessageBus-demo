import React from 'react';
import MessageBus from './MessageBus';
import './style.css';

class A extends React.Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    MessageBus.trigger('SUBMIT_ON_BACK', {
      payload: 'This was called from Header',
    });
  }

  render() {
    return (
      <header
        style={{
          height: '50px',
          backgroundColor: '#f59542',
          border: 'solid 1px #ccc',
        }}
      >
        <button onClick={this.handleBack}>
          <i className="arrow left"></i>
        </button>
      </header>
    );
  }
}

export default A;
