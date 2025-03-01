import React from 'react'
import { reduxForm } from 'redux-form'

import classes from './ProfaileIfo.module.css'
import {
  createField,
  Input,
  Textarea,
} from '../../Common/FormsControls/FormsControls'
const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={classes.formSummaryError}>error</div>}
      <div>
        <b>Full name</b>:{createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField('', 'lookingForAJSob', [], Input, { type: 'checkbox' })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField(
          'My professional skills',
          'lookingForAJobDescription',
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me </b>:{createField('About me', 'aboutMe', [], Textarea)}
      </div>
      <div className={classes.contacts}>
        <b>Contacts </b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contacts}>
              <b>
                {key}:
                {createField('Full name', 'contacts.' + key, [], Textarea)}
              </b>
            </div>
          )
        })}
      </div>
    </form>
  )
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
)
export default ProfileDataFormReduxForm
