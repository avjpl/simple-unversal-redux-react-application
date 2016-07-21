import request from 'axios';

const API_URL = 'http://api.postcodes.io/postcodes/';

export function postcodeLookup(text) {
  return {
    type: 'POSTCODE_LOOKUP',
    promise: request.get(`${API_URL}${text}`)
  };
}
