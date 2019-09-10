import axios from './ajax'

export function reqLogin(username, password) {
  axios({
    method: 'post',
    url: "/login",
    data: {
      username,
      password
    }
  })
}

reqLogin()
