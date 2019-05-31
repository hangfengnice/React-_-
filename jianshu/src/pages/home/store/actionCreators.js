import axios from 'axios'
import {contants} from '../store'
import {fromJS} from 'immutable'

const changeHomeDate = (result) => ({
  type: contants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
const addHomeList = (result,nextPage) => ({
  type: contants.ADD_HOME_LIST,
  list: fromJS(result),
  nextPage
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(changeHomeDate(res.data.data))
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res) => {
      dispatch(addHomeList(res.data.data,page+1))
    })
  }
}
export const toggleTopShow = (show) => ({
   type: contants.TOOGLE_SCROLL_TOP,
   show
})
