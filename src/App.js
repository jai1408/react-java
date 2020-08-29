import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';

class App extends Component {

  /*state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/groups');s
    console.log(response);
    const body = await response.json();
    console.log(body);
    this.setState({ groups: body, isLoading: false });
  }*/

  render() {

    /*const { groups, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }*/

    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jugtours</h1>
        </header>ss
        <h2>Jug List</h2>
        {groups.map(group =>
          <div key={group.id}>
            {group.name}
          </div>
        )}
      </div>*/
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/groups' exact={true} component={GroupList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
