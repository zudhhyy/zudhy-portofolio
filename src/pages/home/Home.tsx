import { FC, useCallback, useEffect, useState } from "react";

interface HeaderProps {
  handleOnAnimationEnd: () => void;
}

interface MainProps {
  isLoading: boolean;
}

const Header: FC<HeaderProps> = ({ handleOnAnimationEnd }) => {
  return (
    <div>
      <h1
        onAnimationEnd={handleOnAnimationEnd}
        className="stroke-text mt-5 w-full animate-slideDown text-center text-[20svw] font-bold leading-none text-primary-stroke text-transparent opacity-35 lg:mt-0"
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
      <div className="lg:max-w-[40%]">
        <p className="text-4xl font-semibold">コニチワ 👋🏻</p>
        <p className="mt-3 text-4xl font-semibold">
          I AM TUBAGUS DHAIFULLAH ZUHDI
        </p>
        <p className="mt-3 font-bebas text-2xl text-white/40">
          a Fullstack Developer with a focus on Frontend Development.
        </p>
        <p className="mt-3 text-lg font-medium">
          Hi, I&apos;m Zuhdi. A Fullstack Developer with a passion for creating
          high-performance, visually appealing, and scalable web and mobile
          applications.
        </p>
      </div>

      <div className="mt-10 flex h-[100px] flex-col items-end self-end lg:mt-0 lg:max-w-[40%] lg:self-center">
        <p className="mb-2 font-bebas text-2xl font-bold">👨🏻‍💻 Contact Me</p>
        <div className="flex items-center font-bebas">
          <img alt="" src="" className="mr-2 h-5 w-5" />
          <p>LinkedIn</p>
        </div>
        <div className="flex items-center font-bebas">
          <img alt="" src="" className="mr-2 h-5 w-5" />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

const Project: FC = () => {
  return (
    <div className="mt-[260px] lg:mt-[240px] w-full">
      <p className="font-bebas text-8xl text-white/40">Project</p>

      <div className="flex flex-col items-center gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full h-[300px] border bg-black/50">

          </div>
        ))}
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

  return (
    <div className="relative flex h-[498svh] flex-col items-center px-[4%] text-white lg:h-[422svh]">
      <Header handleOnAnimationEnd={handleOnAnimationEnd} />
      <Main isLoading={isLoading} />
      <Project />
    </div>
  );
};

export default Home;
