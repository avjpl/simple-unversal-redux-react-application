import React, { PropTypes, Component } from 'react';

export default class PostcodeForm extends Component {
  handleSubmit = () => {
    const node = this.refs['postcode-input'];

    this.props.postcodeLookup(node.value);

    node.value = '';
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="type in a postcode" ref="postcode-input" />
        <input type="submit" value="OK!" onClick={this.handleSubmit} />
      </div>
    );
  }
}

PostcodeForm.propTypes = {
  postcodeLookup: PropTypes.func.isRequired
};