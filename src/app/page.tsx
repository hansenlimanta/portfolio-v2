"use client";

import MouseHover from "~/components/MouseHover";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start bg-slate-900 text-slate-400">
      <MouseHover />
      <div className="mx-auto flex h-full max-w-screen-xl justify-center gap-12 px-6 py-20 md:px-12 lg:px-24">
        <header className="flex flex-1 flex-col justify-between">
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
        <main className="flex-1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus consequuntur enim, provident, voluptate
            reprehenderit, alias quia corrupti aspernatur distinctio laudantium
            placeat libero ratione accusantium expedita quisquam soluta quidem
            dolorum at error ea. Temporibus atque accusamus ducimus corporis
            aliquam dolore! Eaque aperiam sequi omnis autem laudantium ducimus
            totam repudiandae adipisci suscipit.
          </p>
        </main>
      </div>
    </div>
  );
}
