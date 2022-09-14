import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectPage from './pages/project';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header brand='ВахаВики'>
          
        </Header>

        <main className='main'>
          <Switch>
            <Route path="/project/:id" component={ProjectPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
