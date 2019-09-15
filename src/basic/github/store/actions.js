import axios from 'axios'
import {ERROR, SUCCESS, LOADING} from './constant'

export const loadingAction = () => ({
  type: LOADING
})
export const successAction = (usersArr) => ({
  type: SUCCESS,
  data: usersArr
})
export const errorAction = (usersArr) => ({
  type: ERROR
})
export const asyncSearch = (searchContent) => {
  return async dispatch => {
    console.log(searchContent);
    const url = `https://api.github.com/search/users?q=${searchContent}`;
    dispatch(loadingAction())
    try {
      const result = await axios(url);
      dispatch(successAction(result.data.items));
    } catch (error) {
      dispatch(errorAction());
    }
  }
}