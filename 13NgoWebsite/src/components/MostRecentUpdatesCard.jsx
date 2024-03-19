import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function MostRecentUpdatesCard({ setTitle = "Care for Children", setDate = "February 12, 2024", setAuthor = "Jason", setBodyTextPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, magni.", setImageUrl = "https://images.pexels.com/photos/3036405/pexels-photo-3036405.jpeg?fm=jpg&w=640&h=427" }) {
  return (
    <div className='flex space-x-2 md:space-x-0 md:space-y-4 md:flex-col'>
      <div className='relative inline-block'>
          <img className='h-20 md:h-48 w-72 object-cover rounded-lg' src={setImageUrl} alt="" />
        <div className='bg-accent space-x-1 absolute top-0 right-0 md:px-2 md:py-1 px-[0.3rem] rounded-tr-lg rounded-bl-lg'>
          <FontAwesomeIcon icon={faHeart} size='sm'/>
          <div className='inline-block'>6</div>
        </div>
      </div>
      <div className='text-[0.8rem] md:text-base flex flex-col justify-between md:space-y-2'>
        <div className='md:space-y-2'>
          <div className='font-bold tracking-wide'>Care for Children</div>
          <div className='flex justify-between text-gray-500'>
            <div><span className='font-bold text-black hidden md:inline-block'>On&nbsp;</span>{setDate}</div>
            <div><span className='font-bold text-black hidden md:inline-block'>By&nbsp;</span>{setAuthor}</div>
          </div>
        </div>
        <hr className='hidden md:block'/>
        <div className=' overflow-ellipsis line-clamp-2 text-gray-500'>{setBodyTextPreview}</div>
      </div>
    </div>
  )
}