import axios from 'axios';
import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    endpoint: 'http://localhost:3333/smurfs',
    smurfs: []
  };

  addSmurf = s => axios.post(this.state.endpoint, {...s})
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
      <div className="App">
        <SmurfForm
          addSmurf={this.addSmurf}
        />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
