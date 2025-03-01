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
  ...rest
}) => {
  console.log(
    'проверка в profile',
    profile,
    updateStatus,
    status,
    savePhoto,
    rest
  )
  return (
    <div className={classes.content}>
      <ProfileInfo
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
