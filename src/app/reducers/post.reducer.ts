// Remember, in Redux the state is immutable, so we always need to create a new object when the state changes.
// A reliable way of doing this is via Object.assign({}, state, newData), which builds a new object from left to right.
// In other words, the arguments on the right will overwrite the properties existing from the arguments on the left.


import * as PostActions from '../actions/post.actions';
import {Post} from '../models/post.model';

export type Action = PostActions.All;

// default app state
const defaultState: Post = {
  text: 'Hi, I am the default post',
  likes: 0
};

// helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

// reducer function
export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);
  // console.log(state.likes);
  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload});
    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});
    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});
    case PostActions.RESET:
      return defaultState;
    default:
      return state;
  }
}

