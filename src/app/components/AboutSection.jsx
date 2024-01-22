"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import Room from "../../../public/room.png";

const years = new Date().getFullYear() - 2018;

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>React Native</li>
        <li>NextJS</li>
        <li>Tailwind</li>
        <li>Typescript</li>
        <li>AWS services</li>
        <li>Algolia</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS solution architect certification (2019)</li>
        <li>Supinfo, Computer Science Experts (2014 - 2019)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white px-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
        <Image src={Room} width={500} height={500} alt="room" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">            
            Hello, I&apos;m Tony, a Paris-based Lead Tech Web Developer currently at {" "}
            <Link
              href={"https://planity.com"}
              className="underline text-primary-500"
            >
              Planity
            </Link>. With over {years} years of experience in the tech industry, my
            passion lies in transforming complex challenges into simple,
            beautiful, and intuitive solutions. My expertise spans a variety of
            projects, from crafting user-friendly interfaces to optimizing
            back-end processes. In addition to my professional roles, I&apos;ve also
            served as a mentor to several students and professionals, guiding
            them through their academic and work projects to successful
            completion. My multifaceted experience makes me a versatile
            problem-solver, committed to delivering excellence in every endeavor
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
