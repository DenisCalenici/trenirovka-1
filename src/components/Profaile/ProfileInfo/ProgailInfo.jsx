import React from 'react'
import classes from './ProfaileIfo.module.css'
import Preloader from '..//..//..//users/preloader.jsx'
import ProfileStatusUseHooks from './ProfileStatusHooks.jsx'
import userPhoto from '..//..//..//avatarka/img1/1697907720_new_preview_1-m00-0b-c3-rb8bwl3md6wabxnzaacweicyw9g934.jpg'
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  console.log('ProfileInfo', props)
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div className={classes.img}>
        <img
          src={
            'https://avatars.yandex.net/get-music-content/10703962/0c90dd34.a.27136744-1/m1000x1000?webp=false' ||
            userPhoto
          }
          className={classes.mainPhoto}
        />
        {props.isOwner && (
          <input type={'file'} onChange={onMainPhotoSelected} />
        )}
        <ProfileStatusUseHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}
export default ProfileInfo
