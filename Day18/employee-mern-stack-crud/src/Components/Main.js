import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListEmployee from '../Components/ListEmployee';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ListEmployee} />
          <Route  path='/list' component={ListEmployee}  />
          <Route  path='/add' component={AddEmployee}  />
          <Route  path='/:id' component={EditEmployee}  />
        </Switch>
      </main>
    );
  }
}

export default Main;