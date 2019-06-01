import {fromJS} from 'immutable'
import {contants} from '../store'

const defaultValue = {
  login: false
}



export default (state = fromJS(defaultValue), action) => {
  switch (action.type){
    case contants.CHANGE_LOGIN:
    return state.set('login',action.value)
    case contants.CHANGE_LOGOUT:
    return state.set('login',action.value)
    default:
      return state

  }
}