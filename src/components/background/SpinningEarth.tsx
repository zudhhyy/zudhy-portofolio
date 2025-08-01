import { useEffect, useState, FC } from "react";
import Lottie from "lottie-react";

// import SpinningEarthImg from "assets/images/background/spinning-earth.webp";
import StarLottie from "assets/lotties/star.json";

const SpinningEarth: FC = () => {
  // const [rotation, setRotation] = useState(0);
  const [showMeteorMid, setShowMeteorMid] = useState(false);
  const [showMeteorRight, setShowMeteorRight] = useState(false);

  useEffect(() => {
    // console.log("jalan");

    const handleScroll = () => {
      // console.log(window);

      // setRotation(window.scrollY * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimeout(() => {
        setShowMeteorRight(true);
      }, 3000);
      setShowMeteorMid(true);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="fixed -z-10 h-screen w-full bg-gradient-to-b from-primary-background-start to-primary-background-end" />
      <div className="flex items-center justify-between">
        <Lottie
          animationData={StarLottie}
          loop={true}
          className="fixed left-0 -z-10 w-1/3"
        />
        {showMeteorMid && (
          <Lottie
            animationData={StarLottie}
            loop={true}
            className="fixed left-0 right-0 top-10 -z-10 mx-auto w-1/3"
          />
        )}
        {showMeteorRight && (
          <Lottie
            animationData={StarLottie}
            loop={true}
            className="fixed bottom-10 right-0 -z-10 w-1/3 transform"
          />
        )}
      </div>

      {/* <div className="fixed -bottom-[35%] left-0 right-0 z-10 mx-auto flex animate-slideUp justify-center lg:-bottom-[80%]">
        <div className="animate-float transition-opacity duration-500">
          <img
            src={SpinningEarthImg}
            alt="Spinning Earth"
            className="w-full max-w-[1000px]"
            style={{ transform: `rotate(${rotation.toString()}deg)` }}
          />
        </div>
      </div> */}
    </>
  );
};

export default SpinningEarth;
