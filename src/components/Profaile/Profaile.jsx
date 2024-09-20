import React from 'react'
import classes from './Profaile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProgailInfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

const Profile = (props) => {
  
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
export default Profile
