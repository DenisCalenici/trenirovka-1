import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.img}
        src="https://avatars.mds.yandex.net/i?id=919b4c080a8f34190b5fb96795eb704749c56085-5856111-images-thumbs&n=13"
      />
    </header>
  )
}
export default Header
