import Link from "next/link";
import { OsProVisual, RahatVisual, SchemaVisual } from "@/components/project-visuals";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects, skills } from "@/data/projects";

const profiles = [
  { label: "GitHub", value: "Project repositories and build history", href: "https://github.com/Vivek-ray-05" },
  { label: "LeetCode", value: "Java-first problem solving practice", href: "#" },
  { label: "Resume", value: "Available as the source of truth gets finalized", href: "#" },
];

const milestones = [
  "Built RAHAT end-to-end around real civic data, approvals, routing, and auditability.",
  "Created OS-PRO to turn operating-system algorithms into interactive learning surfaces.",
  "Polishing SchemaLenz as a database-systems project with normalization and query-planning depth.",
];

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "rahat") return <RahatVisual />;
  if (slug === "os-pro") return <OsProVisual />;
  return <SchemaVisual />;
}

export default function Home() {
  const [rahat, osPro, schemaLenz] = projects;

  return (
    <main className="paper-noise min-h-screen overflow-hidden bg-ivory text-ink dark:bg-ink dark:text-ivory">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/82 backdrop-blur-xl dark:border-ivory/10 dark:bg-ink/82">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="text-base font-black uppercase tracking-[0.16em]">
            Vivek Ray.
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a className="nav-link" href="https://github.com/Vivek-ray-05" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[88vh] max-w-7xl content-between px-5 py-12 sm:px-8 lg:px-12">
        <div className="organic-field" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="meta-label mb-8">Bengaluru, India / CSE undergraduate</p>
            <h1 className="display-title max-w-5xl text-[5.2rem] font-bold uppercase leading-[0.78] sm:text-[8.6rem] lg:text-[11.4rem]">
              I learn by building things.
            </h1>
          </div>
          <div className="max-w-md pb-4">
            <p className="text-xl leading-8 text-ink/72 dark:text-ivory/74">
              CSE undergraduate building software, exploring AI, and figuring things out one project at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <a className="link-button" href="#work">
                Explore my work
              </a>
              <a className="link-button" href="#about">
                About
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-16 grid gap-4 border-t border-ink/15 pt-5 text-sm text-ink/62 dark:border-ivory/15 dark:text-ivory/62 sm:grid-cols-3">
          <span>Software systems</span>
          <span>Interactive learning tools</span>
          <span>Database and AI experiments</span>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="meta-label">Selected work</p>
            <h2 className="display-title mt-3 text-5xl font-semibold uppercase sm:text-7xl">Substance first.</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink/65 dark:text-ivory/65 md:block">
            Three projects, three different strengths: systems engineering, interactive fundamentals, and database depth.
          </p>
        </div>

        <article className="section-rule grid gap-8 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="space-y-6">
            <p className="meta-label">
              {rahat.index} / {rahat.eyebrow}
            </p>
            <h3 className="display-title text-7xl font-bold uppercase leading-[0.85] sm:text-8xl">{rahat.name}</h3>
            <p className="text-4xl font-semibold leading-none text-green dark:text-sage">{rahat.headline}</p>
            <p className="max-w-xl text-lg leading-8 text-ink/72 dark:text-ivory/72">{rahat.summary}</p>
            <div className="flex flex-wrap gap-2">
              {rahat.stack.slice(0, 4).map((item) => (
                <span className="tech-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-5">
              <Link className="link-button" href={rahat.links.caseStudy}>
                View case study
              </Link>
              <a className="link-button" href={rahat.links.demo}>
                Live demo
              </a>
              <a className="link-button" href={rahat.links.github}>
                GitHub
              </a>
            </div>
          </div>
          <ProjectVisual slug={rahat.slug} />
        </article>

        <article className="section-rule grid gap-8 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <ProjectVisual slug={osPro.slug} />
          <div className="space-y-6 lg:pl-8">
            <p className="meta-label">
              {osPro.index} / {osPro.eyebrow}
            </p>
            <h3 className="display-title text-6xl font-bold uppercase leading-[0.88] sm:text-7xl">{osPro.name}</h3>
            <p className="text-3xl font-semibold leading-tight text-green dark:text-sage">{osPro.headline}</p>
            <p className="max-w-xl text-lg leading-8 text-ink/72 dark:text-ivory/72">{osPro.summary}</p>
            <Link className="link-button" href={osPro.links.caseStudy}>
              View case study
            </Link>
          </div>
        </article>

        <article className="section-rule grid gap-8 py-14 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="meta-label">
                {schemaLenz.index} / {schemaLenz.eyebrow}
              </p>
              <span className="status-pill">{schemaLenz.status}</span>
            </div>
            <h3 className="display-title text-6xl font-bold uppercase leading-[0.88] sm:text-7xl">{schemaLenz.name}</h3>
            <p className="text-3xl font-semibold leading-tight text-green dark:text-sage">{schemaLenz.headline}</p>
            <p className="max-w-xl text-lg leading-8 text-ink/72 dark:text-ivory/72">{schemaLenz.summary}</p>
            <Link className="link-button" href={schemaLenz.links.caseStudy}>
              View case study
            </Link>
          </div>
          <ProjectVisual slug={schemaLenz.slug} />
        </article>
      </section>

      <section id="about" className="section-rule mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
        <div>
          <p className="meta-label">About</p>
          <div className="mt-8 aspect-[4/5] max-w-sm border border-ink/15 bg-paper p-4 dark:border-ivory/15">
            <div className="grid h-full place-items-center bg-sage/45 text-center font-mono text-xs uppercase tracking-[0.16em] text-ink/60 dark:text-ivory/60">
              Photo space
            </div>
          </div>
        </div>
        <div className="max-w-3xl">
          <h2 className="display-title text-5xl font-semibold uppercase leading-none sm:text-7xl">
            I tend to understand things better once I try building them.
          </h2>
          <p className="mt-8 text-xl leading-9 text-ink/74 dark:text-ivory/72">
            I am a B.Tech Computer Science undergraduate using projects to learn systems, algorithms, software engineering, AI,
            and product thinking. The goal is not to look more senior than I am. The goal is to show the work honestly and make
            the technical decisions visible.
          </p>
        </div>
      </section>

      <section className="section-rule mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
        <div>
          <p className="meta-label">Milestones</p>
          <h2 className="display-title mt-3 text-5xl font-semibold uppercase">Currently building.</h2>
        </div>
        <div className="space-y-7">
          {milestones.map((item, index) => (
            <div className="grid gap-4 border-t border-ink/15 pt-6 dark:border-ivory/15 sm:grid-cols-[4rem_1fr]" key={item}>
              <span className="font-mono text-sm text-vermilion">0{index + 1}</span>
              <p className="text-xl leading-8 text-ink/75 dark:text-ivory/74">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-rule mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="meta-label">Problem solving / profiles</p>
          <div className="mt-8 space-y-5">
            {profiles.map((profile) => (
              <a href={profile.href} key={profile.label} className="group block border-t border-ink/15 py-5 dark:border-ivory/15">
                <span className="display-title text-4xl font-semibold uppercase group-hover:text-vermilion">{profile.label}</span>
                <p className="mt-2 text-ink/65 dark:text-ivory/65">{profile.value}</p>
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="meta-label">Skills</p>
          <div className="mt-8 grid gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div className="grid gap-3 border-t border-ink/15 pt-5 dark:border-ivory/15 sm:grid-cols-[10rem_1fr]" key={category}>
                <h3 className="font-semibold">{category}</h3>
                <p className="leading-8 text-ink/70 dark:text-ivory/70">{items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="border-y border-ink/15 py-16 dark:border-ivory/15">
          <p className="meta-label">Contact</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="display-title text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">
              Have something interesting in mind?
            </h2>
            <div>
              <p className="text-xl leading-8 text-ink/72 dark:text-ivory/72">
                Open to SWE internships, relevant AI/ML opportunities, thoughtful freelance work, and research collaboration where the fit is real.
              </p>
              <div className="mt-8 flex flex-wrap gap-5">
                <a className="link-button" href="mailto:realvivek100@gmail.com">
                  Email
                </a>
                <a className="link-button" href="https://github.com/Vivek-ray-05" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="link-button" href="#">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 text-center text-sm text-ink/55 dark:text-ivory/55">
        Built by Vivek Ray. Learning in public, one project at a time.
      </footer>
    </main>
  );
}
