import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} case study | Vivek Ray`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ivory text-ink dark:bg-ink dark:text-ivory">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between border-b border-ink/15 pb-5 text-sm dark:border-ivory/15">
          <Link href="/" className="font-semibold">
            Vivek Ray
          </Link>
          <Link href="/#work" className="text-ink/65 hover:text-green dark:text-ivory/65 dark:hover:text-sage">
            Back to work
          </Link>
        </nav>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div className="space-y-4">
            <p className="meta-label">
              {project.index} / {project.eyebrow}
            </p>
            <span className="status-pill">{project.status}</span>
          </div>
          <div>
            <h1 className="display-title max-w-4xl text-6xl leading-[0.95] tracking-[-0.03em] sm:text-8xl lg:text-9xl">
              {project.name}
            </h1>
            <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight text-green dark:text-sage">
              {project.headline}
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/75 dark:text-ivory/72">{project.caseStudy.intro}</p>
          </div>
        </section>

        <section className="border-y border-ink/15 py-8 dark:border-ivory/15">
          <div className="flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-16 lg:grid-cols-3">
          {project.highlights.map((highlight) => (
            <p key={highlight} className="text-xl leading-8 text-ink/80 dark:text-ivory/78">
              {highlight}
            </p>
          ))}
        </section>

        <section className="space-y-12 pb-20">
          {project.caseStudy.sections.map((section) => (
            <article key={section.title} className="grid gap-6 border-t border-ink/15 pt-8 dark:border-ivory/15 lg:grid-cols-[0.45fr_1fr]">
              <h2 className="text-2xl font-semibold tracking-[-0.01em]">{section.title}</h2>
              <p className="max-w-3xl text-lg leading-8 text-ink/75 dark:text-ivory/72">{section.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
