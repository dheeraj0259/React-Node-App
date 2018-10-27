import uuidv4 from 'uuid/v4';
import { ADD_BOOKMARK, DELETE_BOOKMARK, GET_USERS } from './types';
import axios from 'axios'
export const addBookmark = ({ title, url }) => ({
    type: ADD_BOOKMARK,
    payload: {
      id: uuidv4(),
      title,
      url
    }
  })

  export const deleteBookmark = id => ({
    type: DELETE_BOOKMARK,
    payload: {
      id
    }
  })

  export const getUsers = allUsers => ({
    type: GET_USERS,
    payload: {
      users: allUsers
    }
  })

  export const fetchUsers = () => dispatch => {
return axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    return dispatch(getUsers(res))
})
  }