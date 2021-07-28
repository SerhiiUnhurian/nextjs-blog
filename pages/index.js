import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Serhii's NextJS Blog</title>
        <meta name="description" content="Blog about NextJS and React" />
      </Head>
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
