import React, { Component } from 'react';
import { connect } from 'react-redux';

import {notificationsActions} from "../../actions/notificationsActions";


class LoginPage extends Component {
  constructor(props){
    super(props);

    const {dispatch} = this.props;
    //dispatch(notificationsActions.notifySuccess('I\'m on Login page'));

  }

  render() {

    return (
      <div>Login Page</div>
    )
  }
}

export default connect()(LoginPage);
