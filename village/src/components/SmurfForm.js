import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    done: false,
    redirect: false
  };

  addSmurf = e => {
    const { addSmurf } = this.props,
          { name, age, height } = this.state,
          smurf = {
            name,
            age,
            height
          };

    e.preventDefault();

    addSmurf(smurf);

    this.setState({
      name: '',
      age: '',
      height: '',
      done: true
    });

    this.props.setTimeout(_ => this.setState({ done: false }), 1000);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <form onSubmit={this.addSmurf}>
          <input
            autoFocus
            className="name"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="age"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="height"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">ADD</button>
        </form>
        {this.state.done && <p>ADDED SMURF</p>}
      </div>
    );
  }
}

export default ReactTimeout(SmurfForm);
