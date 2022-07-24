import Image from "next/future/image"
import Link from "next/link"

export default function PostCard ({ post }) {
  return (
    <div className="bg-dark0_soft rounded overflow-hidden shadow-2xl h-auto relative">
      {/* card image */}
      <Image src={post.frontmatter.cover_image} width={600} height={600} alt={post.frontmatter.title} />
      {/* text container */}
      <div className="p-5">
        <div className="text-xs mb-3">
          <span>{post.frontmatter.date}</span>
        </div>
        <Link className="font-bold" href={`/blog/${post.slug}`}>
          <a className="font-bold">{post.frontmatter.title}</a>
        </Link>
        <span className="block text-sm mt-3">{post.frontmatter.excerpt}</span>
        <span></span>
      </div>
      {/* categorie badge */}
      <div className="bg-light0_soft text-dark0_soft text-xs uppercase font-bold rounded-full p-1 absolute top-0 ml-2 mt-2">
        <Link href={`/blog/category/${post.frontmatter.category.toLowerCase()}`}>{post.frontmatter.category}</Link>
      </div>
      {/* read more */}
      <div className="flex p-2 items-center font-bold">
        <Link href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  )
}