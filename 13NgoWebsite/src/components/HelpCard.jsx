import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function HelpCard({setIcon,setTitle}) {
  return (
    <div className='space-y-1'>
      <div className='bg-black/15 p-12 md:p-9 flex flex-col justify-center items-center rounded-lg'>
        <FontAwesomeIcon icon={setIcon} size='2xl' />
      </div>
      <p className='text-center capitalize'>{setTitle}</p>
    </div>
  )
}