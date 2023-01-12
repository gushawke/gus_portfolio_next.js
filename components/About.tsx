import React from 'react'
import Image from 'next/image'
import Gus from '../images/Gus.png'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'



type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            about</h3>
        
        <motion.div
        initial={{ 
            x:-200, 
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ 
            opacity: 1,
            x: 0 
        }}
        viewport={{ once: true }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <Image 
                src={urlFor(pageInfo?.profilePic).url()} 
                alt='gusimg' 
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] " 
                width={500}
                height={500}
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
        
                <p className='text-sm'>I completed my training at a software development Bootcamp in March 2022, giving me  800+ hours of experience within a team environment, alongside senior, intermediate and junior developers. I have built on this experience since, while also immigrating to Canada as a Permanent Resident. I am now settled in <span className='font-medium underline text-[#F7AB0A]/50'>Banff, AB</span> and seeking a job opportunity or work experience for a company doing great things. I genuinely enjoy coding and I have a proven ability of working independently, remotely, and effectively with in-person team environments. 
                </p>
            </div>

        </motion.div>


    
    </motion.div>
  
  
    )

}

export default About