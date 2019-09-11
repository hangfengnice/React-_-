
const USER_KEY = "user_key";

export default {
  /* 
  保存user
  */
  saveUser(user) {
    localStorage.set(USER_KEY, user);
  },

  /* 
  返回一个user对象, 如果没有返回一个{}
  */
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return localStorage.get(USER_KEY) || {};
  },

  /* 
  删除保存的user
  */
  removeUser() {
    // localStorage.removeItem(USER_KEY)
    localStorage.remove(USER_KEY);
  }
};
