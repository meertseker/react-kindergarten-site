import React from 'react'

const page = () => {
    const userName = process.env.REACT_APP_USERNAME
    const password = process.env.REACT_APP_PASSWORD
  return (
    <div className='flex justify-center pt-30 flex-col w-60 lg:justify-center'>
      <p>Username:</p>
      <input type="text" className='bg-white text-black' />
      <p>Password:</p>
      <input type="text" className='bg-white text-black' />
    </div>
  )
}

export default page
