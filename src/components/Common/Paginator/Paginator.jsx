import React from 'react'
import styles from './Paginator.module.css'

let Paginator = (totalUsersCount, pageSize, onPageChanges, currentPage) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && styles.selectedPage}
            onClick={(e) => {
              onPageChanges(p)
            }}
          >
            {p}
          </span>
        )
      })}
    </div>
  )
}
export default Paginator
