import { ADD_BOOKMARK, DELETE_BOOKMARK, GET_USERS } from '../actions/types'

export default function bookmarksReducer(state = [], action) {
    switch (action.type) {
      case ADD_BOOKMARK:
        return [...state, action.payload];
      case DELETE_BOOKMARK:
        return state.filter(bookmark => bookmark.id !== action.payload.id);
        case GET_USERS:
        return [...state,  Object.assign({}, action.payload)]
      default:
        return state;
    }
  }