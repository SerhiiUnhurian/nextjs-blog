import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import cls from './post-content.module.css';

const PostContent = ({ post }) => {
  const { slug, image, title, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customComponents = {
    // img: ({ src, alt }) => (
    //   <Image
    //     src={`/images/posts/${slug}/${src}`}
    //     alt={alt}
    //     width={600}
    //     height={300}
    //   />
    // ),

    // With the code above we get an error that <div> cannot be a child of <p> // element, to fix this we need to provide customize how <p> is rendered.
    p: paragraph => {
      if (paragraph.children[0].type === 'img') {
        const imageObj = paragraph.children[0];
        const { src, alt } = imageObj.props;

        return (
          <div className={cls.image}>
            <Image
              src={`/images/posts/${slug}/${src}`}
              alt={alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    // code: code => {
    //   console.log(code);
    //   const { language, value } = code;
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={value}
    //     />
    //   );
    // },
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <article className={cls.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
