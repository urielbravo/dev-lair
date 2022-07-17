import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

import Image from 'next/future/image';

// components
import Layout from "../../components/layout"
import BlogTitle from "../../components/blogTitle"
import PostCard from '../../components/postCard'

export default function Blog ({ posts }) {
  return (
    <Layout>
      <div className="flex flex-col items-center mb-10">
        <BlogTitle />
      </div>
      <div className='flex'>
        {/* posts */}
        <section className='w-3/4 grid grid-cols-3 gap-5'>
          {posts.map((post, index) => {
            return <PostCard key={index} post={post} />
          })}
        </section>
        {/* categories */}
        <section className='w-1/4 text-right'>
          categories
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
      posts
    }
  }
}
