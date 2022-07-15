import Image from 'next/future/image'

import githubLogo from '../public/images/icons/github.svg'

export default function Card ({ projectTitle, projectDescription, projectImage, techUsed, repoLink, alignEnd = false }) {
  return (
    <div className={'flex text-light2 rounded-lg ' + (alignEnd ? 'self-end' : '')}>
      {projectImage && <Image className='rounded-l-lg h-72 w-fit self-end' src={projectImage} alt="Blog" priority={false} />}
      <div className='p-6 relative bg-dark0_soft rounded-r-lg'>
        <h2 className='font-bold mb-2 text-2xl'>{projectTitle}</h2>
        <p className='mb-6'>{projectDescription}</p>
        <p className='mb-3'>Tech used:</p>
        <div className='flex'>
          {techUsed && techUsed.map((tech, i) => <Image className='h-6 w-6 mr-2' src={tech} alt={`${i}`} key={`${i}`} />)}
        </div>
        <footer className='flex justify-around absolute bottom-6 items-center space-x-3'>
          <span>Repo:</span>
          {repoLink ?
            <a href={repoLink}>
              <Image className="w-10 h-10" src={githubLogo} alt="github" />
            </a>
            :
            <span>Not available/Private repo</span>
          }
        </footer>
      </div>
    </div>
  )
}
