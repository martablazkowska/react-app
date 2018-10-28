import React, {Component}          from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import Notifications from './../components/common/notifications/Notifications';
import Header from './../components/common/header/Header';
import HomePage from './../components/homePage/homePage';
import LoginPage from './../components/loginPage/loginPage';


import { notificationsActions } from './../actions/notificationsActions';

import reducers from './../reducers'

const title = 'My Minimal React Webpack Babel Setup aaa';

const store = createStore(reducers);


class App extends Component {
  constructor(props){
    super(props);

  }

  render() {

    return (
      <Provider store={store}>
        <div>
          <Router>
            <div className="Container">
              <Header />
              <Notifications />
              <div className="InnerContainer">
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/login" component={LoginPage}/>
                  {/*<Route component={NoMatch}/>*/}
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App;
