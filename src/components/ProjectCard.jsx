import React from 'react'

const ProjectCard = ({link,name}) => {
  return (
    <div className='w-[500px] h-[900px] bg-gray-900 rounded-2xl mb-10'>
        <h1 className='text-center text-white py-2'>{name}</h1>
        <iframe src={link} frameborder="0" className='w-full h-[100%] rounded-2xl border-10 border-gray-800'></iframe>
    </div>
  )
}

export default ProjectCard