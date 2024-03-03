import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function MostRecentUpdatesCard({ setTitle = "Care for Children", setDate = "February 12, 2024", setAuthor = "Jason", setBodyTextPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, magni.", setImageUrl = "https://images.pexels.com/photos/6994994/pexels-photo-6994994.jpeg?fm=png&w=1280&h=853" }) {
  return (
    <div className='flex space-x-4 bg-red-500'>
      <div className='relative inline-block w-[350px] bg-blue-400'>
        <img className='object-cover rounded-lg align-top' src={setImageUrl} alt="" />
        <div className='bg-accent space-x-1 absolute top-0 right-0 py-1 px-2 rounded-tr-lg rounded-bl-lg'>
          <FontAwesomeIcon icon={faHeart} />
          <div className='inline-block'>6</div>
        </div>
      </div>
      <div className='text-sm flex-col justify-between'>
        <div className='bg-orange-400'>
          <div className='font-bold tracking-wide'>Care for Children</div>
          <div className='flex justify-between text-gray-500'>
            <div><span className='font-bold text-black hidden'>On&nbsp;</span>{setDate}</div>
            <div><span className='font-bold text-black hidden'>By&nbsp;</span>{setAuthor}</div>
          </div>
        </div>
        <div className='bg-accent overflow-ellipsis line-clamp-1 text-gray-500'>{setBodyTextPreview}</div>
      </div>
    </div>
  )
}