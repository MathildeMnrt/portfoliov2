"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData
  = [
  {
      id: 7,
      type: 'demo',
      title: "Share AI generated images",
      description: "A short and sweet project that uses the power of DallE AI to generate custom images and share them with the community.",
      image: "/images/projects/dalle-clone-demo.png",
      previewUrl: "https://dalle-clone-demo.mathildemenoret.com/",
      gitUrl: "https://github.com/CodeBeroi/project-threejs-ai",
      tech: ["Node.js", "Express", "React", "MongoDB", "DallE"],
      tag: ["All", "Web"]
  },
  {
      id: 1,
      type: 'demo',
      title: "Share AI generated images",
      description: "A short and sweet project that uses the power of DallE AI to generate custom images and share them with the community.",
      image: "/images/projects/dalle-clone-demo.png",
      previewUrl: "https://dalle-clone-demo.mathildemenoret.com/create-post",
      gitUrl: "https://github.com/CodeBeroi/project-threejs-ai",
      tech: ["Node.js", "Express", "React", "MongoDB", "DallE"],
      tag: ["All", "Web"]
  },
  {
      id: 2,
      type: 'demo',
      title: "Threads Clone",
      description: "Find the design and main features of the famous app Threads.",
      image: "/images/projects/threads-clone.png",
      previewUrl: "https://threads-clone-7a65.vercel.app/create-thread/",
      gitUrl: "https://github.com/MathildeMnrt/threads_clone",
      tech: ["Next.js", "React", "MongoDB", "Clerk"],
      tag: ["All", "Web"]
  },
  {
      id: 3,
      type: 'demo',
      title: "ThreeJS / DallE Demo",
      description: "Little project to learn ThreeJS while using DallE generated content",
      image: "/images/projects/threejs-ai-shirt.png",
      previewUrl: "ai-threejs-demo.mathildemenoret.com",
      gitUrl: "https://github.com/CodeBeroi/project-threejs-ai",
      tech: ["Node.js", "Express", "React", "Threejs", "DallE", "Framer Motion"],
      tag: ["All", "Web"]
  },
  {
      id: 4,
      type: 'demo',
      title: "AI Summarizer",
      description: "A simple page that summarizes the content of an URL using OpenAI.",
      image: "/images/projectsai-summarizer.png",
      previewUrl: "https://ai-summarizer.mathildemenoret.com/",
      gitUrl: "https://github.com/MathildeMnrt/ai-summarizer",
      tech: ["React", "Redux", "RapidAPI"],
      tag: ["All", "Web"]
  },
  {
      id: 5,
      type: 'content',
      title: "Back-end overhaul",
      description: "Migrating an existing NoSQL database to a relational model using TypeORM and PostgreSQL. API creation and documentation to be used by an existing front",
      image: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previewUrl: "https://lama.dev",
      gitUrl: "/",
      tech: ["TypeORM", "Nest.js", "PostgreSQL"],
      tag: ["All", "Web"]
  },
  {
      id: 6,
      type: 'content',
      title: "My portfolio",
      description: "Just linking this here so you can check how I built this portfolio!",
      image: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      gitUrl: "https://github.com/CodeBeroi/portfolio",
      previewUrl: "/",
      tech: ["Next.js", "React", "Framer Motion", "EmailJS"],
      tag: ["All", "Web"]
  },
];

const projectsData1 = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
