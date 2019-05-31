import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  marginleft: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`
export const ListWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 ;
  border-bottom: 1px solid #dcdcdc;
  img{
    float: right;
    height: 100px;
    width: 125px;
    border-radius: 10px;
  }
`
export const ListWrapperItem = styled.div`
  width: 500px;
  float: left;
  h3{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  p{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  height: 50px;
  width: 280px;
  background: url(${(props) =>props.img});
  background-size: contain;
`
export const WritterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 66px;
  right: 66px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;

`