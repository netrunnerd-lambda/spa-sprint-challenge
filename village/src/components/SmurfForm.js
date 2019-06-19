import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactTimeout from 'react-timeout';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    done: false,
    redirect: false
  };

  handleSmurf = e => {
    const { addSmurf, setTimeout, updating, updateSmurf } = this.props,
          { id } = this.props.match.params,
          { name, age, height } = this.state,
          smurf = {
            name,
            age,
            height
          };

    e.preventDefault();

    if (updating)
      updateSmurf(id, smurf);
    else
      addSmurf(smurf);

    this.setState({
      name: '',
      age: '',
      height: '',
      done: true
    });

    setTimeout(_ => this.setState({ done: false, redirect: updating }), 1000);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (this.props.updating)
      this.setState({...this.props.smurf});
  }

  render() {
    const { updating } = this.props,
          { name, age, height, done, redirect } = this.state;

    if (redirect)
      return <Redirect to="/" />;

    return (
      <div className="smurf-form">
        <form onSubmit={this.handleSmurf}>
          <input
            autoFocus
            className="name"
            onChange={this.handleInputChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            className="age"
            onChange={this.handleInputChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            className="height"
            onChange={this.handleInputChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button type="submit">{updating ? 'UPDATE' : 'ADD'}</button>
        </form>
        {done && <p>{updating ? 'UPDATED' : 'ADDED'} SMURF</p>}
      </div>
    );
  }
}

export default ReactTimeout(SmurfForm);
