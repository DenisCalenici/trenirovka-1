import axios from 'axios'

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: 'b0a3846a-9a18-4fd8-84f7-8a377a78ce26',
})
export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)

      .then((response) => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0//follow/${userId}`
    )
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0//follow/${userId}`
    )
  },
}
