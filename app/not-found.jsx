import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='text-center h-screen m-auto flex flex-col '>
     <main className='flex-1 justify-center items-center my-auto py-40'>
     <h2 className='text-bold text-foreground text-6xl items-center'>There was a problem</h2>
      <p className='justify-center mt-8'>We could not find the page you are looking for</p>
      <p>Go back to the dash board </p><Link href="/" className='text-terciary'>Go back to Main Page</Link>
     </main>
    </div>
  )
}

export default NotFound
