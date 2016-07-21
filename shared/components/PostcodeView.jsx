import React from 'react';
import { PropTypes, Component } from 'react';

export default class PostcodeView extends Component {
  render() {
    return (
      <div>
        {
          this.props.postcodes.map((postcode, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>Postcode: { postcode.postcode }</li>
                  <li>Parliamentary Consistuency: { postcode.parliamentary_constituency }</li>
                  <li>Region: { postcode.region }</li>
                  <li>District: { postcode.admin_district }</li>
                  <li>latitude: { postcode.latitude }</li>
                  <li>longitude: { postcode.longitude }</li>
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  }
}

PostcodeView.propTypes = {
  postcodes: PropTypes.array.isRequired,
};