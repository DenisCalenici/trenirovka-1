import React from 'react'

import { connect } from 'react-redux'
import Users from './users'
import {
  setUsers,
  follow,
  unFollow,
  setCurrentPage,
  setUserTotalCount,
  toggleIsFetching,
} from '../redax/users-redax'
import axios from 'axios'
import Preloader from '../components/Common/preloader'
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}'
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setUserTotalCount(response.data.totalCount)
      })
  }

  onPageChanges = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}'
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanges={this.onPageChanges}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
        )
      </>
    )
  }
}
export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUserTotalCount,
  toggleIsFetching,
})(UserContainer)
