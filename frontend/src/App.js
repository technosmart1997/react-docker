import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const apiUrl = `http://localhost:5000`;

class App extends Component {
  state = {
    users: []
  };

  

  async loadUsers() {
    const res = await axios.get('/api/getData');
    this.setState({
      users: res.data.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <h2>Hello Every One </h2>
        {this.state.users.length && this.state.users.map(user => {
          return <h2>{user.name}</h2>
        })}
      </div>
    );
  }
}

export default App;