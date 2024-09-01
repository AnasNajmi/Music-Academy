'use client'
import React from 'react'

import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: 'Elena Brigs',
    designation: 'Vocal Coach',
    image: 'https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=1024x1024&w=is&k=20&c=ZE9b5o8G4ehyChKTqdwoKktoCmNfRTgkO08AeMbXkaY=',
  },
  {
    id: 2,
    name: 'John Doe',
    designation: 'Guitar Instructor',
    image: 'https://media.istockphoto.com/id/1182967311/photo/confident-smiling-young-african-businessman-looking-at-camera-in-office.jpg?s=1024x1024&w=is&k=20&c=wb0-gB7uR4sZzyz98tE9UcAVXW5Nhq7pFJiMb9ti8xs=',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    designation: 'Piano Teacher',
    image: 'https://media.istockphoto.com/id/1134312189/photo/closeup-aged-attractive-smiling-businesswoman-listening-colleague-during-briefing-meeting.jpg?s=1024x1024&w=is&k=20&c=BjddIeAy5WMoKp5mNfQnoap0Jw-PQuEkJY9YeO7CPN8=',
  },
  {
    id: 4,
    name: 'Liam Smith',
    designation: 'Music Theory Specialist',
    image: 'https://media.istockphoto.com/id/1351059734/photo/shot-of-a-young-businessman-in-his-office.jpg?s=1024x1024&w=is&k=20&c=0d1WDWp8ghf2HJbbNJ4BUPnqUb8Ra6yB__odYHyjYwc=',
  }
];




function Teachers() {
    return (
      <div className='relative h-[30rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className='w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full '>

          <h2 className='text-2xl md:text-4xl lg:text-7xl
          text-white font-bold text-center mb-8'>Meet Our Instructors</h2>

          <p className='text-base md:text-lg text-white text-center mb-4 '>Discover the talented professionals who will guide your musical journey </p>

          <div className='flex flex-row items-center justify-center mb-10 w-full'>
            <AnimatedTooltip items={instructors} />
        </div>

        
        </WavyBackground>

        



      </div>
      
        
      );
    }
export default Teachers



