const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
let initialState = {
  users: [
    {
      id: 1,
      foollowed: true,
      fullName: 'Dmitry',
      status: ' I am boss',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      foollowed: false,
      fullName: 'Sasha',
      status: ' I am boss',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 3,
      foollowed: true,
      fullName: 'Misha',
      status: ' I am boss',
      location: { city: 'SPB', country: 'Russia' },
    },
    {
      id: 4,
      foollowed: false,
      fullName: 'Anna',
      status: ' I am boss',
      location: { city: 'Rezan', country: 'Russia' },
    },
  ],
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

    default:
      return state
  }
}
export const followAC = () => ({ type: FOLLOW.userId })
export const unFollowAC = (text) => ({
  type: UNFOLLOW.userId,
  newtext: text,
})
export const setUsersAC = (userId) => ({ type: UNFOLLOW, userId })
export default usersReducer
