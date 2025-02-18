import React from 'react'
import classes from './ProfaileIfo.module.css'
import Preloader from '..//..//..//users/preloader.jsx'
import ProfileStatusUseHooks from './ProfileStatusHooks.jsx'
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://avatars.yandex.net/get-music-content/10703962/0c90dd34.a.27136744-1/m1000x1000?webp=false"
        />
      </div>
      <div className={classes.ProfaileIfo}>
        Hi, I'm a cheerful newbie programmer
      </div>

      <ProfileStatusUseHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  )
}
export default ProfileInfo
