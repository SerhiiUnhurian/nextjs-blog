import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

const AllPostsPage = ({ posts }) => {
  return <AllPosts postItems={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
