import React from 'react'
import Profile from './Profaile'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUserProfile } from '../../redax/Profail-reducer'
import { withRouter } from 'react-router-dom'
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId

    if (!userId) {
      userId = 31933
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  console.log('консоль стейт', state)
  return { a: 17, userId: 31933, profile: state.profilePage.profile }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
