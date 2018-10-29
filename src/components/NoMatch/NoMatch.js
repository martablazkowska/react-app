import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NoMatch extends Component {
  constructor(props){
    super(props);

    const {dispatch} = this.props;


  }

  render() {

    return (
      <div>
        <h2>404 error</h2>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default NoMatch;
