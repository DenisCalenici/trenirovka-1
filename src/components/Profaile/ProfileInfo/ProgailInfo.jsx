import React, { useState } from 'react'
import classes from './ProfaileIfo.module.css'
import Preloader from '..//..//..//users/preloader.jsx'
import ProfileDataForm from './/ProfileDataForm.jsx'
import ProfileStatusUseHooks from './ProfileStatusHooks.jsx'
import userPhoto from '..//..//..//avatarka/img1/1697907720_new_preview_1-m00-0b-c3-rb8bwl3md6wabxnzaacweicyw9g934.jpg'
const ProfileInfo = ({
	status,
	updateStatus,
	profile,
	savePhoto,
	isOwner,
	saveProfile,
}) => {
	let [editMode, setEditMode] = useState(false)
	if (!profile) {
		return <Preloader />
	}
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}
	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			setEditMode(false)
		})
	}
	return (
		<div>
			<div className={classes.img}>
				<img
					src={profile.photos.large || userPhoto}
					className={classes.mainPhoto}
				/>
				{isOwner && (
					<input type={'file'} onChange={onMainPhotoSelected} />
				)}
				{editMode ? (
					<ProfileDataForm
						initialValues={profile}
						onSubmit={onSubmit}
						profile={profile}
					/>
				) : (
					<ProfileData
						goToEditMode={() => {
							setEditMode(true)
						}}
						profile={profile}
						isOwner={isOwner}
					/>
				)}
				<ProfileStatusUseHooks
					status={status}
					updateStatus={updateStatus}
				/>
			</div>
		</div>
	)
}
const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div>
			<b>{contactTitle}</b>:<b>{contactValue}</b>
		</div>
	)
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			{isOwner && (
				<div>
					<button onClick={goToEditMode}>edit</button>
				</div>
			)}
			<div>
				<b>Full name</b>:{profile.fullName}
			</div>
			<div>
				<b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			<div>
				<b>My professional skills</b>:
				{profile.lookingForAJobDescription}
			</div>
			<div>
				<b>About me </b>:{profile.aboutMe}
			</div>
			<div className={classes.contacts}>
				<b>Contacts </b>
        :
				{Object.keys(profile.contacts).map((key) => {
					return (
						<Contact
							key={key}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ProfileInfo
