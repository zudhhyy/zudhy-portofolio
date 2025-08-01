// import ProjectCard from "components/card/ProjectCard";
import LinkedInProjectCard from "components/card/LinkedInProjectCard";
import SkillsSection from "components/skills/SkillsSection";
import EducationSection from "components/education/EducationSection";
import ContactSection from "components/contact/ContactSection";
import { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  handleOnAnimationEnd: () => void;
}

interface MainProps {
  isLoading: boolean;
}

import EXPERIENCE from "constants/experience";
import LINKEDIN_DATA from "constants/linkedin";

import Button from "components/button/Button";
import CardExperience from "components/card/CardExperience";

const Header: FC<HeaderProps> = ({ handleOnAnimationEnd }) => {
  return (
    <div>
      <h1
        onAnimationEnd={handleOnAnimationEnd}
        className="stroke-text mt-5 w-full animate-slideDown text-center text-[20svw] font-bold leading-none text-primary-stroke text-transparent opacity-35 lg:mt-10"
      >
        ZUDHHYY
      </h1>
    </div>
  );
};

const Main: FC<MainProps> = ({ isLoading }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!isLoading && opacity < 1) {
      const interval = setInterval(() => {
        setOpacity((prev) => prev + 0.05);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading, opacity]);

  return (
    <div
      className="mt-10 flex w-full flex-col justify-between lg:flex-row lg:items-center"
      style={{ opacity }}
    >
      <div className="lg:max-w-[50%]">
        <p className="text-4xl font-bold">コニチワ 👋🏻</p>
        <p className="text-xl font-semibold lg:text-4xl">
          I AM TUBAGUS DHAIFULLAH ZUHDI
        </p>
        <p className="mt-1 font-bebas text-xl text-white/40">
          a Fullstack Developer with a focus on Frontend Development.
        </p>
        <p className="text-md mt-5 font-medium lg:w-[70%]">
          Hi, I&apos;m Zuhdi. A Fullstack Developer with a passion for creating
          high-performance, visually appealing, and scalable web and mobile
          applications.
        </p>
      </div>

      <div className="mt-10 flex h-[100px] flex-col items-end self-end lg:mt-0 lg:max-w-[40%] lg:self-center">
        <p className="mb-2 font-bebas text-2xl font-bold">👨🏻‍💻 Contact Me</p>
        <a 
          href={LINKEDIN_DATA.profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-bebas hover:text-blue-400 transition-colors"
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <p>LinkedIn</p>
        </a>
        <a 
          href={LINKEDIN_DATA.profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-bebas hover:text-gray-400 transition-colors"
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <p>Github</p>
        </a>
      </div>
    </div>
  );
};

const Experience: FC = () => {
  return (
    <div className="mt-[260px] w-full lg:mt-[240px]">
      <p className="text-4xl font-bold text-white/40 lg:text-8xl">
        My Experience
      </p>
      <p className="mt-1 text-lg">
        I have some experience working with several companies, here are some of
      </p>
      <div className="mt-5 flex flex-col gap-5 border bg-black/40 p-4">
        {EXPERIENCE.map((experience, idx) => (
          <CardExperience key={idx} {...experience} />
        ))}
        <Button variant="text">
          <p className="text-center font-medium">Read more</p>
        </Button>
      </div>
    </div>
  );
};

const Project: FC = () => {
  const featuredProjects = LINKEDIN_DATA.projects.filter(project => project.featured);
  
  return (
    <div className="mt-[260px] w-full lg:mt-[240px]">
      <p className="text-4xl font-bold text-white/40 lg:text-8xl">PROJECTS</p>
      <p className="mt-1 text-lg">
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
      <div className="mt-5 flex flex-col items-center gap-8">
        {featuredProjects.map((project, index) => (
          <LinkedInProjectCard key={index} project={project} />
        ))}
        <Link to="/projects">
          <Button variant="text">
            <p className="text-center font-medium">View All Projects</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const AboutMe: FC = () => {
  return (
    <div className="mt-[60px] w-full lg:mt-[240px]">
      <p className="text-4xl font-bold text-white/40 lg:text-8xl">ABOUT ME</p>
      <p className="mt-3 text-lg">
        {LINKEDIN_DATA.profile.about}
      </p>
      <div className="mt-8 rounded-lg border border-white/10 bg-black/20 p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-bold text-white/80">Current Role</h3>
            <p className="text-white/70">{LINKEDIN_DATA.profile.headline}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold text-white/80">Location</h3>
            <p className="text-white/70">{LINKEDIN_DATA.profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnAnimationEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    if (!isLoading) {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col items-center px-[4%] text-white ">
      <Header handleOnAnimationEnd={handleOnAnimationEnd} />
      <Main isLoading={isLoading} />
      <Experience />
      <Project />
      <AboutMe />
      <div className="relative">
        <SkillsSection skills={LINKEDIN_DATA.skills} />
        <div className="mt-6 text-center">
          <Link to="/skills">
            <Button variant="text">
              <p className="text-center font-medium">View All Skills</p>
            </Button>
          </Link>
        </div>
      </div>
      <EducationSection education={LINKEDIN_DATA.education} certifications={LINKEDIN_DATA.certifications} />
      <ContactSection profile={LINKEDIN_DATA.profile} />
    </div>
  );
};

export default Home;
