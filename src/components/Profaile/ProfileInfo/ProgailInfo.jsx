import React from 'react'
import classes from './ProfaileIfo.module.css'
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://avatars.mds.yandex.net/i?id=09ae2533a1cb773ef1660635729e2772f6bfeda0-9657345-images-thumbs&n=13"
        />
      </div>
      <div className={classes.discriptionBlocke}>ava+discription</div>
    </div>
  )
}
export default ProfileInfo
