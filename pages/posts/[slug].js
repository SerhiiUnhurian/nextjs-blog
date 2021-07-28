import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../helpers/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.text} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { slug: fileIdentifier } = context.params;
  const post = getPostData(fileIdentifier);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileIdentifiers = getPostFiles();
  const paths = postFileIdentifiers.map(fileIdentifier => ({
    params: { slug: fileIdentifier },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostDetailPage;
