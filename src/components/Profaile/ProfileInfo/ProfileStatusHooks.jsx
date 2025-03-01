import React, { useState, useEffect } from 'react'
//import classes from './ ProfileStatus .module.css'
const ProfileStatusUseHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  console.log('proverka', props)

  return (
    <div>
      {!editMode && (
        <div>
          {' '}
          <b>Status:</b>
          <span onDoubleClick={activateEditMode}>
            {props.status || '----------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  )
}
export default ProfileStatusUseHooks
