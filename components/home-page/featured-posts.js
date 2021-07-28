import cls from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';

const FeaturedPosts = ({ postItems }) => {
  return (
    <section className={cls.latest}>
      <h2>Featured posts</h2>
      <PostsGrid postItems={postItems} />
    </section>
  );
};

export default FeaturedPosts;
