import Image from 'next/image';

import cls from './hero.module.css';

const Hero = () => {
  return (
    <section className={cls.hero}>
      <div className={cls.image}>
        <Image
          src="/images/site/author.jpg"
          alt="Author image"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Serhii.</h1>
      <p>
        I am a passionate programmer about web development. This is my blog
        about Next.js and React.js.
      </p>
    </section>
  );
};

export default Hero;
