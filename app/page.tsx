"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type ImageItem = {
  src: string;
  fit: "cover" | "contain";
};

type ProjectItem = {
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  bullets: string[];
  images: ImageItem[];
};

type ProofItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  fit: "cover" | "contain";
  badge: string;
};

const featuredProjects: ProjectItem[] = [
  {
    title: "AutismoAI",
    category: "Assistive AI / Wearable Systems",
    year: "2024",
    summary:
      "AI-powered wearable system designed to deliver real-time social guidance, adaptive learning, and sensory-aware support for individuals with ASD.",
    description:
      "AutismoAI is a product-level assistive technology system combining wearable hardware, AI, adaptive learning, and a caregiver companion app. The concept is built around real-time guidance during social interactions, sensory modulation, personalized feedback, and strength-based learning modules. It brings together software architecture, AI systems thinking, hardware prototyping, and deployment planning into one coherent platform.",
    bullets: [
      "Designed the end-to-end concept across wearable hardware, AI logic, and companion app workflows",
      "Built the system concept around adaptive learning, real-time prompts, and sensory-aware interaction design",
      "Integrated NLP, computer vision, and real-time feedback as core technical components",
      "Structured the project like a real product: prototype → testing → iteration → pilot deployment",
      "Developed a concept strong enough to be backed by a German patent",
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
    category: "Systems Engineering / Robotics",
    year: "2021–2025",
    summary:
      "Multi-year robotics experience across competitive systems, fabrication, troubleshooting, and engineering under pressure.",
    description:
      "Through FIRST Robotics Competition, I worked on systems that had to function under real constraints, with real deadlines and visible consequences when things failed. The work combined design, fabrication, iteration, match execution, and team-level responsibility. It also built my ability to troubleshoot quickly, operate under pressure, and think about systems as integrated machines rather than isolated parts.",
    bullets: [
      "Worked around real competition robot systems in fast-moving engineering environments",
      "Built exposure to fabrication, mechanical systems, electronics, and live troubleshooting",
      "Contributed to robot iteration, technical execution, and competition performance",
      "Developed engineering composure through deadlines, pressure, and rapid problem solving",
      "Combined technical work with visibility, teamwork, and responsibility in high-stakes settings",
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
    category: "Technical Outreach / Public Impact",
    year: "2024",
    summary:
      "Large-scale robotics outreach delivered through official institutional collaboration and structured technical education.",
    description:
      "The BMC Robotics Initiative was technical communication and impact at scale. Through structured sessions and official collaboration, the initiative brought robotics education to thousands of students across a large municipal school network. It proved that I could not only build technical systems, but also explain them, scale them, and make them useful in public-facing environments.",
    bullets: [
      "Delivered technical education in structured outreach settings",
      "Helped translate robotics concepts into accessible learning experiences",
      "Contributed to outreach reaching 15,000+ students across 200+ schools",
      "Built strong experience in technical communication and educational impact",
      "Earned formal recognition from the BMC Education Department",
    ],
    images: [
      { src: "/bmc4.png", fit: "contain" },
      { src: "/bmc1.png", fit: "cover" },
      { src: "/bmc2.png", fit: "cover" },
      { src: "/bmc3.png", fit: "cover" },
    ],
  },
];

const proofItems: ProofItem[] = [
  {
    title: "German Patent",
    subtitle: "Formal IP backing for AutismoAI",
    description:
      "This is not just a concept slide. The project is backed by formal intellectual property, which materially increases its credibility as a serious innovation effort.",
    image: "/germanpatent.png",
    fit: "contain",
    badge: "Protected Innovation",
  },
  {
    title: "Internship Certificate",
    subtitle: "Manorama Infosolutions",
    description:
      "Documented proof of healthcare-oriented internship work, reinforcing that my portfolio is built on real execution in real environments, not only self-directed projects.",
    image: "/health1.png",
    fit: "contain",
    badge: "Professional Experience",
  },
  {
    title: "Government Recognition",
    subtitle: "BMC Education Department",
    description:
      "Official acknowledgment for delivering a robotics session to students across the municipal education network. This adds institutional validation, public impact, and proof of technical communication at scale.",
    image: "/bmc-letter.png",
    fit: "contain",
    badge: "Official Recognition",
  },
];

const stats = [
  { value: "15,000+", label: "students reached" },
  { value: "200+", label: "schools impacted" },
  { value: "4+", label: "years in robotics" },
  { value: "1", label: "German patent" },
];

function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute h-8 w-8 rounded-full bg-white/70 blur-[2px]"
        style={{
          transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
        }}
      />
      <div
        className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
        style={{
          transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        }}
      />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <p className="text-xs uppercase tracking-[0.28em] text-white/40">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">{description}</p>
      ) : null}
    </div>
  );
}

function ProjectShowcase({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="grid gap-14 border-t border-white/10 py-20 lg:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-6 text-sm text-white/40">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 text-xl leading-9 text-white/80">{project.summary}</p>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">What I did</p>

          <div className="mt-5 space-y-3">
            {project.bullets.map((bullet) => (
              <motion.div
                key={bullet}
                whileHover={{ x: 4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/75 transition hover:bg-white/[0.06]"
              >
                {bullet}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <motion.div
          whileHover={{ scale: 1.015 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(255,255,255,0.03)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="flex h-[360px] items-center justify-center bg-black/30 md:h-[580px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[activeImage].src}
                src={project.images[activeImage].src}
                alt={project.title}
                initial={{ opacity: 0.35, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.25 }}
                transition={{ duration: 0.45 }}
                className={`h-full w-full ${
                  project.images[activeImage].fit === "contain"
                    ? "object-contain p-6"
                    : "object-cover"
                }`}
              />
            </AnimatePresence>
          </div>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === activeImage ? "bg-white" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActiveImage(i)}
              className={`overflow-hidden rounded-2xl border transition ${
                activeImage === i
                  ? "border-white bg-white/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex h-20 items-center justify-center bg-black/30">
                <img
                  src={img.src}
                  alt={`${project.title} ${i + 1}`}
                  className={`h-full w-full ${
                    img.fit === "contain" ? "object-contain p-2" : "object-cover"
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

function ProofModal({
  item,
  onClose,
}: {
  item: ProofItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_0_120px_rgba(255,255,255,0.06)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">Proof</p>
                <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/55">{item.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="flex min-h-[420px] items-center justify-center bg-white p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`max-h-[72vh] w-full rounded-2xl ${
                    item.fit === "contain" ? "object-contain" : "object-cover"
                  }`}
                />
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 p-8 lg:border-l lg:border-t-0">
                <div>
                  <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                    {item.badge}
                  </div>

                  <h4 className="mt-6 text-3xl font-semibold leading-tight">
                    Evidence that the work was real.
                  </h4>

                  <p className="mt-5 text-base leading-8 text-white/65">
                    {item.description}
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                      Why this matters
                    </p>
                    <p className="mt-3 text-white/70">
                      Strong portfolios are not just made of claims. They are made of proof.
                      This document strengthens the credibility of the work by showing third-party
                      validation, institutional recognition, or formal documentation.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-sm text-white/40">
                  Press <span className="text-white/70">Esc</span> to close
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Home() {
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -90]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.97]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <CursorGlow />

      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.08),transparent_24%),linear-gradient(to_bottom,#050505,#090909)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-sm uppercase tracking-[0.25em] text-white/70">Aryan Warke</div>
          <nav className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
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

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div style={{ y: heroY }}>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Computer Science @ UC Irvine
            </p>

            <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-tight md:text-8xl xl:text-[8.8rem]">
              I build
              <span className="block text-white/50">serious systems</span>
              <span className="block">with range.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
              Patent-backed assistive tech. Competition robotics. Large-scale technical
              outreach. Product-minded systems built for the real world, not just GitHub.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                View work
              </a>
              <a
                href="#proof"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View proof
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.06 }}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_50px_rgba(255,255,255,0.02)]"
                >
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: heroY, scale: heroScale }}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.12),transparent_30%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
              <img
                src="/me.png"
                alt="Aryan Warke"
                className="h-[520px] w-full rounded-[1.4rem] object-cover object-top md:h-[700px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "AI + Software Systems",
              text: "Adaptive learning, feedback loops, interaction logic, and product-minded application architecture.",
            },
            {
              title: "Hardware + Robotics",
              text: "Wearable device thinking, prototyping, robotics systems exposure, and engineering execution under constraints.",
            },
            {
              title: "Scale + Impact",
              text: "Institutional outreach, public-facing technical delivery, and work that extends beyond solo projects.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_0_40px_rgba(255,255,255,0.02)]"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that carry actual signal."
          description="Not classroom filler. Real systems thinking, visible execution, and proof-heavy work across AI, robotics, and technical outreach."
        />

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectShowcase key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Proof"
          title="Documents, recognition, and hard evidence."
          description="Click any card to open the full proof view."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {proofItems.map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProof(item)}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left shadow-[0_0_70px_rgba(255,255,255,0.03)] transition hover:border-white/20"
            >
              <div className="relative">
                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-5">
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                    {item.badge}
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur-md">
                    Open
                  </div>
                </div>

                <div className="flex h-[420px] items-center justify-center bg-white p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`max-h-full w-full rounded-2xl transition duration-500 group-hover:scale-[1.015] ${
                      item.fit === "contain" ? "object-contain" : "object-cover"
                    }`}
                  />
                </div>
              </div>

              <div className="border-t border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                  {item.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/60">{item.description}</p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/75">
                  View full proof <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 pt-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 shadow-[0_0_100px_rgba(255,255,255,0.03)] md:p-14">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Let’s build something serious.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
            Open to internships, technical opportunities, product-heavy work, and ambitious teams where
            execution actually matters.
          </p>
          <p className="mt-8 text-2xl font-medium text-white">aryan.warke33@gmail.com</p>
          <p className="mt-8 text-sm text-white/35">© {year} Aryan Warke</p>
        </div>
      </section>

      <ProofModal item={selectedProof} onClose={() => setSelectedProof(null)} />
    </main>
  );
}