import React, { Component } from 'react';
import { connect } from 'react-redux';

//import {notificationsActions} from "../../actions/notificationsActions";


class HomePage extends Component {
  constructor(props){
    super(props);

    const {dispatch} = this.props;

    //dispatch(notificationsActions.notifySuccess('my message'));
    //dispatch(notificationsActions.notifySuccess('my message 2'));

  }

  render() {

    return (
      <div>Home Page</div>
    )
  }
}

export default connect()(HomePage);
