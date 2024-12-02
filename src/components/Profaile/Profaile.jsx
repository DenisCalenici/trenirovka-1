import React from 'react'
import classes from './Profaile.module.css'
import ProfileInfo from './ProfileInfo/ProgailInfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
