import React from 'react';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
      </div>
    );
  }
}
