import Image from "next/future/image"

export default function PostCard ({ post }) {
  return (
    <div className="bg-dark0_soft rounded overflow-hidden shadow-2xl w-96 h-auto relative">
      <Image className="w-96 h-auto" src={post.frontmatter.cover_image} width={600} height={600} alt={post.frontmatter.title} />
      <div className="p-7">
        <span className="font-bold">{post.frontmatter.title}</span>
        <span className="block text-sm mt-5">{post.frontmatter.excerpt}</span>
      </div>
      <div className="bg-light0_soft text-dark0_soft text-xs uppercase font-bold rounded-full p-1 absolute top-0 ml-2 mt-2">
        <span>{post.frontmatter.category}</span>
      </div>
    </div>
  )
}