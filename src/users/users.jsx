import React from 'react'
import Paginator from '../components/Common/Paginator/Paginator'
import User from './user'
let Users = (
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  ...props
) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
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
