import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 xl:px-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 gap-y-28 md:gap-12 lg:gap-x-48 mt-10 max-w-7xl mx-auto">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[10rem] lg:min-h-[30rem] flex items-center justify-center sm:w-[60vw] w-[95vw] max-w-sm"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center w-[85vw] sm:w-[480px] sm:h-[23vh] lg:h-[39vh] overflow-hidden mb-5 h-[25vh]">
                <div className="relative overflow-hidden w-full rounded-lg bg-[#13162D] border border-white/[0.2] h-full">
                  <img
                    src={img}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                    <FaLocationArrow className="ms-3 " color="#CBACF9" />
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
