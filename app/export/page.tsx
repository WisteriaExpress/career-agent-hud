import { mockProjects } from "@/data/mockProjects";
import {
  analyzeProject,
  exportCareerReport,
  generateCvDescriptionEN,
  generateCvDescriptionPL,
  generateInterviewQuestions,
} from "@/lib/mockAgent";
import Link from "next/link";
import styles from "./export.module.css";

export default function ExportPage() {
  const strongestProject =
    mockProjects.find((project) => project.status === "ready") ?? mockProjects[0];

  const agentResults = [
    analyzeProject(strongestProject),
    generateCvDescriptionPL(strongestProject),
    generateCvDescriptionEN(strongestProject),
    generateInterviewQuestions(mockProjects),
  ];

  const report = exportCareerReport(mockProjects, agentResults);

  const readyProjects = mockProjects.filter(
    (project) => project.status === "ready"
  ).length;

  const reportSections = [
    "Portfolio Summary",
    "Projects",
    "Agent Results",
    "CV Entries",
    "Interview Preparation",
    "Next Steps",
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
          <Link className={styles.navItem} href="/agent">
            Agent Console
          </Link>
          <Link className={styles.navItem} href="/cv">
            CV Generator
          </Link>
          <Link className={styles.navItem} href="/jobs">
            Job Matcher
          </Link>
          <Link className={styles.navItem} href="/interview">
            Interview Trainer
          </Link>
          <Link className={styles.navItemActive} href="/export">
            Export
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <p>v0.1 Mock MVP</p>
          <span>Export Report active</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Career preparation output</p>
            <h2>Export Report</h2>
            <p className={styles.subtitle}>
              A final structured report that combines portfolio projects,
              generated agent results, CV-ready descriptions and interview
              preparation into one Markdown-style document.
            </p>
          </div>

          <div className={styles.statusBadge}>Markdown preview</div>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Projects</p>
            <strong>{mockProjects.length}</strong>
            <span>Included in report</span>
          </article>

          <article className={styles.statCard}>
            <p>Ready projects</p>
            <strong>{readyProjects}</strong>
            <span>Ready for CV</span>
          </article>

          <article className={styles.statCard}>
            <p>Agent results</p>
            <strong>{agentResults.length}</strong>
            <span>Exported as sections</span>
          </article>
        </section>

        <section className={styles.twoColumns}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Report structure</p>
                <h3>Included sections</h3>
              </div>
            </div>

            <div className={styles.sectionList}>
              {reportSections.map((section, index) => (
                <article className={styles.sectionCard} key={section}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{section}</h4>
                </article>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Export notes</p>
                <h3>Why this matters</h3>
              </div>
            </div>

            <div className={styles.note}>
              <strong>Portfolio value:</strong> this module shows that the app
              can transform structured data and agent outputs into a final
              reusable report. In a later version, this can become real Markdown,
              PDF or DOCX export.
            </div>

            <ul className={styles.recommendations}>
              <li>Use the report as a source for README and CV descriptions.</li>
              <li>Review generated entries before using them in applications.</li>
              <li>Add real export-to-file functionality in v0.2 or v0.3.</li>
            </ul>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>Generated report</p>
              <h3>Markdown preview</h3>
            </div>
          </div>

          <pre className={styles.reportPreview}>{report}</pre>
        </section>
      </section>
    </main>
  );
}