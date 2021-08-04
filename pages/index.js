import Head from 'next/head';
import About from './about';
import styles from "../styles/Home.module.css";
import Ninjas from './ninjas';


const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Page</title>
        <meta name="Keywords" content="next dev" />
      </Head>
      <div>
        <div className="home">
          <h1>Home Page</h1>
          <Ninjas />
        </div>
      </div>
    </>
  );
}
 
export default Home;