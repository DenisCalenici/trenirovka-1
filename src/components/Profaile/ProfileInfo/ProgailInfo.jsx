import React from 'react'
import classes from './ProfaileIfo.module.css'

import Preloader from '../../Common/preloader'
const ProfileInfo = (props) => {
  console.log('props', props)

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
        <img src={props.profile.photos.large} />
        Hi, I'm a cheerful newbie programmer
      </div>
    </div>
  )
}
export default ProfileInfo
