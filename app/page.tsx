"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "AutismoAI",
    category: "Assistive AI / Product Systems",
    year: "2024",
    summary:
      "Patent-backed assistive system designed around AI, wearable computing, real-time support, and product-level thinking.",
    description:
      "AutismoAI is a high-conviction assistive technology build aimed at supporting individuals with autism through intelligent guidance, wearable-oriented system design, adaptive interaction logic, and real-time support mechanisms. It combines software architecture, product thinking, CAD prototyping, and a serious innovation layer backed by intellectual property.",
    bullets: [
      "Defined the product direction and overall assistive-tech system vision",
      "Worked on software-side architecture thinking around Flutter and Firebase",
      "Designed and iterated hardware enclosure concepts for wearable use cases",
      "Built a concept strong enough to support a formal German patent filing",
    ],
    images: [
      { src: "/autismo1.png", fit: "cover" },
      { src: "/autismo2.png", fit: "contain" },
      { src: "/autismo3.png", fit: "contain" },
      { src: "/autismo4.png", fit: "contain" },
    ],
  },
  {
    title: "FRC Robotics",
    category: "Systems / Competition Engineering",
    year: "2021–2025",
    summary:
      "Built and operated competition robots under real engineering constraints, pressure, and match-day execution.",
    description:
      "FIRST Robotics Competition gave me exposure to actual systems work: robots that had to function, deadlines that were non-negotiable, and environments where technical execution, iteration, and troubleshooting directly affected performance. It built real engineering discipline rather than just classroom familiarity.",
    bullets: [
      "Worked around real robot systems in fast-moving competitive engineering settings",
      "Built exposure to mechanical systems, electronics, and live troubleshooting",
      "Contributed to robot operation, iteration, and competition execution",
      "Developed engineering composure through deadlines, rapid fixes, and pressure",
    ],
    images: [
      { src: "/frc1.png", fit: "cover" },
      { src: "/frc2.png", fit: "cover" },
      { src: "/frc3.png", fit: "cover" },
      { src: "/frc4.png", fit: "cover" },
    ],
  },
  {
    title: "BMC Robotics Initiative",
    category: "Impact / Technical Outreach",
    year: "2024",
    summary:
      "Delivered structured robotics education across a large municipal network, translating technical systems into accessible learning at scale.",
    description:
      "The BMC Robotics Initiative was technical outreach at real scale. Through institutional collaboration, official sessions, and structured content delivery, this work brought robotics education to thousands of students across a major municipal school ecosystem. It proved I could communicate technical ideas beyond just building them.",
    bullets: [
      "Helped deliver structured robotics education in institutional settings",
      "Presented technical ideas in a way that scaled across large student audiences",
      "Contributed to outreach impacting 15,000+ students across 200+ schools",
      "Built strong experience in technical communication and public-facing delivery",
    ],
    images: [
      { src: "/bmc4.png", fit: "contain" },
      { src: "/bmc1.png", fit: "cover" },
      { src: "/bmc2.png", fit: "cover" },
      { src: "/bmc3.png", fit: "cover" },
    ],
  },
];

const proofItems = [
  {
    title: "German Patent",
    image: "/germanpatent.png",
    fit: "contain",
    text: "Formal intellectual property backing for AutismoAI, turning the concept into a much stronger innovation signal.",
  },
  {
    title: "Internship Certificate",
    image: "/health1.png",
    fit: "contain",
    text: "Verification of MyHealthVault internship work at Manorama Infosolutions in a real healthcare technology environment.",
  },
  {
  title: "Government Recognition — BMC Robotics Session",
  description:
    "Official acknowledgment from Brihanmumbai Municipal Corporation (Education Department) for delivering a large-scale robotics session impacting students across multiple schools.",
  image: "thankyouletter.png",
}
];

const stats = [
  { value: "15,000+", label: "students reached" },
  { value: "200+", label: "schools impacted" },
  { value: "4+", label: "years in robotics" },
  { value: "1", label: "German patent" },
];

function ProjectShowcase({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="grid gap-10 border-t border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-sm text-white/40">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="mt-5 text-4xl font-semibold leading-[1] md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 text-xl leading-9 text-white/80">
            {project.summary}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            What I did
          </p>

          <div className="mt-5 space-y-3">
            {project.bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/75 transition hover:bg-white/[0.06]"
              >
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="flex h-[340px] items-center justify-center bg-black/30 md:h-[560px]">
            <motion.img
              key={activeImage}
              src={project.images[activeImage].src}
              alt={project.title}
              initial={{ opacity: 0.4, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`h-full w-full ${
                project.images[activeImage].fit === "contain"
                  ? "object-contain p-6"
                  : "object-cover"
              }`}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === activeImage ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActiveImage(i)}
              className={`overflow-hidden rounded-xl border transition ${
                activeImage === i
                  ? "border-white bg-white/10"
                  : "border-white/10"
              }`}
            >
              <div className="flex h-20 items-center justify-center bg-black/30">
                <img
                  src={img.src}
                  alt=""
                  className={`h-full w-full ${
                    img.fit === "contain"
                      ? "object-contain p-2"
                      : "object-cover"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_20%),linear-gradient(to_bottom,#050505,#090909)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-sm uppercase tracking-[0.25em] text-white/70">
            Aryan Warke
          </div>
          <nav className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#proof" className="transition hover:text-white">
              Proof
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.28em] text-white/45"
            >
              Computer Science @ UC Irvine
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-tight md:text-8xl xl:text-[8.5rem]"
            >
              I build
              <span className="block text-white/55">serious systems</span>
              <span className="block">with range.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/65"
            >
              Patent-backed assistive tech. Competition robotics. Large-scale
              technical outreach. Product-minded software work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
              <img
                src="/me.png"
                alt="Aryan Warke"
                className="h-[520px] w-full rounded-[1.4rem] object-cover object-top md:h-[700px]"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Selected Work
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Projects that carry actual signal.
          </h2>
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              About
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              More than a student portfolio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              I’m interested in work that is difficult, useful, and impossible
              to fake. That usually means systems with real constraints,
              products with real intent, and technical work that can survive
              actual scrutiny.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Positioning
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Engineering depth plus real-world range.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              My work sits at the intersection of software, robotics, product
              thinking, technical communication, and innovation. The point is
              not to look busy. The point is to look undeniable.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">
          Proof
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Validation matters.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {proofItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="flex h-[420px] items-center justify-center bg-black/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full ${
                    item.fit === "contain"
                      ? "object-contain p-5"
                      : "object-cover"
                  }`}
                />
              </div>
              <div className="border-t border-white/10 p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/60">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 md:p-14">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Let’s build something serious.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Open to internships, technical opportunities, and ambitious work
            where initiative, depth, and range actually matter.
          </p>
          <p className="mt-8 text-2xl font-medium text-white">
            aryan.warke33@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}