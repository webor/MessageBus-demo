import React, { Component } from 'react';

class B2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <textarea
          type="textbox"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter Description"
        ></textarea>
      </div>
    );
  }
}

/* export the component to be used in other components */
export default B2;
