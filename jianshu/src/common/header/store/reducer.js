import * as contants from './constants'
import {fromJS} from 'immutable'

export default (state = fromJS({
  focused: false,
  mouseIn: false,
  list:[],
  page: 1,
  totalPage: 1
}), action) => {
  switch (action.type){
    case contants.SEARCH_FOCUS: 
      return state.set('focused',true)
    case contants.SEARCH_BLUR:
      return state.set('focused',false)
    case contants.CHANGE_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      })
    case contants.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case contants.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case contants.CHANGE_PAGE:
      return state.set('page',action.page)
    default:
      return state

  }
}