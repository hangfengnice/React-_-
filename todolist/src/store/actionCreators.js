import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM,INIT_LIST} from './actionTypes.js'
import axios from "axios";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAciton = (data) => ({
  type: INIT_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios("/list.json").then((res) => {
      const { data } = res;
      dispatch(initListAciton(data))
    });
  }
}