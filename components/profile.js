import Image from 'next/future/image'

// profile Image
import profilePic from '../public/images/profile.jpg'

export default function Profile () {
  return (
    <>
      <div className="about-me flex flex-col space-y-4 items-center">
        <Image className="rounded-full w-64 h-64" src={profilePic} alt="profile_picture" />
        <h1 className="text-2xl">Uriel Bravo</h1>
        <p className="text-lg text-center">I&apos;m an electrical engineer, but I work as a web developer. my current position is as a QA Automation engineer</p>
      </div>
    </>
  )
}