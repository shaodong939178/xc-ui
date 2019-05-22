//public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

export const page_list = (page,size,params) => {
  //将params对象数据平装成key value串
  //将json对象转成key/value对
  let query = querystring.stringify(params)
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size)
}
//新增页面
export  const  page_add = params =>{
  return http.requestPost(apiUrl+'/cms/page/add/',params)
}
//根据ID查询页面信息
export const page_get = (id) =>{
 return http.requestQuickGet(apiUrl+'/cms/page/get/'+id)
}
//修改页面
export  const  page_edit = (id,params) =>{
 return http.requestPut(apiUrl+'/cms/page/edit/'+id,params)
}

//删除页面
export  const  page_del = (id)=>{
  return http.requestDelete(apiUrl+'/cms/page/del/'+id)
}
