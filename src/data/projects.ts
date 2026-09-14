export type Project = {
  slug: string;
  index: string;
  name: string;
  eyebrow: string;
  status: "Live" | "In progress";
  headline: string;
  summary: string;
  stack: string[];
  links: {
    caseStudy: string;
    demo?: string;
    backend?: string;
    github?: string;
  };
  media: {
    src: string;
    alt: string;
  }[];
  highlights: string[];
  caseStudy: {
    intro: string;
    sections: {
      title: string;
      body: string;
    }[];
  };
};

export const projects: Project[] = [
  {
    slug: "rahat",
    index: "01",
    name: "RAHAT",
    eyebrow: "Featured project",
    status: "Live",
    headline: "AI recommends. Humans decide.",
    summary:
      "Human-in-the-loop disaster evacuation decision support built with real Bengaluru data, deterministic scoring, routing, approvals, and audit trails.",
    stack: ["FastAPI", "React", "PostgreSQL", "Redis", "WebSockets", "NetworkX"],
    links: {
      caseStudy: "/projects/rahat",
      demo: "https://rahat-frontend-production.up.railway.app/",
      backend: "https://rahat-backend-production.up.railway.app/",
      github: "https://github.com/Vivek-ray-05/RAHAT",
    },
    media: [
      {
        src: "/assets/projects/rahat-system-status.png",
        alt: "RAHAT system status interface showing Bengaluru disaster evacuation telemetry",
      },
    ],
    highlights: [
      "28 Bengaluru localities with elevation, density, hospitals, shelters, and road-network data.",
      "Recommendations stay explainable, auditable, and reversible before human approval.",
      "Backend includes authorization fixes, capacity checks, CI, and 91+ tests.",
    ],
    caseStudy: {
      intro:
        "RAHAT explores how software can support high-pressure civic decisions without pretending that automation should replace human judgment.",
      sections: [
        {
          title: "Why Human In The Loop",
          body:
            "The central design choice is simple: the system can rank risks and routes, but a Zone Admin approves, modifies, or rejects the action. That keeps decisions accountable when real people and limited shelter capacity are involved.",
        },
        {
          title: "System Shape",
          body:
            "The backend models localities, shelters, recommendations, approvals, and audit events. Redis pub/sub drives live updates, WebSockets deliver them to the interface, and route planning runs over an OSM-derived Bengaluru road graph.",
        },
        {
          title: "What I Learned",
          body:
            "The project pushed beyond UI into data quality, state transitions, authorization boundaries, test coverage, and the discomfort of making tradeoffs visible instead of hiding them behind a confident label.",
        },
      ],
    },
  },
  {
    slug: "os-pro",
    index: "02",
    name: "OS-PRO",
    eyebrow: "Interactive learning tool",
    status: "Live",
    headline: "What if you could watch an operating system think?",
    summary:
      "Browser-based simulations for scheduling, paging, concurrency, and disk I/O that make textbook OS algorithms tangible.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand", "Framer Motion"],
    links: {
      caseStudy: "/projects/os-pro",
      demo: "https://dem-os-cyan.vercel.app/scheduling",
      github: "https://github.com/Vivek-ray-05/dem_os",
    },
    media: [
      {
        src: "/assets/projects/ospro-scheduling.png",
        alt: "OS-PRO CPU scheduling simulator with Gantt chart and process logs",
      },
      {
        src: "/assets/projects/ospro-page-memory.png",
        alt: "OS-PRO page replacement simulator showing frames, hits, and faults",
      },
      {
        src: "/assets/projects/ospro-seek-visualiser.png",
        alt: "OS-PRO disk seek visualiser showing request order and metrics",
      },
    ],
    highlights: [
      "CPU scheduling includes FCFS, SJF, SRTF, Round Robin, and Priority scheduling.",
      "Memory modules cover page replacement, address translation, TLB, and page tables.",
      "Concurrency and disk scheduling modules focus on step-by-step visual feedback.",
    ],
    caseStudy: {
      intro:
        "OS-PRO started from a learning frustration: algorithms are easier to understand when their state changes are visible.",
      sections: [
        {
          title: "Learning Problem",
          body:
            "Scheduling, paging, and deadlock algorithms can look tidy in a table while still feeling abstract. The simulator turns them into paced interactions with metrics, timelines, and visual state.",
        },
        {
          title: "Architecture",
          body:
            "Each simulation area owns its state separately, while algorithm logic stays apart from the visual components. That separation makes it easier to test ideas and keep the interface responsive.",
        },
        {
          title: "Product Thinking",
          body:
            "The project is not just a calculator. Step mode, color, inline explanations, and real calculated metrics are used to help students build intuition while still respecting the underlying algorithms.",
        },
      ],
    },
  },
  {
    slug: "schemalenz",
    index: "03",
    name: "SchemaLenz",
    eyebrow: "Database systems study",
    status: "In progress",
    headline: "Understanding databases from the inside out.",
    summary:
      "A database systems project exploring functional dependencies, normalization, query parsing, optimization, indexes, and storage ideas.",
    stack: ["Java", "Spring Boot", "JSqlParser", "Algorithms", "B+ Trees", "Query Planning"],
    links: {
      caseStudy: "/projects/schemalenz",
      github: "https://github.com/disha-a-a/Schema_Lenz",
    },
    media: [
      {
        src: "/assets/projects/schemalenz-normalization.png",
        alt: "SchemaLenz normalization decomposition flow from 1NF to BCNF",
      },
      {
        src: "/assets/projects/schemalenz-query-plan.png",
        alt: "SchemaLenz query plan comparison between original and optimized plans",
      },
      {
        src: "/assets/projects/schemalenz-btree.png",
        alt: "SchemaLenz B+ tree builder visualization",
      },
    ],
    highlights: [
      "Pipeline moves from flat files to FD closure, minimal cover, 3NF, BCNF, and decomposition.",
      "Explores query parsing, ASTs, heuristic optimization, and I/O cost comparison.",
      "Presented honestly as work in progress while fixes and polish continue.",
    ],
    caseStudy: {
      intro:
        "SchemaLenz is a work-in-progress attempt to learn database internals by building the machinery instead of only reading about it.",
      sections: [
        {
          title: "Core Idea",
          body:
            "The project follows the path from messy relation design toward normalized schemas, then expands toward query processing and index analysis.",
        },
        {
          title: "Current Status",
          body:
            "This is intentionally labeled in progress. The portfolio should show what is being explored, what works, and what still needs repair instead of pretending it is a finished product.",
        },
        {
          title: "Next Direction",
          body:
            "The strongest future direction is a clearer decomposition tree, better query-plan visualization, and sharper explanation of the tradeoffs behind normalization and indexing.",
        },
      ],
    },
  },
];

export const skills = {
  Languages: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  Frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["FastAPI", "Spring Boot", "JPA", "REST API"],
  "Data / Systems": ["PostgreSQL", "MySQL", "Redis", "NetworkX", "OSMnx", "SQLModel"],
  Tools: ["Git", "GitHub", "Docker", "Vercel", "Railway", "GenAI tools"],
};
