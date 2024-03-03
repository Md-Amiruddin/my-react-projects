import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMoneyBill1, faLemon } from '@fortawesome/free-regular-svg-icons'
import { faDisplay, faPeopleGroup, faShieldHalved, faHandshakeAngle,} from '@fortawesome/free-solid-svg-icons'
import { HelpCard, MostRecentUpdatesCard } from '../index'

export function Content() {
  return (
    <>
      <div className='relative bg-mainImageMobile md:bg-mainImageDesktop bg-center bg-cover'>
        <div className=' w-full h-[635px] flex flex-col justify-center md:justify-start md:pt-28 items-center bg-black/25'>
          <div className='uppercase text-center flex text-background flex-col justify-center items-center'>
            <div className='text-7xl md:text-8xl font-extrabold mb-8'>Donate</div>
            <div className='border-b-[4px] border-accent w-56 md:w-64 mb-4'></div>
            <div className='text-xl md:text-2xl font-bold'>For a good cause</div>
          </div>
          <div className='mt-28 md:mt-12'>
            <button className='bg-accent text-primary py-[12px] text-base px-5 font-bold rounded-sm align-middle uppercase'>
              Donate Now
            </button>
          </div>

          {/* Desktop Highlights */}
          <div className='bg-accent hidden md:inline-flex absolute bottom-0 left-24 right-24 space-x-8 py-6 pl-8'>
            <div className='flex space-x-4'>
              <FontAwesomeIcon className='bg-background rounded-full p-5' icon={faMoneyBill1} size='xl' />
              <div className='inline-flex flex-col items-start'>
                <div className='uppercase font-bold text-xl inline-block mb-1'>donate now</div>
                <div className='border-b-4 border-amber-400 inline-block mb-2 w-24'></div>
                <div className='text-md inline-block line'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
              </div>
            </div>
            <div className='flex space-x-4'>
              <FontAwesomeIcon className='bg-background rounded-full p-5' icon={faLemon} size='xl' />
              <div className='inline-flex flex-col items-start'>
                <div className='uppercase font-bold text-xl inline-block mb-1'>Give Scholarship</div>
                <div className='border-b-4 border-amber-400 inline-block mb-2 w-28'></div>
                <div className='text-md inline-block line'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
              </div>
            </div>
            <div className='flex space-x-4'>
              <FontAwesomeIcon className='bg-background rounded-full p-5' icon={faHeart} size='xl' />
              <div className='inline-flex flex-col items-start'>
                <div className='uppercase font-bold text-xl inline-block mb-1'>Save Children</div>
                <div className='border-b-4 border-amber-400 inline-block mb-2 w-28'></div>
                <div className='text-md inline-block line'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Highlights */}
      <div className='bg-accent pt-12 pb-12 space-y-8 md:hidden'>
        <div className=' text-center px-8 space-y-4'>
          <div className='bg-background inline-block p-6 rounded-full shadow-sm'><FontAwesomeIcon icon={faMoneyBill1} size='2xl' /></div>
          <div className='text-center'>
            <div className='uppercase font-bold text-xl'>donate now</div>
            <div className='border-b-4 border-amber-400 mx-28 mb-4'></div>
            <div className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
          </div>
        </div>
        <div className='text-center px-8 space-y-4'>
          <div className='bg-background inline-block p-6 rounded-full shadow-sm'><FontAwesomeIcon icon={faLemon} size='2xl' /></div>
          <div className='text-center'>
            <div className='uppercase font-bold text-xl'>Give Scholarship</div>
            <div className='border-b-4 border-amber-400 mx-24 mb-4'></div>
            <div className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
          </div>
        </div>
        <div className='text-center px-8 space-y-4'>
          <div className='bg-background inline-block p-6 rounded-full shadow-sm'><FontAwesomeIcon icon={faHeart} size='2xl' /></div>
          <div className='text-center'>
            <div className='uppercase font-bold text-xl'>Save Children</div>
            <div className='border-b-4 border-amber-400 mx-28 mb-4'></div>
            <div className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
          </div>
        </div>
      </div>

      {/* Latest Donations */}
      <div className='bg-background py-10 md:py-20 px-9 md:px-24'>
        <div className='uppercase text-3xl md:text-4xl tracking-wider mb-10 pl-4 mr-12 border-accent/70 border-l-4'>
          Latest Donations
        </div>
        <div className='md:flex md:justify-evenly'>
          <div className=' inline-flex md:flex-col md:items-center md:space-y-3 md:space-x-0 align-middle pb-6 md:pb-0'>
            <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='md:h-20 h-14 md:w-20 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?fm=png&w=640&h=960' /></div>
            <div className='ml-4 space-y-1 md:space-y-2 md:text-xl'>
              <div className='font-semibold pl-1 md:text-center'>Jack Daniels</div>
              <div className='flex font-extrabold text-xs md:text-[12px]'>
                <div className='bg-accent py-2 md:py-3 px-4 md:px-6 rounded-l-md'>Donated</div>
                <div className='bg-text text-white/80 py-2 md:py-3 px-4 md:px-6 rounded-r-md text-center'>Rs. 1000</div>
              </div>
            </div>
          </div>
          <div className=' inline-flex md:flex-col md:items-center md:space-y-3 md:space-x-0 align-middle pb-6 md:pb-0'>
            <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='md:h-20 h-14 md:w-20 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?fm=png&w=640&h=960' /></div>
            <div className='ml-4 space-y-1 md:space-y-2 md:text-xl'>
              <div className='font-semibold pl-1 md:text-center'>Jack Daniels</div>
              <div className='flex font-extrabold text-xs md:text-[12px]'>
                <div className='bg-accent py-2 md:py-3 px-4 md:px-6 rounded-l-md'>Donated</div>
                <div className='bg-text text-white/80 py-2 md:py-3 px-4 md:px-6 rounded-r-md text-center'>Rs. 1000</div>
              </div>
            </div>
          </div>
          <div className=' inline-flex md:flex-col md:items-center md:space-y-3 md:space-x-0 align-middle pb-6 md:pb-0'>
            <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='md:h-20 h-14 md:w-20 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?fm=png&w=640&h=960' /></div>
            <div className='ml-4 space-y-1 md:space-y-2 md:text-xl'>
              <div className='font-semibold pl-1 md:text-center'>Jack Daniels</div>
              <div className='flex font-extrabold text-xs md:text-[12px]'>
                <div className='bg-accent py-2 md:py-3 px-4 md:px-6 rounded-l-md'>Donated</div>
                <div className='bg-text text-white/80 py-2 md:py-3 px-4 md:px-6 rounded-r-md text-center'>Rs. 1000</div>
              </div>
            </div>
          </div>
          <div className=' inline-flex md:flex-col md:items-center md:space-y-3 md:space-x-0 align-middle pb-6 md:pb-0'>
            <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='md:h-20 h-14 md:w-20 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?fm=png&w=640&h=960' /></div>
            <div className='ml-4 space-y-1 md:space-y-2 md:text-xl'>
              <div className='font-semibold pl-1 md:text-center'>Jack Daniels</div>
              <div className='flex font-extrabold text-xs md:text-[12px]'>
                <div className='bg-accent py-2 md:py-3 px-4 md:px-6 rounded-l-md'>Donated</div>
                <div className='bg-text text-white/80 py-2 md:py-3 px-4 md:px-6 rounded-r-md text-center'>Rs. 1000</div>
              </div>
            </div>
          </div>
          <div className=' inline-flex md:flex-col md:items-center md:space-y-3 md:space-x-0 align-middle pb-6 md:pb-0'>
            <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='md:h-20 h-14 md:w-20 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?fm=png&w=640&h=960' /></div>
            <div className='ml-4 space-y-1 md:space-y-2 md:text-xl'>
              <div className='font-semibold pl-1 md:text-center'>Jack Daniels</div>
              <div className='flex font-extrabold text-xs md:text-[12px]'>
                <div className='bg-accent py-2 md:py-3 px-4 md:px-6 rounded-l-md'>Donated</div>
                <div className='bg-text text-white/80 py-2 md:py-3 px-4 md:px-6 rounded-r-md text-center'>Rs. 1000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How can you help? */}
      <section className='bg-accent py-10 md:pt-14 px-9 md:px-28 space-y-8 md:space-y-16'>
        <div className='text-3xl md:text-4xl md:tracking-wider font-bold uppercase text-center'>How can you help?</div>
        <div className='space-y-12 md:space-y-0 md:flex'>
          <div className='md:flex-1'>
            <div className='space-y-3'>
              <div className='uppercase text-xl font-semibold text-center md:text-left'>Help for a Cause</div>
              <div className='text-justify font-light leading-relaxed md:leading-normal text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa ab unde dolores. Odio iusto voluptatum maiores dolore, cumque alias consequatur tempora perferendis modi iure magni, corporis molestiae, autem ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi amet aut laudantium eius, nam nulla quisquam veritatis expedita? Qui.</div>
            </div>

            <div className='mt-8 text-center grid grid-cols-2 gap-12 md:gap-5 md:flex md:flex-wrap'>
              <HelpCard setIcon={faDisplay} setTitle={'Media'} />
              <HelpCard setIcon={faPeopleGroup} setTitle={'Mobilization'} />
              <HelpCard setIcon={faShieldHalved} setTitle={'Protection'} />
              <HelpCard setIcon={faHandshakeAngle} setTitle={'Support'} />
            </div>
          </div>

          <div className='md:flex-1 md:pl-16'>
            <img className='object-cover rounded-lg align-top' src="https://images.pexels.com/photos/6994994/pexels-photo-6994994.jpeg?fm=png&w=1280&h=853" alt="" />
          </div>
        </div>
      </section>

      {/* Most recent updates */}
      <section className='bg-background py-10 md:pt-14 px-9 md:px-28 space-y-8 md:space-y-16'>
        <div className='text-2xl md:text-4xl md:tracking-wider font-bold uppercase text-center'>Most recent updates</div>
        <MostRecentUpdatesCard/>
        <MostRecentUpdatesCard/>
        <MostRecentUpdatesCard/>
        <MostRecentUpdatesCard/>
      </section>
    </>
  )
}