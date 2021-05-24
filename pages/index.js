import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts postItems={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
