import React from 'react'
import classes from './Profaile.module.css'
import ProfileInfo from './ProfileInfo/ProgailInfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

const Profile = (profile, updateStatus, status) => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={profile}
        updateStatus={updateStatus}
        status={status}
      />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
