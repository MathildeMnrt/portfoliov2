import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tech, detailUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 flex flex-col w-full">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-3">{description}</p>
        { detailUrl && (
          <div className="flex w-full justify-end">
            <Link
            href={detailUrl}
            className="px-4 py-2 sm:w-fit rounded-full mr-2 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
          >
            Learn More
          </Link>
          </div>
        )}
        { tech && (
          <div className="flex flex-row gap-2 mt-4 flex-wrap">
            {tech.map((t, index) => (
              <span key={index} className="text-[#ADB7BE] bg-[#33353F] px-2 py-1 rounded-full text-xs">
                {t}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;
