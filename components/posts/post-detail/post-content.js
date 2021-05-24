import ReactMarkDown from 'react-markdown';

import PostHeader from './post-header';
import cls from './post-content.module.css';

const PostContent = ({ post }) => {
  const { slug, image, title, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={cls.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkDown>{content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
