import {fromJS} from 'immutable'
import {contants} from '../store'

const defaultValue = {
 title: "",
 content:''
}

export default (state = fromJS(defaultValue), action) => {
  switch (action.type){

    case contants.CHANGE_DETAIL:
    return state.merge({
      title: action.title,
      content: action.content
    })
  
    default:
      return state

  }
}