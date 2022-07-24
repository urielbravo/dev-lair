import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

import { sortByDate } from '../../utils';

// components
import Layout from "../../components/layout"
import BlogTitle from "../../components/blogTitle"
import PostCard from '../../components/postCard'
import Title from '../../components/title';

export default function Blog ({ posts }) {
  return (
    <Layout>
      <div className="flex flex-col items-center mb-10">
        <BlogTitle />
      </div>
        <div className='w-3/4'>
          <Title sectionTitle="Latests posts" />
        </div>
      <div className='flex flex-col md:flex-row'>
        {/* posts */}
        <section className='w-3/4 grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2'>
          {posts.map((post, index) => {
            return <PostCard key={index} post={post} />
          })}
        </section>
        {/* categories */}
        <section className='w-1/4 text-right'>
          <span className='font-bold text-xl'>categories</span>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps () {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}
