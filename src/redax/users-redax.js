const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3,
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }
    default:
      return state
  }
}
export const followAC = () => ({ type: FOLLOW.userId })
export const unFollowAC = (text) => ({
  type: UNFOLLOW.userId,
  newtext: text,
})
export const setUsersAC = (userId) => ({ type: SET_USERS, users: userId })
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
export const setUserTotalCountAC = (totalUserCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUserCount,
})
export default usersReducer
