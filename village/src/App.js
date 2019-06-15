import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    endpoint: 'http://localhost:3333/smurfs',
    smurf: null,
    smurfs: []
  };

  addSmurf = s => axios.post(this.state.endpoint, {...s})
                       .then(res => this.updateSmurfs(res.data))
                       .catch(err => console.log(err));

  deleteSmurf = id => axios.delete(`${this.state.endpoint}/${id}`)
                           .then(res => this.updateSmurfs(res.data))
                           .catch(err => console.log(err));

  getSmurfs = _ => axios.get(this.state.endpoint)
                        .then(res => this.updateSmurfs(res.data))
                        .catch(err => console.log(err));

  updateSmurfs = s => this.setState({ smurfs: s });

  componentDidMount() {
    this.getSmurfs();
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <main>
          <Route
            exact path="/"
            render={props => <Smurfs
                               {...props}
                               deleteSmurf={this.deleteSmurf}
                               smurfs={this.state.smurfs}
                             />}
          />
          <Route
            path="/smurf-form"
            render={props => <SmurfForm
                               {...props}
                               addSmurf={this.addSmurf}
                             />}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
