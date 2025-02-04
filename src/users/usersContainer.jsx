import React from 'react'
import { connect } from 'react-redux'
import Users from './users'
import {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
} from '../redax/users-redux'
import Preloader from '../components/Common/preloader'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanges = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
          unFollow={this.props.unFollow}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
        />
        )
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
  })
)(UserContainer)
