export default function PostcodesReducer(state = [], action) {
  switch(action.type) {
    case 'POSTCODE_LOOKUP':
      console.log(action.res.data.result)
      console.log([].concat(action.res.data.result));
      return [].concat(action.res.data.result)
    default:
      return state;
  }
}
