import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all posts about NextJS and React"
        />
      </Head>
      <AllPosts postItems={posts} />
    </Fragment>
  );
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
