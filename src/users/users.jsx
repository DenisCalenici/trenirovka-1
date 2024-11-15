import React from 'react'
import styles from './users.module.css'
import axios from 'axios'
import userPhoto from '../../src/avatarka/img1/1697907720_new_preview_1-m00-0b-c3-rb8bwl3md6wabxnzaacweicyw9g934.jpg'
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}'
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setUserTotalCount(response.data.totalCount)
      })
  }

  onPageChanges = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}'
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  this.onPageChanges(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photo?.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    Unwollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    Follow
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
}

export default Users
