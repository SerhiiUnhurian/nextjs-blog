import Image from 'next/image';

import cls from './post-header.module.css';

const PostHeader = ({ title, image }) => {
  return (
    <header className={cls.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={120} />
    </header>
  );
};

export default PostHeader;
