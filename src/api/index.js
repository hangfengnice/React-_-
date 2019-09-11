import ajax from './ajax'
import jsonp from 'jsonp'
import { message } from 'antd'

const Base = ''

export function reqLogin(username, password) {
  ajax({
    method: 'post',
    url: "/login",
    data: {
      username,
      password
    }
  })
}

export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    jsonp(url, {}, (err, data) => {
      if(!err && data.error === 0) {
        console.log(data);
        const { dayPictureUrl, weather } = data.results[0].weather_data[0]
        resolve({dayPictureUrl, weather});
      } else {
        message.error('获取天气信息失败')
      }
    });
  })
  
}

// 获取分类列表
// export const reqCategorys = () => ajax({
//   url: "/manage/category/list"
// })
export const reqCategorys = () => ajax(Base + "/manage/category/list")

// 添加分类
export const reqAddCategory = categoryName => ajax.post(Base + "/manage/category/add", {
           categoryName
         });

// 更新分类
export const reqUpdateCategory = ({categoryId,categoryName}) => {
  console.log(categoryId, categoryName);
  return ajax.post(Base + "/manage/category/update", {
    categoryId,
    categoryName
  });}

// 获取商品分页列表
export const reqProducts = (pageNum, pageSize) => ajax(Base + "/manage/product/list", {params: {
  pageNum,
  pageSize
}})

// 跟据 Name/ Desc 搜索藏品分页列表
export const reqSearchProducts = ({pageNum, pageSize, searchName, searchType}) => ajax(Base + '/manage/product/search', {
  params: {
    pageNum,
    pageSize,
    [searchType]: searchName,
  }
})

// 对商品进行上下架操作
export const reqUpdateStatus = (productId, status) => ajax(Base + '/manage/product/updateStatus', {
  method: "POST",
  date: {
    productId,
    status
  }
})
