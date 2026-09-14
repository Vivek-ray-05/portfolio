import Link from "next/link";
import Image from "next/image";
import { OsProVisual, RahatVisual, SchemaVisual } from "@/components/project-visuals";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects, skills } from "@/data/projects";

const profiles = [
  { label: "GitHub", value: "Project repositories and build history", href: "https://github.com/Vivek-ray-05" },
  { label: "LeetCode", value: "Java-first problem solving practice", href: "" },
  { label: "Resume", value: "Available as the source of truth gets finalized", href: "" },
];

const milestones = [
  "Built RAHAT end-to-end around real civic data, approvals, routing, and auditability.",
  "Created OS-PRO to turn operating-system algorithms into interactive learning surfaces.",
  "Polishing SchemaLenz as a database-systems project with normalization and query-planning depth.",
];

const learningLoop = ["Build", "Trace", "Explain", "Refine"];

const identityNotes = [
  {
    label: "Software systems",
    value: "I care about how pieces connect: data, APIs, interfaces, decisions, and failure paths.",
  },
  {
    label: "Interactive learning",
    value: "I build tools that make abstract concepts easier to see, test, and reason about.",
  },
  {
    label: "AI with control",
    value: "I like AI where recommendations stay explainable and humans still make the final call.",
  },
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
        <nav className="mx-auto grid max-w-7xl gap-4 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-base font-semibold tracking-[0.02em]">
              Vivek Ray.
            </Link>
            <ThemeToggle />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
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
        </nav>
      </header>

      <section className="hero-section relative mx-auto grid max-w-7xl content-between px-5 sm:px-8 lg:px-12">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="meta-label mb-8">Bengaluru, India / CSE undergraduate</p>
            <h1 className="display-title max-w-4xl text-[4rem] leading-[0.9] tracking-[-0.04em] sm:text-[6.6rem] lg:text-[7.6rem]">
              I learn by <span className="text-green">building things.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-ink/72 dark:text-ivory/74">
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

          <div className="portrait-stage" aria-label="Portrait of Vivek Ray">
            <div className="portrait-halo halo-main" />
            <div className="portrait-halo halo-soft" />
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
            <div className="identity-card card-primary">
              <span>Working note</span>
              <strong>I learn by building things.</strong>
            </div>
            <div className="identity-card card-secondary">
              <span>Process</span>
              <strong>Build first. Understand deeply.</strong>
            </div>
            <Image
              src="/assets/vivek-profile.png"
              alt="Vivek Ray portrait"
              width={1346}
              height={1168}
              priority
              unoptimized
              className="profile-portrait"
            />
          </div>
        </div>
      </section>

      <section className="identity-band mx-auto max-w-7xl px-5 sm:px-8 lg:px-12" aria-label="Professional identity">
        <div className="identity-panel">
          <div className="identity-intro">
            <p className="meta-label">Professional identity</p>
            <h2 className="display-title">
              Building is how I turn concepts into judgment.
            </h2>
          </div>
          <div className="identity-grid">
            {identityNotes.map((note) => (
              <article className="identity-note" key={note.label}>
                <span>{note.label}</span>
                <p>{note.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="work-header">
          <div>
            <p className="meta-label">Selected work</p>
            <h2 className="display-title">Substance first.</h2>
          </div>
          <p>
            Three projects, three different strengths: systems engineering, interactive fundamentals, and database depth.
          </p>
        </div>

        <article className="case-study case-study-featured">
          <div className="case-copy">
            <p className="meta-label">
              {rahat.index} / {rahat.eyebrow}
            </p>
            <h3 className="display-title">{rahat.name}</h3>
            <p className="case-headline">{rahat.headline}</p>
            <p className="case-summary">{rahat.summary}</p>
            <div className="case-stack">
              {rahat.stack.slice(0, 4).map((item) => (
                <span className="tech-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="case-links">
              <Link className="link-button" href={rahat.links.caseStudy}>
                View case study
              </Link>
              <span className="muted-link">Demo link coming soon</span>
              <span className="muted-link">Repo link coming soon</span>
            </div>
          </div>
          <div className="case-visual">
            <ProjectVisual slug={rahat.slug} />
          </div>
        </article>

        <article className="case-study case-study-reverse">
          <div className="case-visual">
            <ProjectVisual slug={osPro.slug} />
          </div>
          <div className="case-copy">
            <p className="meta-label">
              {osPro.index} / {osPro.eyebrow}
            </p>
            <h3 className="display-title">{osPro.name}</h3>
            <p className="case-headline">{osPro.headline}</p>
            <p className="case-summary">{osPro.summary}</p>
            <div className="case-links">
              <Link className="link-button" href={osPro.links.caseStudy}>
                View case study
              </Link>
            </div>
          </div>
        </article>

        <article className="case-study">
          <div className="case-copy">
            <div className="case-meta-row">
              <p className="meta-label">
                {schemaLenz.index} / {schemaLenz.eyebrow}
              </p>
              <span className="status-pill">{schemaLenz.status}</span>
            </div>
            <h3 className="display-title">{schemaLenz.name}</h3>
            <p className="case-headline">{schemaLenz.headline}</p>
            <p className="case-summary">{schemaLenz.summary}</p>
            <div className="case-links">
              <Link className="link-button" href={schemaLenz.links.caseStudy}>
                View case study
              </Link>
            </div>
          </div>
          <div className="case-visual">
            <ProjectVisual slug={schemaLenz.slug} />
          </div>
        </article>
      </section>

      <section id="about" className="about-section mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="about-panel">
        <div className="about-visual-wrap">
          <p className="meta-label">About</p>
          <div className="learning-loop" aria-hidden="true">
            <div className="loop-orbit loop-orbit-one" />
            <div className="loop-orbit loop-orbit-two" />
            <div className="loop-core">
              <span>Current mode</span>
              <strong>Project-led learning</strong>
            </div>
            <div className="loop-steps">
              {learningLoop.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="about-copy">
          <h2 className="display-title">
            I tend to understand things better once I try building them.
          </h2>
          <p>
            I am a B.Tech Computer Science undergraduate using projects to learn systems, algorithms, software engineering, AI,
            and product thinking. The goal is not to look more senior than I am. The goal is to show the work honestly and make
            the technical decisions visible.
          </p>
        </div>
        </div>
      </section>

      <section className="build-section mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="build-panel">
        <div className="build-heading">
          <p className="meta-label">Milestones</p>
          <h2 className="display-title">Currently building.</h2>
        </div>
        <div className="build-list">
          {milestones.map((item, index) => (
            <div className="build-item" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="signals-section mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="signals-panel">
        <div className="profile-column">
          <div>
            <p className="meta-label">Signals</p>
            <h2 className="display-title">Profiles, practice, proof.</h2>
          </div>
          <div className="profile-list">
            {profiles.map((profile) => (
              <a
                href={profile.href || undefined}
                key={profile.label}
                aria-disabled={!profile.href}
                className="profile-link"
              >
                <span>{profile.label}</span>
                <p>{profile.value}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="skills-column">
          <div>
            <p className="meta-label">Skills</p>
            <h2 className="display-title">Stack I can build with.</h2>
          </div>
          <div className="skills-list">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-row" key={category}>
                <h3>{category}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section id="contact" className="contact-section mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="meta-label">Contact</p>
            <h2 className="display-title">Have something interesting in mind?</h2>
            <p>
              Open to SWE internships, relevant AI/ML opportunities, thoughtful freelance work, and research collaboration where
              the fit is real.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-link" href="mailto:realvivek100@gmail.com">
              <span>Email</span>
              <strong>realvivek100@gmail.com</strong>
            </a>
            <a className="contact-link" href="https://github.com/Vivek-ray-05" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>Vivek-ray-05</strong>
            </a>
            <div className="contact-link is-muted" aria-disabled="true">
              <span>LinkedIn</span>
              <strong>Coming soon</strong>
            </div>
          </div>
          <div className="contact-status">
            <span>Bengaluru, India</span>
            <span>Software engineering / AI-ML / systems</span>
            <span>Learning in public</span>
          </div>
        </div>
      </section>

      <footer className="site-footer mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-12">
        <span>Built by Vivek Ray.</span>
        <span>Learning in public, one project at a time.</span>
      </footer>
    </main>
  );
}
