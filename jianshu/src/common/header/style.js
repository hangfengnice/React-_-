import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${LogoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width:960px;
  margin: 0 auto;
  box-sizinng: border-box;
  height: 100%;
  padding-right: 70px;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused{
      background: #777;
      color: #FFF;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: "hangfeng"
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  font-size: 14px;
  background-color: #eee;
  color: #666;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    transition: all 0.2s ease;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    tarnsition: all .2s ease;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    float: left;
    margin-right: 2px;
    transition: all .2s ease;
    transfrom-origin: center;
  }
`
export const SrarchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;

`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`
export const  A = styled.div`

`