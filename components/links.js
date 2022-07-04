import Image from 'next/future/image'

// icons for links
import githubIcon from '../public/images/icons/github.svg'
import linkedInIcon from '../public/images/icons/linkedin.svg'
import resumeIcon from '../public/images/icons/resume.svg'

export default function Links () {
  return (
    <>
      <div className="flex justify-center space-x-5 mt-4">
        <a href="https://github.com/urielbravo">
          <Image className="h-12 w-12" src={githubIcon} alt="github profile" />
        </a>
        <a href="https://www.linkedin.com/in/urielbravo/">
          <Image className="h-12 w-12" src={linkedInIcon} alt="linkedin profile" />
        </a>
        <a href="/images/resume.pdf" alt="resume in pdf" target={"_blank"} rel="noopener noreferrer">
          <Image className="h-12 w-12" src={resumeIcon} alt="resume" />
        </a>
      </div>
    </>
  )
}