import {
  HOME
} from "../api"
import fetch from "../fetch";
export default {
  getPersonalInfo(userName) {
    //可以使用  return fetch(HOME.userInfo + userName,{useJsonp:true});使用jsonp实现跨域请求
    return fetch(HOME.userInfo + userName);
  }
}
