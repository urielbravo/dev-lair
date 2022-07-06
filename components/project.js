import Image from 'next/future/image'
import Card from './cards'

// project images
import blogImage from '../public/images/portfolio/blog.png'

// logos
import reactLogo from '../public/images/skills/react-brands.svg'
import javascriptLogo from '../public/images/skills/js-square-brands.svg'
import htmlLogo from '../public/images/skills/html5-brands.svg'
import cssLogo from '../public/images/skills/css3-brands.svg'
import tailwindLogo from '../public/images/skills/tailwind_logo.svg'
import githubLogo from '../public/images/icons/github.svg'

export default function Project () {
  return (
    <div className='grid grid-cols-3 place-items-center gap-5'>
      <Card 
        projectTitle="Personal Blog"
        projectDescription="This is a portfolio I made using NextJs and TailwindCSS"
        projectImage={blogImage}
      />
      <Card />
      <Card />
      {/* <div className="overflow-hidden">
        <div className="py-24 mx-auto">
          <Image 
          src={blogImage} 
          alt="This Blog" 
          class="lg:w-1/3 w-full lg:h-auto h-48 rounded-lg" />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className="text-sm title-font text-gruvFg tracking-widest">Personal project</h2>
            <h1 className="text-gruvFg text-3xl title-font font-medium mb-1">A dev&apos;s lair</h1>
            <p className="leading-relaxed mb-1">This is a portfolio I made using NextJs and TailwindCSS</p>
            <p className="leading-relaxed">
              The home and about page, are static pages, and i can create posts in the blog section with a markdown editor
              and any individual post you select, each post also has a category, with it&apos;s icon and the usual stuff. You can
              also
              filter the posts by category and search for the posts
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-light0_soft mb-5">
              <div className="flex space-x-2">
                <span className="mr-3">Tech used:</span>
                <Image className="h-6 w-6" src={reactLogo} alt="Django logo" />
                <Image className="h-6 w-6" src={htmlLogo} alt="HTML logo" />
                <Image className="h-6 w-6" src={tailwindLogo} alt="Tailwind logo" />
                <Image className="h-6 w-6" src={javascriptLogo} alt="Javascript logo" />
                <Image className="h-6 w-6" src={cssLogo} alt="CSS logo" />
              </div>
            </div>
            <div className="flex justify-around">
              <span className="title-font font-medium text-2xl text-gruvFg">Repo:</span>
              <a href="https://github.com/urielbravo/uriels-lair">
                <Image className="w-10 h-10" src={githubLogo} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}