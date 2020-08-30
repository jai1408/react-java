import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';

class App extends Component {

  /*
  ! This commented section is sample code for fetching GET method of URL
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('https://user-event-service.cfapps.io/api/groups');s
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
          <Route path='/groups/:id' component={GroupEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
