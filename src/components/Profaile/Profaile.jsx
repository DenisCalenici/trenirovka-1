import React from 'react'
import classes from './Profaile.module.css'
import ProfileInfo from './ProfileInfo/ProgailInfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

const Profile = ({
  profile,
  updateStatus,
  savePhoto,
  isOwner,
  status,
  saveProfile,
  ...rest
}) => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        saveProfile={saveProfile}
        isOwner={isOwner}
        profile={profile}
        updateStatus={updateStatus}
        status={status}
        savePhoto={savePhoto}
      />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
