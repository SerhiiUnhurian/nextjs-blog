import PostItem from './post-item';
import cls from './posts-grid.module.css';

const PostsGrid = ({ postItems }) => {
  return (
    <ul className={cls.grid}>
      {postItems.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
