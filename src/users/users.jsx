import React from 'react'
import styles from './users.module.css'
import userPhoto from '../avatarka/img1/1697907720_new_preview_1-m00-0b-c3-rb8bwl3md6wabxnzaacweicyw9g934.jpg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? styles.selectedPage : undefined
              }
              onClick={(e) => {
                props.onPageChanges(p)
              }}
            >
              {p}
            </span>
          )
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                {' '}
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
                    props.follow(u.id)
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
      ))}
    </div>
  )
}
export default Users
