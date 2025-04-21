import React from 'react'
import ProfileTemplate from '../utilities/ProfileTemplate'

const ProfileHome = () => {
  return (
    <div className='w-[95%] lg:w-[90%] pb-10 mx-auto '>
      <div className='grid gap-6 profil-grid'>
        <ProfileTemplate />
        <ProfileTemplate />
        <ProfileTemplate />
        <ProfileTemplate />
        <ProfileTemplate />
        <ProfileTemplate />
        <ProfileTemplate />
      </div>
    </div>
  )
}

export default ProfileHome
