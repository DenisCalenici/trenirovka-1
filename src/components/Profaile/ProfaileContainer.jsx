import React from 'react'
import Profile from './Profaile'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUserProfile } from '../../redax/Profail-reducer'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = 2
    }
    axios
      .get('https://social-network.samuraijs.com/api/1./profile/')
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}
let mapStateToProps = (state) => ({
  a: 17,
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
