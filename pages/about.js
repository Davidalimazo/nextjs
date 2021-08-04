import Head from "next/head";
import Image from 'next/image'
const About = () => {
  return (
    <>
      <Head>
        <title>About | Page</title>
        <meta name="Keywords" content="next dev" />
      </Head>
      <div className="heading">
        <h1>About Page</h1>
        <Image src="/unnamed.png" width={128} height={129} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adi1\pisicing elit. Magnam
          voluptatem placeat, quos porro sunt qui ipsam accusantium iusto ea
          odit excepturi iste nisi veniam velit laborum autem facere deleniti
          consequatur sint? Eaque provident reprehenderit expedita blanditiis
          nobis molestiae, vero voluptatum.
        </p>
      </div>
    </>
  );
};

export default About;
