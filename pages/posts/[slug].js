import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../helpers/posts-util';

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
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
