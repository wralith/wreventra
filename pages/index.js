import Landing from "../components/Landing";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Wreventra</title>
        <meta
          name="description"
          content="Create, find and share your upcoming events."
        />
      </Head>
      <Landing />
    </>
  );
}

export default Home;
