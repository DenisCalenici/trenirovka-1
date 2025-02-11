import React from 'react'
import styles from './users.module.css'
import userPhoto from '../avatarka/img1/1697907720_new_preview_1-m00-0b-c3-rb8bwl3md6wabxnzaacweicyw9g934.jpg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

let User = ({ user, followingInProgress, unFollow, follow, ...props }) => {
  let u = User
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + u.id}>
            <img
              src={u.photo?.small != null ? u.photos.small : userPhoto}
              className={styles.userPhoto}
            />
          </NavLink>
        </div>

        <div>
          {u.followed ? (
            <button
              disabled={props.followingInProgress}
              onClick={() => {
                props.unFollow(u.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress}
              onClick={() => {
                follow(u.id)
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </span>
      </span>
    </div>
  )
}
export default User
