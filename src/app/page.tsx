"use client";

import MouseHover from "~/components/MouseHover";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

export default function HomePage() {
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
          <div className="mb-40 flex flex-col gap-3 px-4" id="about">
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
          </div>
          <div
            className="group/parent flex flex-col items-center justify-center gap-2 transition-all"
            id="experience"
          >
            <div className="group/exp flex gap-4 rounded-lg p-4 opacity-100 transition-all hover:cursor-pointer hover:bg-slate-800 hover:!opacity-100 group-hover/parent:opacity-50">
              <p className="mt-1 flex-1 text-sm">2023 — Present</p>
              <div className="flex flex-[3] flex-col gap-2">
                <h2 className="font-semibold text-slate-200 transition-colors group-hover/exp:text-teal-300">
                  Fullstack Developer · Midas Daya Teknologi
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum facere optio, eum amet beatae placeat nobis id. Neque,
                  asperiores veniam? Fugit odit qui voluptatibus repellendus non
                  dolores rerum autem sequi?
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
            <div className="group/exp flex gap-4 rounded-lg p-4 opacity-100 transition-all hover:cursor-pointer hover:bg-slate-800 hover:!opacity-100 group-hover/parent:opacity-50">
              <p className="mt-1 flex-1 text-sm">2022 — 2023</p>
              <div className="flex flex-[3] flex-col gap-2">
                <h2 className="font-semibold text-slate-200 transition-colors group-hover:text-teal-300">
                  Frontend Developer · Sagara Technology
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum facere optio, eum amet beatae placeat nobis id. Neque,
                  asperiores veniam? Fugit odit qui voluptatibus repellendus non
                  dolores rerum autem sequi?
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
          <div className="inline-flex w-fit cursor-pointer items-center justify-start gap-2 px-4 font-semibold text-slate-200 transition-colors hover:text-teal-300">
            View Full Resume <MdArrowOutward size={20} />
          </div>
          <div className="flex flex-col" id="projects"></div>
        </main>
      </div>
    </div>
  );
}
