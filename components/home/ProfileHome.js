import React from 'react'
import ProfileTemplate from '../utilities/ProfileTemplate'

const ProfileHome = () => {
  return (
    <div className='w-[95%] lg:w-[80%] pb-10 mx-auto '>
      <div className='grid grid-cols-4 gap-4 '>
        <ProfileTemplate />
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
