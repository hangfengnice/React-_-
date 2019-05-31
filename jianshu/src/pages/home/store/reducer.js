import {fromJS} from 'immutable'
import {contants} from '../store'

const defaultValue = {
  "topicList": [],
  "articleList": [],
  "recommendList": [],
  articlePage: 1,
  showScroll: false
}

const changeHomeData = (state,action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}
const addAriticleList = (state,action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

export default (state = fromJS(defaultValue), action) => {
  switch (action.type){

    case contants.CHANGE_HOME_DATA:
      return changeHomeData(state,action)

    case contants.ADD_HOME_LIST:
      return addAriticleList(state.action)

    case contants.TOOGLE_SCROLL_TOP:
    return state.merge({
      showScroll: action.show
    })
    
    default:
      return state

  }
}