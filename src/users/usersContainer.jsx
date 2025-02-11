import React from 'react'
import { connect } from 'react-redux'
import Users from './users'
import {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  requestUsers,
} from '../redux/users-redux'
import Preloader from '..//users/preloader'
import { compose } from 'redux'
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '..//redux/users.selectors'
class UserContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanges = (pageNumber) => {
    const pageSize = this.props
    this.props.getUsers(pageNumber, pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers: requestUsers,
  })
)(UserContainer)
