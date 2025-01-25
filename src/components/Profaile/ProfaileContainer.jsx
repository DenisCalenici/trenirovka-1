import React from 'react'
import Profile from './Profaile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from '../../redax/Profile-reducer'

import { compose } from 'redux'
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId

    if (!userId) {
      userId = 31933
    }
    this.props.getUserProfile(userId)

    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer)
