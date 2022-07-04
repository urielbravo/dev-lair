// components
import Layout from "../components/layout"
import Skills from "../components/skills"
import Links from "../components/links"
import Profile from "../components/profile"

export default function HomePage () {
  return (
    <Layout>
      {/* profile picture, name and a bit of text about me */}
      <Profile />

      {/* links */}
      <Links />

      {/* Skills intro */}
      <div className="work-title mt-20 mb-5">
        <h1 className="text-2xl font-bold border-b-2 border-light2 pb-4">Professional Experience:</h1>
      </div>

      {/* Skills icons */}
      <Skills />
    </Layout>
  )
}
