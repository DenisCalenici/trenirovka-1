import axios from 'axios'

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { 'API-KEY': '5769ee9d-10e5-478c-be05-653f6eba5854' },
})
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)

      .then((response) => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
  },

  getProfile(userId) {
    return profileAPI.getProfile(userId)
  },
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status })
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`, {
      withCredentials: true,
    })
  },
}
