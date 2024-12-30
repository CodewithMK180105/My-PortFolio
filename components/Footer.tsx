import { socialMedia } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-16' id="contact">
        

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] '>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center' >Reach out to me today and let&apos;s how I can help you achieve your goals.</p>
            <Link href="mailto:manishkumar180105@gmail.com">

            </Link>
        </div>

        <div className='flex flex-col items-center justify-between md:flex-row mt-16 gap-6'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © Manishkumar
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {
                    socialMedia.map((profile)=>(
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-ld border border-black-300'>
                            <Image 
                                src={profile.img}
                                alt={profile.name}
                                width={30}
                                height={30}

                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer