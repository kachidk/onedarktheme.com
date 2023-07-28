"use client";

import { Fragment, useState } from "react";
import _ports from "@/data/ports";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [animationParent] = useAutoAnimate();

  const ports = _ports.filter(
    (el) =>
      el.keywords.some((xy) => xy.toLowerCase().includes(search.toLowerCase())) ||
      el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-24 bg-[#272c33]">
        <img src="/assets/img/wallpaper.png" className="max-w-md rounded-2xl" alt="hero" />
        <div>
          <div className="mt-4 text-5xl font-bold text-center">A Collection of Muted Colors</div>
          <div className="mt-2 text-center">
            Inspired by the&nbsp;
            <a
              href="https://github.com/atom/atom/tree/master/packages/one-dark-syntax"
              className="underline"
            >
              One Dark theme
            </a>
            &nbsp;for the Atom text editor.
          </div>
        </div>

        <div className="flex flex-wrap justify-center max-w-2xl gap-4 mx-auto mt-14">
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-crust rounded-xl"></div>
            <kbd className="kbd kbd-sm">
              <span>Crust</span>
              <span className="ml-2">#1E2227</span>
            </kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-base rounded-xl"></div>
            <kbd className="kbd kbd-sm">
              <span>Base</span>
              <span className="ml-2">#21252B</span>
            </kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-mantle rounded-xl"></div>
            <kbd className="kbd kbd-sm">
              <span>Mantle</span>
              <span className="ml-2">#323842</span>
            </kbd>
          </div>
          <div className="w-full"></div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-red rounded-xl"></div>
            <kbd className="kbd kbd-sm">#E06C75</kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-green rounded-xl"></div>
            <kbd className="kbd kbd-sm">#98C379</kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-yellow rounded-xl"></div>
            <kbd className="kbd kbd-sm">#E5C07B</kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-blue rounded-xl"></div>
            <kbd className="kbd kbd-sm">#61AFEF</kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-purple rounded-xl"></div>
            <kbd className="kbd kbd-sm">#C678DD</kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-fountainblue rounded-xl"></div>
            <kbd className="kbd kbd-sm">#56B6C2</kbd>
          </div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-gray rounded-xl"></div>
            <kbd className="kbd kbd-sm">#ABB2BF</kbd>
          </div>
          <div className="w-full"></div>
          <div className="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-onedark-text rounded-xl"></div>
            <kbd className="kbd kbd-sm">
              <span>Text</span>
              <span className="ml-2">#F6F7F9</span>
            </kbd>
          </div>
        </div>
      </div>

      <section className="max-w-5xl min-h-screen p-4 mx-auto mt-20">
        <div className="mx-auto text-3xl font-bold w-fit">Ports</div>
        <div className="flex flex-col items-center gap-4 mx-auto mt-2 md:flex-row w-fit">
          <div className="text-lg whitespace-nowrap w-fit">Showing {ports.length} app(s)</div>
          <input
            onInput={(e) => setSearch(e.currentTarget.value)}
            type="text"
            placeholder="Search..."
            className="input input-bordered"
          />
        </div>
        <div
          ref={animationParent}
          className="grid gap-4 mt-12 gap-y-8 sm:grid-cols-2 md:grid-cols-3"
        >
          {ports.map((el, i) => (
            <a
              key={i}
              href={el.link}
              target="_blank"
              className="duration-200 group hover:transform hover:-translate-x-2 hover:-translate-y-2 hover:scale-x-105"
            >
              <img src={el.image} className="w-48 h-48 mx-auto rounded-full" alt={el.name} />
              <div className="text-4xl font-bold text-center duration-200 group-odd:group-hover:text-onedark-red group-even:group-hover:text-onedark-green">
                {el.name}
              </div>
            </a>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
