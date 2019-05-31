import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
import {
  ListWrapper,
  ListWrapperItem,
  LoadMore
} from '../style'

class List extends PureComponent {
  render(){
    const {list, getMoreList, page} = this.props
    return (
      <div>
      {
        list.map((item,index) =>(
          <Link to={'/detail/'+item.get('id')} key={index} >
        <ListWrapper >      
          <img src={item.get('imgurl')} alt=""/>
          <ListWrapperItem>
            <h3>{item.get('title')}</h3>
            <p>{item.get('decs')}</p>
          </ListWrapperItem>
        </ListWrapper>
        </Link>
        ))}
        <LoadMore onClick={() => getMoreList(page)}>了解更多</LoadMore>
      </div>
    ) 
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState,mapDispatch)(List)