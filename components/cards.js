import Image from 'next/future/image'

// import blogImage from '../public/images/portfolio/blog.png'

export default function Card ({projectTitle, projectDescription, projectImage}) {
  return (
    <div className='text-light2 bg-dark0_soft rounded-lg shadow-lg'>
      {projectImage && <Image className='rounded-t-lg' src={projectImage} alt="Blog" priority={false} />}
      <div className='p-6'>
        <h2 className='font-bold mb-2 text-2xl'>{projectTitle}</h2>
        <p>{projectDescription}</p>
      </div>
    </div>
  )
}