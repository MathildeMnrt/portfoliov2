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
      title: "Event Sharing App",
      description: "My most massive project. NB: The project is still in development, but you can check the progress here. Repository is private but i would gladly present the content during interviews.",
      image: "/images/projects/event-app.png",
      previewUrl: "https://livit.vercel.app/",
      gitUrl: "https://github.com/MathildeMnrt",
      tech: ["Next.js", "React", "MongoDB", "Tailwind", "Stripe", "Clerk"],
      tag: ["All", "Backend", "Web"],
      detailUrl: "/projects/event-app"
    },
    {
      id: 1,
      type: 'demo',
      title: "Share AI generated images",
      description: "A short and sweet project that uses the power of DallE AI to generate custom images and share them with the community.",
      image: "/images/projects/dalle-clone-demo.png",
      previewUrl: "https://dalle-clone-demo.mathildemenoret.com",
      gitUrl: "https://github.com/CodeBeroi/project-threejs-ai",
      tech: ["Node.js", "Express", "React", "MongoDB", "DallE"],
      tag: ["All", "Backend", "FrontEnd"]
    },
    {
      id: 1,
      type: 'demo',
      title: "Dev Challenges",
      description: "I tackled several little projects from DevChallenges.io to train myself to recreate front pages based on mock-up and specifications.",
      image: "/images/projects/devchallenges.png",
      previewUrl: "https://devchallenges.io/profile/e190dc92-dd2f-43ce-9222-c464e7be2a2e",
      gitUrl: "https://github.com/MathildeMnrt",
      tech: ["React", "Tailwind"],
      tag: ["All", "FrontEnd"]
    },
    {
      id: 2,
      type: 'demo',
      title: "Threads Clone",
      description: "Find the design and main features of the famous app Threads.",
      image: "/images/projects/threads-clone.png",
      previewUrl: "https://threads-clone-7a65.vercel.app",
      gitUrl: "https://github.com/MathildeMnrt/threads_clone",
      tech: ["Next.js", "React", "MongoDB", "Clerk"],
      tag: ["All", "Backend", "FrontEnd"]
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
      tag: ["All", "Backend", "FrontEnd"]
    },
    {
      id: 4,
      type: 'demo',
      title: "AI Summarizer",
      description: "A simple page that summarizes the content of an URL using OpenAI.",
      image: "/images/projects/ai-summarizer.png",
      previewUrl: "https://ai-summarizer.mathildemenoret.com/",
      gitUrl: "https://github.com/MathildeMnrt/ai-summarizer",
      tech: ["React", "Redux", "RapidAPI"],
      tag: ["All", "Backend", "FrontEnd"]
    },
    {
      id: 5,
      type: 'content',
      title: "Back-end overhaul",
      description: "Migrating an existing NoSQL database to a relational model using TypeORM and PostgreSQL. API creation and documentation to be used by an existing front. NB: Repository is private as it was to help on an existing project but i would gladly present the content during interviews if requested.",
      image: "/images/projects/nestjs-project.png",
      previewUrl: "/",
      gitUrl: "/",
      tech: ["TypeORM", "Nest.js", "PostgreSQL"],
      tag: ["All", "Backend"]
    },
    {
      id: 6,
      type: 'content',
      title: "My portfolio",
      description: "Just linking this here so you can check how I built this portfolio!",
      image: "/images/projects/portfolio.png",
      gitUrl: "https://github.com/CodeBeroi/portfolio",
      previewUrl: "/",
      tech: ["Next.js", "React", "Framer Motion", "EmailJS"],
      tag: ["All", "FrontEnd"]
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
      <div>
        <p>
          Browse through the projects to gain an understanding of my skills and approach to web development.
          Most of these projects are based on tutorials or challenges that allowed me to progress quickly and learn about several tech, but I am currently working on a massive project that allowed me to acquire a great experience in NextJS by building my own web app.
        </p>
      </div>
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
              detailUrl={project.detailUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
