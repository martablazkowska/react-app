import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { notificationsActions } from '../../../actions/notificationsActions';

//import './Notifications.scss';


class Notifications extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    // clear notifications when user changes location
    this.props.history.listen((action, location) => {
      dispatch(notificationsActions.clearAllNotifications());
    })

  }

  render() {

    const { message } = this.props;

    return (
        <div>
          {!!message && message.map(item => (
            <Alert key={item} color="primary">
              {item}
            </Alert>
          ))}
        </div>
    )
  }
}

function mapStateToProps(state) {
  const message = state.notifications;
  return {
    message
  };
}

export default connect(mapStateToProps)(withRouter(Notifications));
