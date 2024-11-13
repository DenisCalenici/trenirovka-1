import React from 'react'
import Users from './users'
import { connect } from 'react-redux'
import {
  setUsersAC,
  followAC,
  unFollowAC,
  setCurrentPageAC,
  setUserTotalCountAC,
} from '../redax/users-redax'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}
let mapDispatchTpProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followAC(usersId))
    },
    unfollow: (usersId) => {
      dispatch(unFollowAC(usersId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setUserTotalCount: (totalCount) => {
      dispatch(setUserTotalCountAC(totalCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchTpProps)(Users)
