import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div id="hero" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        {/* Updated layout structure */}
        <div className="flex flex-col lg:flex-row items-center justify-center relative z-10 px-4 md:px-8 mb-5 md:mb-10 lg:mb-20 -mt-10 md:-mt-22 lg:-mt-30">
          {/* Image container */}
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
            <img
              src="Avatar.jpg"
              alt="Hero Image"
              className="object-cover object-center rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
          </div>

          {/* Text content container */}
          <div className="flex-1 max-w-2xl">
            <TextGenerateEffect
              className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl mb-6"
              words="Hey There, Welcome to my portfolio !"
            />
            <p className="text-center lg:text-left md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl leading-relaxed">
              I'm Edward, a Funny IT guy from Viet Nam, I graduated Bachelor in
              Cybersecurity from Coventry University in 2023. And I'm currently
              studying Master's degree in Computer Science at Mercy University.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="#about">
                <MagicButton
                  title="Click Me !"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
