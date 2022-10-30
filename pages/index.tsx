import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // revalidate: 10,
  };
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  // let [pageInfoTest, setPageInfoTest] = useState<PageInfo>();
  // let [experienceTest, setExperienceTest] = useState<Experience[]>();
  // let [skillsTest, setSkillsTest] = useState<Skill[]>();
  // let [projectTest, setProjectTest] = useState<Project[]>();
  // let [socialsTest, setSocialsTest] = useState<Social[]>();

  // useEffect(() => {
  //   async function FetchData() {
  //     const pageInfo: PageInfo = await fetchPageInfo();
  //     const experiences: Experience[] = await fetchExperience();
  //     const skills: Skill[] = await fetchSkills();
  //     const projects: Project[] = await fetchProjects();
  //     const socials: Social[] = await fetchSocials();

  //     setPageInfoTest(pageInfo);
  //     setExperienceTest(experiences);
  //     setSkillsTest(skills);
  //     setProjectTest(projects);
  //     setSocialsTest(socials);
  //   }
  //   FetchData();
  // }, []);

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      {/* <Header socials={socialsTest} />
  <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfoTest} />
      </section>   
      <section id="about" className="snap-center">
        <About pageInfo={pageInfoTest} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experienceTest} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skillsTest} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projectTest} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>  */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            {/*TO DO: CHANGE IMAGE */}
            <Image
              width={10}
              height={10}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://avatars.githubusercontent.com/u/92337248?v=4"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
