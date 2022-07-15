import Image from "next/future/image";

import styles from './blogTitle.module.css'

// images
import torch from '../public/images/gifs/torch.gif'

export default function BlogTitle() {
  return (
    <div className="flex items-center justify-around w-2/3">
        <Image src={torch} alt='torch' />
        <div className={`${styles.marquee}`}>
          <span className="text-4xl">The blog</span>
        </div>
        <Image src={torch} alt='torch' />
      </div>
  )
}