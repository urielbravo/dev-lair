import Image from 'next/future/image'
import Card from './cards'

// project images
import blogImage from '../public/images/portfolio/blog.png'
import medicalImage from  '../public/images/portfolio/medical.png'
import amigaImage from  '../public/images/portfolio/amiga_screen.webp'
import buenaSaludImage from  '../public/images/portfolio/bs_revista.webp'
import ubigasImage from  '../public/images/portfolio/ubigas.jpg'

// logos
import reactLogo from '../public/images/skills/react-brands.svg'
import javascriptLogo from '../public/images/skills/js-square-brands.svg'
import htmlLogo from '../public/images/skills/html5-brands.svg'
import cssLogo from '../public/images/skills/css3-brands.svg'
import tailwindLogo from '../public/images/skills/tailwind_logo.svg'
import githubLogo from '../public/images/icons/github.svg'

// icons for the skills
import pythonLogo from '../public/images/skills/python-brands.svg'
import seleniumLogo from '../public/images/skills/selenium.svg'
import bootstrapLogo from '../public/images/skills/bootstrap-brands.svg'
import testcafeLogo from '../public/images/skills/testcafe.svg'
import djangoLogo from '../public/images/skills/django.svg'
import jiraLogo from '../public/images/skills/jira-brands.svg'
import gitLogo from '../public/images/skills/git-alt-brands.svg'
import nodeLogo from '../public/images/skills/node-brands.svg'
import nextjsLogo from '../public/images/icons/nextjs.svg'


export default function Project () {
  return (
    <div className='flex flex-col space-y-5'>
      <Card 
        projectImage={blogImage}
        projectTitle="Personal Blog"
        projectDescription="This is a portfolio/blog I made using NextJs and TailwindCSS"
        techUsed={[reactLogo, javascriptLogo, nextjsLogo, tailwindLogo]}
        repoLink='https://github.com/urielbravo/uriels-lair'
        alignEnd={true}
      />
      <Card 
        projectImage={medicalImage}
        projectTitle="Medical Records"
        projectDescription="This is a admin page, where the doctor can save the records of his patients"
        techUsed={[pythonLogo, bootstrapLogo, djangoLogo, htmlLogo, cssLogo]}
        repoLink='https://github.com/urielbravo/medical_records'
      />
      <Card 
        projectImage={amigaImage}
        projectTitle="Revista Amiga"
        projectDescription="This is a react native app made for a magazine, both in IOS and Android"
        techUsed={[reactLogo, javascriptLogo, bootstrapLogo]}
        repoLink='https://github.com/urielbravo/uriels-lair'
        alignEnd={true}
      />
      <Card 
        projectImage={buenaSaludImage}
        projectTitle="Buena Salud Revista"
        projectDescription="This is a react native app made for a magazine, both in IOS and Android"
        techUsed={[reactLogo, javascriptLogo, bootstrapLogo]}
        repoLink='https://github.com/urielbravo/uriels-lair'
      />
      <Card 
        projectImage={ubigasImage}
        projectTitle="Ubigas"
        projectDescription="This is a react native app made for a magazine, both in IOS and Android"
        techUsed={[reactLogo, javascriptLogo, bootstrapLogo]}
        repoLink='https://github.com/urielbravo/uriels-lair'
        alignEnd={true}
      />
    </div>
  )
}