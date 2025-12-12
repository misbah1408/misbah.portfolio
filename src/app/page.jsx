"use client";

export const dynamic = "force-static"; // enables static SEO-friendly build

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/hero/Hero";
import dynamicSSR from "next/dynamic";

import "./globals.scss";
import { useEffect, useState } from "react";
import LazyLoad from "../components/LazyLoad";

const Cursor = dynamicSSR(() => import("../components/Cursor/Cursor"), {
  ssr: false,
});
const Parallax = dynamicSSR(() => import("../components/Parallax/Parallax"), {
  ssr: false,
});
const Services = dynamicSSR(() => import("../components/services/Services"));
const Project = dynamicSSR(() => import("../components/Projects/Project"));
const Technology = dynamicSSR(() => import("../components/Tech/Technology"));
const Contact = dynamicSSR(() => import("../components/Contact/Contact"));

export default function Home() {
  const [activateHeavy, setActivateHeavy] = useState(false);
  useEffect(() => {
    import("./styles.lazy.scss");
  }, []);

  useEffect(() => {
    const handler = () => setActivateHeavy(true);
    window.addEventListener("scroll", handler, { once: true });
  }, []);
  return (
    <>
      <Cursor />
      <section id="Home" aria-label="Home section">
        <NavBar />
        <Hero />
      </section>

      <section id="Services">
        <LazyLoad>
          {activateHeavy && <Parallax type="Services" />}
        </LazyLoad>
      </section>

      <section>
        <LazyLoad>
          <Services />
        </LazyLoad>
      </section>

      <section id="Projects" aria-label="Projects showcase">
        <LazyLoad>
          {activateHeavy && <Parallax type="Projects" />}
        </LazyLoad>
      </section>

      <LazyLoad>
        <Project />
      </LazyLoad>

      <section id="Tools">
        <LazyLoad>
          {activateHeavy && <Technology />}
        </LazyLoad>
      </section>

      <section id="Contact">
        <LazyLoad>
          {activateHeavy && <Contact />}
        </LazyLoad>
      </section>
    </>
  );
}
