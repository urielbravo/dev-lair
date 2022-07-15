import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

// components
import Layout from "../../components/layout";

import BlogTitle from "../../components/blogTitle";

export default function Blog ({posts}) {
  console.log(posts);
  return (
    <Layout>
      <div className="flex flex-col items-center">
      <BlogTitle />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
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
