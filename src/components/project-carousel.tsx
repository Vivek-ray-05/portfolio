"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, WheelEvent } from "react";
import { OsProVisual, RahatVisual, SchemaVisual } from "@/components/project-visuals";
import type { Project } from "@/data/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

type CardStyle = CSSProperties & {
  "--card-progress": string;
  "--card-scale": string;
  "--card-opacity": string;
};

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "rahat") return <RahatVisual />;
  if (slug === "os-pro") return <OsProVisual />;
  return <SchemaVisual />;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(() => projects.map((_, index) => index));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentViewport = viewportRef.current;

    if (!currentViewport) {
      return;
    }

    const viewportElement = currentViewport;
    let frame = 0;

    function updateCards(viewport: HTMLDivElement) {
      frame = 0;
      const viewportBox = viewport.getBoundingClientRect();
      const viewportCenter = viewportBox.left + viewportBox.width / 2;
      const nextProgress = cardRefs.current.map((card) => {
        if (!card) {
          return 0;
        }

        const cardBox = card.getBoundingClientRect();
        const cardCenter = cardBox.left + cardBox.width / 2;
        return Math.max(-1.4, Math.min(1.4, (cardCenter - viewportCenter) / cardBox.width));
      });

      const nextActiveIndex = nextProgress.reduce((nearestIndex, itemProgress, index) => {
        return Math.abs(itemProgress) < Math.abs(nextProgress[nearestIndex]) ? index : nearestIndex;
      }, 0);

      setProgress(nextProgress);
      setActiveIndex(nextActiveIndex);
    }

    function scheduleUpdate() {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => updateCards(viewportElement));
    }

    updateCards(viewportElement);
    viewportElement.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      viewportElement.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [projects]);

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    if (!viewport || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      return;
    }

    const atStart = viewport.scrollLeft <= 0;
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 1;

    if ((atStart && event.deltaY < 0) || (atEnd && event.deltaY > 0)) {
      return;
    }

    event.preventDefault();
    viewport.scrollLeft += event.deltaY;
  }

  return (
    <div className="project-carousel" aria-label="Selected project carousel">
      <div className="carousel-status">
        <span>
          {projects[activeIndex]?.index} / {projects.length.toString().padStart(2, "0")} / Scroll sideways
        </span>
        <div aria-hidden="true">
          {projects.map((project, index) => (
            <span className={index === activeIndex ? "is-active" : ""} key={project.slug} />
          ))}
        </div>
      </div>

      <div className="carousel-viewport" ref={viewportRef} onWheel={handleWheel}>
        <div className="carousel-track">
          {projects.map((project, index) => {
            const itemProgress = progress[index] ?? index;
            const distance = Math.min(1, Math.abs(itemProgress));
            const style: CardStyle = {
              "--card-progress": itemProgress.toFixed(3),
              "--card-scale": (1 - distance * 0.08).toFixed(3),
              "--card-opacity": (1 - distance * 0.28).toFixed(3),
            };

            return (
              <article
                className="case-study carousel-card"
                key={project.slug}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                style={style}
              >
                <div className="case-copy">
                  <div className="case-meta-row">
                    <p className="meta-label">
                      {project.index} / {project.eyebrow}
                    </p>
                    <span className="status-pill">{project.status}</span>
                  </div>
                  <h3 className="display-title">{project.name}</h3>
                  <p className="case-headline">{project.headline}</p>
                  <p className="case-summary">{project.summary}</p>
                  <div className="case-stack">
                    {project.stack.slice(0, 4).map((item) => (
                      <span className="tech-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="case-links">
                    <Link className="link-button" href={project.links.caseStudy}>
                      View case study
                    </Link>
                    {project.links.demo ? (
                      <a className="link-button" href={project.links.demo} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    ) : (
                      <span className="muted-link">Demo link coming soon</span>
                    )}
                    {project.links.github ? (
                      <a className="link-button" href={project.links.github} target="_blank" rel="noreferrer">
                        Repository
                      </a>
                    ) : (
                      <span className="muted-link">Repo link coming soon</span>
                    )}
                  </div>
                </div>
                <div className="case-visual">
                  <ProjectVisual slug={project.slug} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
