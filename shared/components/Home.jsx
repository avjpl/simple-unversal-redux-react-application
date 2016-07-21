import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import * as PostcodeActions from 'actions/PostcodeActions';
import { connect } from 'react-redux';

import PostcodeView from './PostcodeView';
import PostcodeForm from './PostcodeForm';

class Home extends Component {
  static needs = [];

  render() {
    const { postcodes, dispatch } = this.props;

    return (
      <div>
        <PostcodeForm {...bindActionCreators(PostcodeActions, dispatch)}/>
        <PostcodeView postcodes={postcodes} {...bindActionCreators(PostcodeActions, dispatch)} />
      </div>
    );
  }
}

Home.propTypes= {
  postcodes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => ({ postcodes: state.postcodes }))(Home)
