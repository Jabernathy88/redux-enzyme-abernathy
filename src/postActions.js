// import axios from 'axios';

function getPosts() {
  return fetch("/posts")
    .then(handleErrors)
    .then(res => res.json());
}

function fakeGetPosts() {
  return new Promise(resolve => {

    setTimeout(
      () => 
        resolve({
          posts: [
            {
              id: 0,
              name: "Apple"
            },
            {
              id: 1,
              name: "Bananas"
            },
            {
              id: 2,
              name: "Strawberries"
            }
          ]
        }),
      1000
    );
  });
}

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fakeGetPosts()
    .then(json => {
      dispatch(fetchPostsSuccess(json.products));
      return json.products;
    })
    .catch(error => 
      dispatch(fetchPostsFailure(error))
    );
  };
}

// handle HTTP errors // TODO: REMOVE
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_POSTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_PRODUCTS_FAILRE";

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
})

export const fetchPostsSuccess = products => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { products }
})

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE
})
