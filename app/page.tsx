import { mockProjects } from "@/data/mockProjects";
import {
  analyzeProject,
  generateCvDescriptionEN,
  generateCvDescriptionPL,
  generateInterviewQuestions,
} from "@/lib/mockAgent";
import type { AgentResult } from "@/types/career";
import Link from "next/link";
import styles from "./page.module.css";

const agentTasks = [
  "Analyze portfolio projects",
  "Generate CV descriptions in Polish and English",
  "Compare job offers with current skills",
  "Detect missing skills",
  "Prepare interview questions",
  "Export career preparation report",
];

function isAgentResult(result: AgentResult | null): result is AgentResult {
  return result !== null;
}

export default function Home() {
  const readyProjects = mockProjects.filter(
    (project) => project.status === "ready"
  ).length;

  const readinessScore = Math.round(
    (readyProjects / mockProjects.length) * 100
  );

  const strongestProject = mockProjects.find(
    (project) => project.status === "ready"
  );

  const projectAnalysis = strongestProject
    ? analyzeProject(strongestProject)
    : null;

  const cvDescriptionPL = strongestProject
    ? generateCvDescriptionPL(strongestProject)
    : null;

  const cvDescriptionEN = strongestProject
    ? generateCvDescriptionEN(strongestProject)
    : null;

  const interviewQuestions = generateInterviewQuestions(mockProjects);

  const latestAgentResults = [
    projectAnalysis,
    cvDescriptionPL,
    cvDescriptionEN,
    interviewQuestions,
  ].filter(isAgentResult);

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div>
          <p className={styles.logoLabel}>Career Agent</p>
          <h1 className={styles.logo}>HUD</h1>
        </div>

        <nav className={styles.nav}>
          <Link className={styles.navItemActive} href="/">
            Dashboard
          </Link>
          <Link className={styles.navItem} href="/projects">
            Projects
          </Link>
          <Link className={styles.navItem} href="/agent">
            Agent Console
          </Link>
          <Link className={styles.navItem} href="/cv">
            CV Generator
          </Link>
          <a className={styles.navItem} href="/jobs">
            Job Matcher
          </a>
          <a className={styles.navItem} href="/interview">
            Interview Trainer
          </a>
          <a className={styles.navItem} href="/export">
            Export
          </a>
        </nav>

        <div className={styles.sidebarFooter}>
          <p>v0.1 Mock MVP</p>
          <span>Data layer connected</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Project 08 / AI Agent</p>
            <h2>Career Agent HUD</h2>
            <p className={styles.subtitle}>
              A structured career preparation dashboard for portfolio projects,
              CV entries, job offer matching and interview training. This version
              uses typed mock data and controlled mock-agent functions.
            </p>
          </div>

          <div className={styles.statusBadge}>Operational</div>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Portfolio projects</p>
            <strong>{mockProjects.length}</strong>
            <span>Total projects tracked</span>
          </article>

          <article className={styles.statCard}>
            <p>Ready projects</p>
            <strong>{readyProjects}</strong>
            <span>Ready for CV</span>
          </article>

          <article className={styles.statCard}>
            <p>Agent results</p>
            <strong>{latestAgentResults.length}</strong>
            <span>Generated from mock agent</span>
          </article>

          <article className={styles.statCard}>
            <p>Readiness</p>
            <strong>{readinessScore}%</strong>
            <span>Calculated from project statuses</span>
          </article>
        </section>

        <section className={styles.twoColumns}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Portfolio</p>
                <h3>Projects overview</h3>
              </div>
              <Link className={styles.buttonLink} href="/projects">
                Open projects
              </Link>
            </div>

            <div className={styles.projectList}>
              {mockProjects.map((project) => (
                <div className={styles.projectCard} key={project.id}>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.shortDescription}</p>
                    <div className={styles.tags}>
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <span className={styles.projectStatus}>{project.status}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Agent workflow</p>
                <h3>What the agent will do</h3>
              </div>
              <Link className={styles.buttonLink} href="/agent">
                Open agent
              </Link>
            </div>

            <ol className={styles.taskList}>
              {agentTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ol>

            <div className={styles.note}>
              <strong>v0.1 rule:</strong> this version uses typed mock agent
              results first. Real AI integration comes later in v0.2.
            </div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>Mock agent output</p>
              <h3>Latest agent results</h3>
            </div>
            <Link className={styles.buttonLink} href="/cv">
              Open CV
            </Link>
          </div>

          <div className={styles.resultGrid}>
            {latestAgentResults.map((result) => (
              <article className={styles.resultCard} key={result.id}>
                <p className={styles.resultMode}>{result.mode}</p>
                <h4>{result.summary}</h4>
                <pre>{result.output}</pre>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}