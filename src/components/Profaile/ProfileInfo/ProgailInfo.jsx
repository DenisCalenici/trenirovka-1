import React from 'react'
import classes from './ProfaileIfo.module.css'
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://avatars.yandex.net/get-music-content/10703962/0c90dd34.a.27136744-1/m1000x1000?webp=false"
        />
      </div>
      <div className={classes.discriptionBlocke}>
        Hi, I'm a cheerful newbie programmer
      </div>
    </div>
  )
}
export default ProfileInfo
