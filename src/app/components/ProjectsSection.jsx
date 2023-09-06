"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "FWA",
    description:
      "As a Web Developer, I served as a consultant for FWA, specializing in the maintenance and optimization of a global web application used for import and export operations. Utilizing .NET technologies, I collaborated with major corporations to enhance the application's performance and scalability, ensuring seamless and compliant international trade.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.fwa.fr/",
  },
  {
    id: 2,
    title: "LCL",
    description:
      "As a Software Engineer at LCL, a traditional banking institution, I was responsible for the maintenance and improvement of a legacy web application designed to simplify customer file management. Leveraging my technical skills, I optimized the application's performance and usability, ensuring a more efficient and secure experience for both internal staff and clients.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.lcl.fr/",
  },
  {
    id: 3,
    title: "Codementor",
    description:
      "As an experienced mentor, I have had the privilege of guiding over 10 individuals through their academic and professional projects. With consistently positive reviews, I've successfully assisted my mentees in navigating the complexities of their respective fields, helping them to complete their school or work projects on time and to a high standard.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.codementor.io/@tonytangdev",
  },
  {
    id: 4,
    title: "Planity",
    description:
      "As the Lead Tech Developer at Planity, the market-leading appointment scheduling app for hairdressers and beauty institutes, I played a pivotal role in both product maintenance and new feature development. My contributions were instrumental in enhancing the application's functionality and user experience, solidifying its position as the go-to solution for professionals in the beauty industry.",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://www.planity.com/",
  },
  {
    id: 5,
    title: "Planity Pro",
    description:
      "As the Lead Tech Developer for Planity Pro, I spearheaded the development of new features, including enhancements to the professional's calendar and the integration of POS software. These contributions significantly improved operational efficiency and user engagement, solidifying Planity Pro as an essential tool for beauty industry professionals.",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Tablet"],
    previewUrl: "https://pro.planity.com/",
  },
  {
    id: 6,
    title: "Planity Pro Mobile",
    description:
      "As the Lead Tech Developer for Planity Pro Mobile, I played a key role in optimizing the platform for smartphone use. My primary focus was on enhancing the professional's calendar functionalities, which significantly improved user engagement and operational efficiency, establishing Planity Pro Mobile as an indispensable tool for beauty professionals on the go.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    previewUrl:
      "https://apps.apple.com/fr/app/planity-pro-pour-t%C3%A9l%C3%A9phone/id1192719904",
  },
  {
    id: 7,
    title: "Gaming coach",
    description:
      "As the creator of Gaming Coach, I was responsible for creating a modern and user-friendly platform that seamlessly integrates Calendly and Stripe to offer a streamlined booking experience for coaching sessions. The app features a clean, intuitive design, making it easy for users to navigate through available coaching options and make secure payments. Designed with coaches and educators in mind, Gaming Coach serves as a showcase of my capabilities in developing solutions that simplify and enhance the service booking process.",
    image: "/images/projects/7.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://gaming-coach.vercel.app/",
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 overflow-scroll">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Tablet"
          isSelected={tag === "Tablet"}
        />
      </div>
      <ul ref={ref} className="px-12 grid md:grid-cols-3 gap-8 md:gap-12">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
