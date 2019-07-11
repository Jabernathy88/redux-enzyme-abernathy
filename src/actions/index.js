import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: GET_POSTS_LIST,
          payload: posts
        })
      );
};
