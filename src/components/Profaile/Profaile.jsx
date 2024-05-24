import React from 'react'
import classes from './Profaile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProgailInfo'

const Profile = (props) => {
  console.log('проверка  Profile', props)
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} dispatch={props.dispatch} />
    </div>
  )
}
export default Profile
