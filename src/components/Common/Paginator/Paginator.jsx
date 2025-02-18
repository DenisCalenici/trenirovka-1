import styles from './Paginator.module.css'
import React, { useState } from 'react'

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanges,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize
  console.log('проВерка ', {
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChanges,
    portionSize,
  })
  return (
    <div className={styles.Paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn
                ({ [styles.selectedPage]: currentPage === p },
                styles.pageNumber)
              }
              key={p}
              onClick={(e) => {
                onPageChanges(p)
              }}
            >
              {p}
            </span>
          )
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        >
          NEXT
        </button>
      )}
    </div>
  )
}
export default Paginator
