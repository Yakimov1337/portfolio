import type { NextPage } from "next";
import Head from "next/head";
import Hero from  "../components/Hero";
import About from  "../components/About";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>George`s Portfolio</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero/>
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
      <section id="workExperience" className="snap-center">
        <WorkExperience/>
      </section>
    </div>
  );
};

export default Home;
