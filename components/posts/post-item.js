import Link from 'next/link';
import Image from 'next/image';

import cls from './post-item.module.css';

const PostItem = ({ post }) => {
  const { image, title, text, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/post/${slug}`;

  return (
    <li className={cls.post}>
      <Link href={linkPath}>
        <a>
          <div className={cls.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={cls.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
