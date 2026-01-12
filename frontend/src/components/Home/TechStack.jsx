import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IconCloud } from "@/components/ui/icon-cloud";
import AuroraText from "../ui/aurora-text";

// icons
import reactimg from "../../assets/icons/react.png";
import nextjs from "../../assets/icons/next-js.png";
import aws from "../../assets/icons/aws.png";
import docker from "../../assets/icons/docker.png";
import express from "../../assets/icons/express-wordmark.png";
import github from "../../assets/icons/github.png";
import javascript from "../../assets/icons/javascript.png";
import mongodb from "../../assets/icons/mongodb-wordmark.png";
import mysql from "../../assets/icons/mysql.png";
import n8n from "../../assets/icons/n8n.png";
import nodejs from "../../assets/icons/nodejs.png";
import tailwindcss from "../../assets/icons/tailwindcss.png";
import typescript from "../../assets/icons/typescript.png";
import supabase from "../../assets/icons/supabase.png";
import firebase from "../../assets/icons/firebase.png";
import git from "../../assets/icons/git.png";
import postgresql from "../../assets/icons/postgresql.png";
import redis from "../../assets/icons/redis.png"

gsap.registerPlugin(ScrollTrigger);

/* ICON IMAGES */
const images = [
  reactimg,
  nextjs,
  nodejs,
  express,
  mongodb,
  mysql,
  postgresql,
  aws,
  tailwindcss,
  javascript,
  typescript,
  docker,
  github,
  n8n,
  supabase,
  firebase,
  git,
  redis
];

/* TECH LABELS */
const techList = [
  { name: "React", url: "https://react.dev" },
  { name: "Next.js", url: "https://nextjs.org/docs" },
  { name: "Node.js", url: "https://nodejs.org/en/docs" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
  { name: "MySQL", url: "https://dev.mysql.com/doc/" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/docs/" },
  { name: "AWS", url: "https://docs.aws.amazon.com/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
  { name: "Docker", url: "https://docs.docker.com/" },
  { name: "GitHub", url: "https://docs.github.com/" },
  { name: "n8n", url: "https://docs.n8n.io/" },
  { name: "Supabase", url: "https://supabase.com/docs" },
  { name: "Firebase", url: "https://firebase.google.com/docs" },
  { name: "Git", url: "https://git-scm.com/doc" },
  { name: "Redis", url: "https://redis.io/docs/" },
  { name: "Socket.IO", url: "https://socket.io/docs/v4/" },
];


export default function TechStack() {
  const sectionRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cloudRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.to(cloudRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="section-title mb-4">
            Technologies We Work With
          </h2>

          {/* TECH LABELS */}
          <div className="flex flex-wrap gap-3 mb-8 max-w-xl">
  {techList.map((tech, i) => (
    <a
      key={i}
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative
        text-xs md:text-sm
        px-4 py-1.5
        rounded-full
        text-white/90
        bg-white/5
        border border-white/10
        backdrop-blur-sm

        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:scale-[1.05]
        hover:text-white
        hover:border-transparent

        hover:bg-gradient-to-r
        hover:from-blue-400/20
        hover:via-purple-400/20
        hover:to-cyan-400/20

        hover:shadow-[0_0_25px_rgba(120,160,255,0.6)]
      "
    >
      {tech.name}
    </a>
  ))}
</div>


          <p className="section-subtitle max-w-xl">
            We use modern, battle-tested technologies and tools to build
            scalable, secure, and high-performance digital products.
          </p>
        </div>

        {/* RIGHT — ICON CLOUD WITH MAGIC BLOB */}
        <div className="relative flex justify-center items-center">
          <div className="-translate-y-20">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
