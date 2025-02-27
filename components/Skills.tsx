import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

interface skillType{
  path: string,
  skill: string,
}

const skillTypeArray: skillType[] = [
    {
      path: '/next.svg',
      skill: 'Next JS',
    },
    {
      path: '/React.svg',
      skill: 'React JS',
    },
    {
      path: '/ts.svg',
      skill: 'TypeScript',
    },
    {
      path: '/Js.svg',
      skill: 'JavaScript',
    },
    {
      path: '/tail.svg',
      skill: 'Tailwind',
    },
    {
      path: '/bootstrap.svg',
      skill: 'Bootstrap',
    },
    {
      path: '/css.svg',
      skill: 'CSS',
    },
    {
      path: '/html.svg',
      skill: 'HTML',
    },
  ];

const Skills = () => {
  return (
    <div className='h-[10rem] w-full relative flex flex-col items-center justify-center overflow-hidden'>
      <h1 className="heading mb-4">
        My
        <span className="text-purple"> Tech Skills</span>
      </h1>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full'>
        <InfiniteMovingCards
            items={skillTypeArray}
            direction="right"
            speed="fast"
        />
        </div>
      </div>
    </div>
  )
}

export default Skills