import initialState from './initialState';
// import * as types from '../actions/actionTypes';

const storyReducer = (state = initialState.currencies, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default storyReducer;
