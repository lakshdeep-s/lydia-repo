'use client'
import { TeamMemberDetails } from '@/constants'
import React from 'react'
import TeamMember from './TeamMember'
import { motion, useInView } from "framer-motion"
import { useRef } from 'react'

const AboutUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: 0.4,
    once: true
  });

  return (
    <motion.div
      className='flex flex-col gap-[5rem] max-w-[850px] px-[1rem] mx-auto text-center mt-[2rem]'
      ref={containerRef}

      initial={{
        opacity: 0,
        translateY: "20px"
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        translateY: isInView ? 0 : "20px"
      }}
    >

      <div className="flex flex-col gap-2 max-md:w-full">
        <h1 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-tighter font-semibold text-white text-shadow-100">Meet Our Team</h1>
        <p className="md:text-[1rem] text-[0.875rem] leading-5 sm:max-md:w-[600px] md:max-w-[650px] text-shadow-100 text-white mx-auto">
          Easily manage your cycle with our intuitive interface. Track symptoms, set reminders, and gain insights into your menstrual health.
        </p>
      </div>

      <div className='grid xsm:grid-cols-2 md:gap-x-8 md:gap-y-12 gap-x-6 xsm:gap-y-8 gap-y-12'>
        {
          TeamMemberDetails.map((teamMember, index) => (
            <TeamMember
              key={index}
              name={teamMember.name}
              designation={teamMember.designation}
              image={teamMember.image}
              vision={teamMember.vision}
              github={teamMember.github}
              linkedin={teamMember.linkedin}
              twitter={teamMember.twitter}
              instagram={teamMember.instagram}
            />
          ))
        }
      </div>
    </motion.div>
  )
}

export default AboutUs