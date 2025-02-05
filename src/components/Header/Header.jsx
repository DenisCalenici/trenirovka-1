import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  console.log('проверка прос ллогин ', props)
  return (
    <header className={classes.header}>
      <img
        className={classes.img}
        src="https://avatars.mds.yandex.net/i?id=919b4c080a8f34190b5fb96795eb704749c56085-5856111-images-thumbs&n=13"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}-<button onclick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}
export default Header
