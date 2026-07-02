import {
  analyzeProject,
  generateCvDescriptionEN,
  generateCvDescriptionPL,
  generateInterviewQuestions,
} from "@/lib/mockAgent";
import { mockProjects } from "@/data/mockProjects";
import Link from "next/link";
import styles from "./agent.module.css";

const agentModes = [
  {
    name: "PROJECT_REVIEW",
    title: "Project Review",
    description:
      "Analyzes a portfolio project and explains its recruitment value.",
  },
  {
    name: "CV_MODE_PL",
    title: "CV Mode PL",
    description:
      "Generates a Polish CV-ready project description based on real project data.",
  },
  {
    name: "CV_MODE_EN",
    title: "CV Mode EN",
    description:
      "Generates an English CV-ready project description for international job applications.",
  },
  {
    name: "JOB_MATCH",
    title: "Job Match",
    description:
      "Compares a job offer with portfolio projects and current skills.",
  },
  {
    name: "SKILL_GAP",
    title: "Skill Gap",
    description:
      "Detects missing skills and turns them into a focused learning checklist.",
  },
  {
    name: "INTERVIEW_MODE",
    title: "Interview Mode",
    description:
      "Generates interview questions based on portfolio projects and junior IT expectations.",
  },
  {
    name: "EXPORT_MODE",
    title: "Export Mode",
    description:
      "Creates a structured Markdown report for career preparation.",
  },
];

const exampleCommands = [
  "Analyze my strongest portfolio project.",
  "Generate a Polish CV description for this project.",
  "Generate an English CV description for this project.",
  "Compare my projects with a Junior Frontend Developer offer.",
  "Show my missing skills before applying.",
  "Prepare interview questions based on my portfolio.",
  "Export a career preparation report.",
];

export default function AgentPage() {
  const strongestProject =
    mockProjects.find((project) => project.status === "ready") ?? mockProjects[0];

  const agentResults = [
    analyzeProject(strongestProject),
    generateCvDescriptionPL(strongestProject),
    generateCvDescriptionEN(strongestProject),
    generateInterviewQuestions(mockProjects),
  ];

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div>
          <p className={styles.logoLabel}>Career Agent</p>
          <h1 className={styles.logo}>HUD</h1>
        </div>

        <nav className={styles.nav}>
          <Link className={styles.navItem} href="/">
            Dashboard
          </Link>
          <Link className={styles.navItem} href="/projects">
            Projects
          </Link>
          <Link className={styles.navItemActive} href="/agent">
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
          <span>Agent Console active</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Controlled agent workflow</p>
            <h2>Agent Console</h2>
            <p className={styles.subtitle}>
              A command center for running structured agent modes. Version 0.1
              uses mock agent functions to show the workflow before real AI API
              integration.
            </p>
          </div>

          <div className={styles.statusBadge}>Mock agent online</div>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Agent modes</p>
            <strong>{agentModes.length}</strong>
            <span>Controlled workflows</span>
          </article>

          <article className={styles.statCard}>
            <p>Mock results</p>
            <strong>{agentResults.length}</strong>
            <span>Generated locally</span>
          </article>

          <article className={styles.statCard}>
            <p>Projects used</p>
            <strong>{mockProjects.length}</strong>
            <span>Portfolio memory</span>
          </article>
        </section>

        <section className={styles.twoColumns}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Modes</p>
                <h3>Agent modes</h3>
              </div>
            </div>

            <div className={styles.modeGrid}>
              {agentModes.map((mode) => (
                <article className={styles.modeCard} key={mode.name}>
                  <p>{mode.name}</p>
                  <h4>{mode.title}</h4>
                  <span>{mode.description}</span>
                </article>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Commands</p>
                <h3>Example commands</h3>
              </div>
            </div>

            <ol className={styles.commandList}>
              {exampleCommands.map((command) => (
                <li key={command}>{command}</li>
              ))}
            </ol>

            <div className={styles.note}>
              <strong>Design rule:</strong> this agent does not act freely. It
              uses selected modes, typed data and visible outputs.
            </div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>Generated output</p>
              <h3>Mock agent results</h3>
            </div>
            <Link className={styles.buttonLink} href="/cv">
              Open CV Generator
            </Link>
          </div>

          <div className={styles.resultGrid}>
            {agentResults.map((result) => (
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