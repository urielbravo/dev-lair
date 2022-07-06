// components
import Layout from "../components/layout"
import Skills from "../components/skills"
import Links from "../components/links"
import Profile from "../components/profile"
import Title from "../components/title"
import Project from "../components/project"

export default function HomePage () {
  return (
    <Layout>
      {/* profile picture, name and a bit of text about me */}
      <Profile />
      {/* links */}
      <Links />
      {/* Skills section */}
      <Title sectionTitle={"Professional Experience:"} />
      {/* Skills icons */}
      <Skills />
      {/* projects sections */}
      <Title sectionTitle={"Some of my work:"} />
      {/* projects */}
      <Project />
    </Layout>
  )
}
