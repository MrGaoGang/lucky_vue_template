import {
  HOME
} from "../api"
import fetch from "../fetch";
export default {
  getPersonalInfo(userName) {
    return fetch(HOME.userInfo + userName);
  }
}
