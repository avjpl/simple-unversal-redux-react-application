import React, { PropTypes, Component } from 'react';

export default class MainView extends Component {

  render() {
    return (
      <div id="main-view">
        <h1>Postcode Lookup</h1>

        <hr />

        {this.props.children}
      </div>
    );
  }
}

MainView.propTypes = {
  children: PropTypes.object
};