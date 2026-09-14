"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, PointerEvent } from "react";
import { OsProVisual, RahatVisual, SchemaVisual } from "@/components/project-visuals";
import type { Project } from "@/data/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

type CardStyle = CSSProperties & {
  "--card-offset": string;
  "--card-scale": string;
  "--card-opacity": string;
  "--card-y": string;
};

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "rahat") return <RahatVisual />;
  if (slug === "os-pro") return <OsProVisual />;
  return <SchemaVisual />;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const wrapLockRef = useRef(0);
  const lastWheelAtRef = useRef(-Infinity);
  const linkPressRef = useRef<{ link: Element; x: number; y: number } | null>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const scroller = scrollerRef.current;

    if (!viewport || !scroller) {
      return;
    }

    function advance(delta: number) {
      const now = performance.now();
      lastWheelAtRef.current = now;
      linkPressRef.current = null;
      if (projects.length < 2 || Math.abs(delta) < 8 || now < wrapLockRef.current) return;
      wrapLockRef.current = now + 620;
      const nextIndex = (activeIndexRef.current + (delta > 0 ? 1 : -1) + projects.length) % projects.length;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }

    // Keep native touchpad scrolling away from either history-navigation boundary.
    let center = 0;
    function centerScroll() {
      center = (scroller!.scrollWidth - scroller!.clientWidth) / 2;
      scroller!.scrollLeft = center;
    }
    function handleNativeScroll() {
      const delta = scroller!.scrollLeft - center;
      if (Math.abs(delta) < 1) return;
      advance(delta);
      scroller!.scrollLeft = center;
    }
    centerScroll();
    const observer = new ResizeObserver(centerScroll);
    observer.observe(scroller);
    scroller.addEventListener("scroll", handleNativeScroll);

    function handleWheel(event: globalThis.WheelEvent) {
      if (event.ctrlKey || projects.length < 2) return;
      // Cancel the native swipe even during animation and trackpad momentum.
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      advance(delta);
    }

    function capturePageSwipe(event: globalThis.WheelEvent) {
      if (event.ctrlKey) return;
      const overCarousel = event.composedPath().includes(viewport!);
      if (overCarousel) {
        handleWheel(event);
      } else if (event.deltaX !== 0) {
        // Catch the first horizontal event before Chrome starts a history gesture,
        // including gestures starting in the gutter or leaving the moving cards.
        event.preventDefault();
      }
    }

    window.addEventListener("wheel", capturePageSwipe, { passive: false, capture: true });

    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", handleNativeScroll);
      window.removeEventListener("wheel", capturePageSwipe, true);
    };
  }, [projects.length]);

  function recordLinkPress(event: PointerEvent<HTMLDivElement>) {
    const link = event.target instanceof Element ? event.target.closest("a") : null;
    linkPressRef.current = link ? { link, x: event.clientX, y: event.clientY } : null;
  }

  function stopAccidentalLinkClick(event: MouseEvent<HTMLDivElement>) {
    const clickedLink = event.target instanceof Element ? event.target.closest("a") : null;
    if (!clickedLink) return;
    const press = linkPressRef.current;
    linkPressRef.current = null;
    // Keyboard activation remains available; pointer activation must begin on this link.
    if (event.detail === 0) return;
    if (performance.now() - lastWheelAtRef.current < 700 ||
        !press || press.link !== clickedLink ||
        Math.hypot(event.clientX - press.x, event.clientY - press.y) > 8) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <div className="project-carousel" aria-label="Selected project carousel" ref={viewportRef}
      onPointerDownCapture={recordLinkPress} onPointerCancelCapture={() => { linkPressRef.current = null; }}
      onClickCapture={stopAccidentalLinkClick} onAuxClickCapture={stopAccidentalLinkClick}>
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

      <div className="carousel-viewport" ref={scrollerRef}>
        <div className="carousel-track">
          {projects.map((project, index) => {
            let cardOffset = index - activeIndex;

            if (cardOffset > projects.length / 2) {
              cardOffset -= projects.length;
            }

            if (cardOffset < -projects.length / 2) {
              cardOffset += projects.length;
            }

            const distance = Math.min(1, Math.abs(cardOffset));
            const style: CardStyle = {
              "--card-offset": cardOffset.toFixed(3),
              "--card-scale": (1 - distance * 0.04).toFixed(3),
              "--card-opacity": (1 - distance * 0.26).toFixed(3),
              "--card-y": `${(distance * 0.8).toFixed(2)}rem`,
              zIndex: 100 - Math.round(distance * 20),
            };

            return (
              <article
                className="case-study carousel-card"
                key={project.slug}
                data-active={index === activeIndex}
                inert={index !== activeIndex}
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
                    {project.links.backend ? (
                      <a className="link-button" href={project.links.backend} target="_blank" rel="noreferrer">
                        Backend API
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="case-visual">
                  {project.media[0] ? (
                    <div className="project-screenshot-frame">
                      <Image
                        src={project.media[0].src}
                        alt={project.media[0].alt}
                        fill
                        sizes="(max-width: 768px) 86vw, 42vw"
                        className="project-screenshot"
                      />
                    </div>
                  ) : (
                    <ProjectVisual slug={project.slug} />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
