import { useEffect, useState } from "react";
import useWindowPosition from "~/utils/useWindowPosition";

const Navigation = () => {
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
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <a href="#about" className="group flex items-center py-3">
            <span
              className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:h-[2px] group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:h-[2px] group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${scrollMark === 0 ? "h-[2px] w-16 bg-slate-200" : "h-px w-8 bg-slate-600"}`}
            ></span>
            <span
              className={`text-sm font-semibold uppercase tracking-wider group-hover:text-slate-200 group-focus-visible:text-slate-200 ${scrollMark === 0 ? "text-slate-200" : "text-slate-600"}`}
            >
              about
            </span>
          </a>
        </li>
        <li>
          <a href="#experience" className="group flex items-center py-3">
            <span
              className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:h-[2px] group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:h-[2px] group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${scrollMark === 1 ? "h-[2px] w-16 bg-slate-200" : "h-px w-8 bg-slate-600"}`}
            ></span>
            <span
              className={`text-sm font-semibold uppercase tracking-wider group-hover:text-slate-200 group-focus-visible:text-slate-200 ${scrollMark === 1 ? "text-slate-200" : "text-slate-600"}`}
            >
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
              className={`text-sm font-semibold uppercase tracking-wider group-hover:text-slate-200 group-focus-visible:text-slate-200 ${scrollMark === 2 ? "text-slate-200" : "text-slate-600"}`}
            >
              projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
