import { types } from './../../actions/types';
import { type } from 'os'; // @TODO: implement later

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS_LISTS:
      return action.payload
    default:
      return state;
  }
};
