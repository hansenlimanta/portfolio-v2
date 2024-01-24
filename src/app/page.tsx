"use client";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { experienceData, projectsData } from "~/utils/data";
import MouseHover from "~/components/MouseHover";
import Navigation from "~/components/Navigation";
import SocialLinks from "~/components/SocialLinks";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start bg-slate-900 text-slate-400">
      <MouseHover />
      <div className="h-full px-6 md:px-12 lg:mx-auto lg:flex lg:max-w-screen-xl lg:justify-center lg:px-24">
        <header className="pt-12 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
          <div className="mb-4 flex flex-col lg:m-0">
            <h1 className="text-4xl font-bold text-slate-200 lg:text-5xl">
              Hansen Limanta
            </h1>
            <h2 className="mt-3 text-lg font-semibold text-slate-200">
              Fullstack Developer at Midas Daya Teknologi
            </h2>
            <p className="mt-4">
              Crafting pixels and code, turning ideas into <br />
              interactive digital experiences
            </p>
            <Navigation />
          </div>
          <SocialLinks />
        </header>
        <main className="pb-8 pt-20 lg:flex lg:w-1/2 lg:flex-col lg:gap-4 ">
          <section
            className="mb-24 flex scroll-mt-16 flex-col gap-3 lg:scroll-mt-20 lg:px-4"
            id="about"
          >
            <div className="sticky top-0 z-20 mb-4 bg-slate-900/75 py-5 font-bold uppercase text-slate-200 backdrop-blur lg:hidden">
              <h2>about</h2>
            </div>
            <p>
              In 2019, I embarked on my web development journey, choosing to
              major in Computer Science at Bina Nusantara University. The
              culmination of this journey was my proud graduation in August
              2023. This marked the beginning of my venture into coding, and
              during my internship at Sagara Technology, I had the opportunity
              to actively contribute to projects like the Sagara Foundation CSR
              site. This experience became a defining moment, showcasing my
              proficiency in Vue.js and honing my skills in crafting
              user-friendly interfaces.
            </p>
            <p>
              As part of the Midas Daya Teknologi team at Bank Muamalat
              Indonesia, I currently shape the branch delivery system using
              Vue.js and Java Spring Boot. Graduating wasn't just an academic
              milestone; it marked the commencement of a dynamic journey where
              clean, modular code meets perpetual curiosity for innovation.
            </p>
            <p>
              Beyond the code, I find harmony in playing the piano and guitar, a
              balance that fuels my belief in the symbiosis of creativity and
              technology. This is not just a digital story—it's an invitation to
              explore and collaborate on this exciting journey!
            </p>
          </section>
          <section
            className="mb-32 flex scroll-mt-16 flex-col justify-center gap-2 lg:scroll-mt-20 lg:items-start"
            id="experience"
          >
            <div className="sticky top-0 z-20 mb-4 bg-slate-900/75 py-5 font-bold uppercase text-slate-200 backdrop-blur lg:hidden">
              <h2>experience</h2>
            </div>
            <div className="group/parent flex flex-col items-center justify-center gap-2 transition-all">
              {experienceData.map((exp) => (
                <div className="group/exp relative flex flex-col gap-4 rounded-lg py-4 opacity-100 transition-all lg:flex-row lg:p-4 lg:hover:cursor-pointer lg:hover:bg-slate-800/50 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:group-hover/parent:opacity-50">
                  <p className="mt-1 flex-1 text-sm font-semibold text-slate-500">
                    {exp.date}
                  </p>
                  <div className="flex flex-[3] flex-col gap-2">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-200 transition-colors lg:group-hover/exp:text-teal-300"
                    >
                      <span className="absolute -inset-x-0.5 -inset-y-0.5 hidden rounded lg:block"></span>
                      {exp.title}
                    </a>
                    <p className="text-sm">{exp.desc}</p>
                    <ul className="flex flex-wrap gap-2 ">
                      {exp.tools.map((tool) => (
                        <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              className="mt-8 inline-flex w-fit cursor-pointer items-center justify-start gap-2 px-4 font-semibold text-slate-200 transition-colors hover:text-teal-300"
            >
              View Full Resume <MdArrowOutward size={20} />
            </a>
          </section>
          <section
            className="mb-32 flex scroll-mt-16 flex-col justify-center gap-2 lg:scroll-mt-20 lg:items-start"
            id="projects"
          >
            <div className="sticky top-0 z-20 mb-4 bg-slate-900/75 py-5 font-bold uppercase text-slate-200 backdrop-blur lg:hidden">
              <h2>projects</h2>
            </div>
            <div className="group/parent flex flex-col items-center justify-center gap-2 transition-all">
              {projectsData.map((project) => (
                <div className="group/proj relative flex gap-4 rounded-lg py-4 opacity-100 transition-all lg:p-4 lg:hover:cursor-pointer lg:hover:bg-slate-800/50 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:group-hover/parent:opacity-50">
                  <div className="relative mt-1 h-20 w-full flex-1 overflow-hidden rounded border-2 border-slate-700 lg:group-hover/proj:border-slate-400">
                    <Image
                      src={project.image}
                      alt={project.title}
                      objectFit="cover"
                      fill
                    />
                  </div>
                  <div className="flex flex-[3] flex-col gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-200 transition-colors lg:group-hover/proj:text-teal-300"
                    >
                      <span className="absolute -inset-x-0.5 -inset-y-0.5 hidden rounded lg:block"></span>
                      {project.title}
                    </a>
                    <p className="text-sm">{project.desc}</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex w-fit cursor-pointer items-center justify-start gap-2 px-4 font-semibold text-slate-200 transition-colors hover:text-teal-300">
              View Full Project Archive <MdArrowOutward size={20} />
            </div>
            <p className="mt-20 px-4">
              This portfolio is inspired by the design and structure of{" "}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.brittanychiang.com"
                  className="text-slate-200 transition-all hover:text-teal-300"
                >
                  Brittany Chiang's Portfolio
                </a>
              </span>
              . The objective is to reverse engineer aspects of the website to
              gain insights into its layout, style, and functionality.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
