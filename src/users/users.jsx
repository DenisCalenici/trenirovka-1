import React from 'react'
import Paginator from '../components/Common/Paginator/Paginator'
import User from './user'
let Users = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unFollow={props.unFollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  )
}
export default Users
