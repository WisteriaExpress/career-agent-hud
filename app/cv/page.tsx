import { mockProjects } from "@/data/mockProjects";
import {
  generateCvDescriptionEN,
  generateCvDescriptionPL,
} from "@/lib/mockAgent";
import Link from "next/link";
import styles from "./cv.module.css";

export default function CvPage() {
  const cvResults = mockProjects.flatMap((project) => [
    {
      id: `${project.id}-pl`,
      projectTitle: project.title,
      language: "PL",
      result: generateCvDescriptionPL(project),
    },
    {
      id: `${project.id}-en`,
      projectTitle: project.title,
      language: "EN",
      result: generateCvDescriptionEN(project),
    },
  ]);

  const readyProjects = mockProjects.filter(
    (project) => project.status === "ready"
  ).length;

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
          <Link className={styles.navItem} href="/agent">
            Agent Console
          </Link>
          <Link className={styles.navItemActive} href="/cv">
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
          <span>CV Generator active</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Recruitment assets</p>
            <h2>CV Generator</h2>
            <p className={styles.subtitle}>
              A focused module for turning portfolio projects into honest,
              recruiter-friendly CV descriptions in Polish and English.
            </p>
          </div>

          <div className={styles.statusBadge}>Mock CV output</div>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Projects</p>
            <strong>{mockProjects.length}</strong>
            <span>Available for CV</span>
          </article>

          <article className={styles.statCard}>
            <p>Ready projects</p>
            <strong>{readyProjects}</strong>
            <span>Marked as ready</span>
          </article>

          <article className={styles.statCard}>
            <p>Generated entries</p>
            <strong>{cvResults.length}</strong>
            <span>Polish and English</span>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>How it works</p>
              <h3>CV generation workflow</h3>
            </div>
          </div>

          <div className={styles.workflowGrid}>
            <article>
              <span>01</span>
              <h4>Select project</h4>
              <p>The agent reads structured project data from portfolio memory.</p>
            </article>

            <article>
              <span>02</span>
              <h4>Choose language</h4>
              <p>The project can be translated into Polish or English CV style.</p>
            </article>

            <article>
              <span>03</span>
              <h4>Generate entry</h4>
              <p>The result is concise, honest and focused on skills shown.</p>
            </article>
          </div>
        </section>

        <section className={styles.cvGrid}>
          {cvResults.map((item) => (
            <article className={styles.cvCard} key={item.id}>
              <div className={styles.cvTop}>
                <div>
                  <p className={styles.eyebrow}>CV entry {item.language}</p>
                  <h3>{item.projectTitle}</h3>
                </div>

                <span className={styles.languageBadge}>{item.language}</span>
              </div>

              <p className={styles.summary}>{item.result.summary}</p>

              <div className={styles.outputBox}>
                <p>{item.result.output}</p>
              </div>

              <div className={styles.recommendations}>
                <h4>Recommendations</h4>
                <ul>
                  {item.result.recommendations.map((recommendation) => (
                    <li key={recommendation}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}