"use client";

import MouseHover from "~/components/MouseHover";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import useWindowPosition from "~/utils/useWindowPosition";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollMark, setScrollMark] = useState(0);
  const windowPosition = useWindowPosition();
  useEffect(() => {
    console.log("test", windowPosition);
    if (windowPosition < 480) {
      setScrollMark(0);
    } else if (windowPosition < 1152) {
      setScrollMark(1);
    } else {
      setScrollMark(2);
    }
  }, [windowPosition]);
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start bg-slate-900 text-slate-400">
      <MouseHover />
      <div className="mx-auto flex h-full max-w-screen-xl justify-center px-6 md:px-12 lg:px-24">
        <header className="sticky top-0 flex max-h-screen  w-1/2 flex-col justify-between py-20">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-slate-200">
              Hansen Limanta
            </h1>
            <h2 className="mt-3 text-lg font-semibold text-slate-200">
              Fullstack Developer at Midas Daya Teknologi
            </h2>
            <p className="mt-4">
              Crafting pixels and code, turning ideas into <br />
              interactive digital experiences
            </p>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a href="#about" className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:h-[2px] group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:h-[2px] group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${scrollMark === 0 ? "h-[2px] w-16 bg-slate-200" : "h-px w-8 bg-slate-600"}`}
                    ></span>
                    <span
                      className={`text-sm font-semibold uppercase tracking-wider group-hover:text-slate-200 group-focus-visible:text-slate-200 ${scrollMark === 0 ? "text-slate-200" : "text-slate-400"}`}
                    >
                      about
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="group flex items-center py-3"
                  >
                    <span
                      className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:h-[2px] group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:h-[2px] group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${scrollMark === 1 ? "h-[2px] w-16 bg-slate-200" : "h-px w-8 bg-slate-600"}`}
                    ></span>
                    <span
                      className={`text-sm font-semibold uppercase tracking-wider group-hover:text-slate-200 group-focus-visible:text-slate-200 ${scrollMark === 1 ? "text-slate-200" : "text-slate-400"}`}
                    >
                      {" "}
                      experience
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:h-[2px] group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:h-[2px] group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${scrollMark === 2 ? "h-[2px] w-16 bg-slate-200" : "h-px w-8 bg-slate-600"}`}
                    ></span>
                    <span
                      className={`text-sm font-semibold uppercase tracking-wider group-hover:text-slate-200 group-focus-visible:text-slate-200 ${scrollMark === 2 ? "text-slate-200" : "text-slate-400"}`}
                    >
                      {" "}
                      projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="flex items-center justify-start gap-4">
            <li className="cursor-pointer transition-all hover:text-slate-200">
              <AiOutlineInstagram size={30} />
            </li>
            <li className="cursor-pointer transition-all hover:text-slate-200">
              <AiOutlineLinkedin size={30} />
            </li>
            <li className="cursor-pointer transition-all hover:text-slate-200">
              <AiOutlineGithub size={30} />
            </li>
            <li className="cursor-pointer transition-all hover:text-slate-200">
              <AiOutlineMail size={30} />
            </li>
          </ul>
        </header>
        <main className="flex w-1/2 flex-col gap-4 py-20 ">
          <section className="mb-32 flex flex-col gap-3 px-4" id="about">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus consequuntur enim, provident, voluptate
              reprehenderit, alias quia corrupti aspernatur distinctio
              laudantium placeat libero ratione accusantium expedita quisquam
              soluta quidem dolorum at error ea. Temporibus atque accusamus
              ducimus corporis aliquam dolore! Eaque aperiam sequi omnis autem
              laudantium ducimus totam repudiandae adipisci suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              fugiat tempora. Ab, sunt praesentium. Labore totam doloremque
              similique fuga excepturi impedit maxime sapiente tenetur itaque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellat ducimus dignissimos aliquam rerum delectus odio minima?
              Minima, animi perferendis!
            </p>
          </section>
          <section
            className="mb-32 flex flex-col items-start justify-center gap-2"
            id="experience"
          >
            <div className="group/parent flex flex-col items-center justify-center gap-2 transition-all">
              <div className="group/exp flex gap-4 rounded-lg p-4 opacity-100 transition-all hover:cursor-pointer hover:bg-slate-800/50 hover:!opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group-hover/parent:opacity-50">
                <p className="mt-1 flex-1 text-sm font-semibold text-slate-500">
                  2023 — Present
                </p>
                <div className="flex flex-[3] flex-col gap-2">
                  <h2 className="font-semibold text-slate-200 transition-colors group-hover/exp:text-teal-300">
                    Fullstack Developer · Midas Daya Teknologi
                  </h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum facere optio, eum amet beatae placeat nobis id.
                    Neque, asperiores veniam? Fugit odit qui voluptatibus
                    repellendus non dolores rerum autem sequi?
                  </p>
                  <ul className="flex flex-wrap gap-2 ">
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Vue
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Vuetify
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Java
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Springboot
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Vuex
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Git
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group/exp flex gap-4 rounded-lg p-4 opacity-100 transition-all hover:cursor-pointer hover:bg-slate-800/50 hover:!opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group-hover/parent:opacity-50">
                <p className="mt-1 flex-1 text-sm font-semibold text-slate-500">
                  2022 — 2023
                </p>
                <div className="flex flex-[3] flex-col gap-2">
                  <h2 className="font-semibold text-slate-200 transition-colors group-hover/exp:text-teal-300">
                    Frontend Developer · Sagara Technology
                  </h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum facere optio, eum amet beatae placeat nobis id.
                    Neque, asperiores veniam? Fugit odit qui voluptatibus
                    repellendus non dolores rerum autem sequi?
                  </p>
                  <ul className="flex flex-wrap gap-2 ">
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      React
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      MUI
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      React Hook Form
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      NextJS
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Styled Component
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Figma
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 inline-flex w-fit cursor-pointer items-center justify-start gap-2 px-4 font-semibold text-slate-200 transition-colors hover:text-teal-300">
              View Full Resume <MdArrowOutward size={20} />
            </div>
          </section>
          <section
            className="mb-32 flex flex-col items-start justify-center gap-2"
            id="projects"
          >
            <div className="group/parent flex flex-col items-center justify-center gap-2 transition-all">
              <div className="group/proj flex gap-4 rounded-lg p-4 opacity-100 transition-all hover:cursor-pointer hover:bg-slate-800/50 hover:!opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group-hover/parent:opacity-50">
                <div className="relative mt-1 h-1/3 w-full flex-1 overflow-hidden rounded border-2 border-slate-700 group-hover/proj:border-slate-400">
                  <Image
                    src={"/projects/notes1.jpg"}
                    alt="personal notes"
                    objectFit="cover"
                    fill
                  />
                </div>
                <div className="flex flex-[3] flex-col gap-2">
                  <h2 className="font-semibold text-slate-200 transition-colors group-hover/proj:text-teal-300">
                    Fullstack Developer · Midas Daya Teknologi
                  </h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum facere optio, eum amet beatae placeat nobis id.
                    Neque, asperiores veniam? Fugit odit qui voluptatibus
                    repellendus non dolores rerum autem sequi?
                  </p>
                  <ul className="flex flex-wrap gap-2 ">
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Vue
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Vuetify
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Java
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Springboot
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Vuex
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Git
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group/proj flex gap-4 rounded-lg p-4 opacity-100 transition-all hover:cursor-pointer hover:bg-slate-800/50 hover:!opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group-hover/parent:opacity-50">
                <div className="relative mt-1 h-1/3 w-full flex-1 overflow-hidden rounded border-2 border-slate-700 group-hover/proj:border-slate-400">
                  <Image
                    src={"/projects/music1.jpg"}
                    alt="music player"
                    objectFit="cover"
                    fill
                  />
                </div>
                <div className="flex flex-[3] flex-col gap-2">
                  <h2 className="font-semibold text-slate-200 transition-colors group-hover/proj:text-teal-300">
                    Frontend Developer · Sagara Technology
                  </h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum facere optio, eum amet beatae placeat nobis id.
                    Neque, asperiores veniam? Fugit odit qui voluptatibus
                    repellendus non dolores rerum autem sequi?
                  </p>
                  <ul className="flex flex-wrap gap-2 ">
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      React
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      MUI
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      React Hook Form
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      NextJS
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Styled Component
                    </li>
                    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300">
                      Figma
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 inline-flex w-fit cursor-pointer items-center justify-start gap-2 px-4 font-semibold text-slate-200 transition-colors hover:text-teal-300">
              View Full Project Archive <MdArrowOutward size={20} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
