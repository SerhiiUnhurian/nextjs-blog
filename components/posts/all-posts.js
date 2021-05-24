import cls from './all-posts.module.css';
import PostsGrid from './posts-grid';

const AllPosts = ({ postItems }) => {
  return (
    <section className={cls.posts}>
      <h1>All Posts</h1>
      <PostsGrid postItems={postItems} />
    </section>
  );
};

export default AllPosts;
