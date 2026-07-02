import { mockProjects } from "@/data/mockProjects";
import Link from "next/link";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const readyProjects = mockProjects.filter(
    (project) => project.status === "ready"
  ).length;

  const draftProjects = mockProjects.filter(
    (project) => project.status === "draft"
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
          <Link className={styles.navItemActive} href="/projects">
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
          <span>Projects page active</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Portfolio memory</p>
            <h2>Projects</h2>
            <p className={styles.subtitle}>
              A structured overview of portfolio projects used by the Career
              Agent HUD to generate CV descriptions, detect skills and prepare
              for interviews.
            </p>
          </div>

          <Link className={styles.backLink} href="/">
            Back to dashboard
          </Link>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Total projects</p>
            <strong>{mockProjects.length}</strong>
            <span>Stored in mock data</span>
          </article>

          <article className={styles.statCard}>
            <p>Ready</p>
            <strong>{readyProjects}</strong>
            <span>Ready for CV</span>
          </article>

          <article className={styles.statCard}>
            <p>Draft</p>
            <strong>{draftProjects}</strong>
            <span>Need more work</span>
          </article>
        </section>

        <section className={styles.projectGrid}>
          {mockProjects.map((project) => (
            <article className={styles.projectCard} key={project.id}>
              <div className={styles.projectTop}>
                <div>
                  <p className={styles.eyebrow}>Portfolio project</p>
                  <h3>{project.title}</h3>
                </div>

                <span className={styles.status}>{project.status}</span>
              </div>

              <p className={styles.description}>{project.longDescription}</p>

              <div className={styles.sectionBlock}>
                <h4>Tech stack</h4>
                <div className={styles.tags}>
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.sectionBlock}>
                <h4>Features</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.sectionBlock}>
                <h4>Skills shown</h4>
                <ul>
                  {project.skillsShown.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.cvBlock}>
                <h4>CV description PL</h4>
                <p>{project.cvDescriptionPL}</p>
              </div>

              <div className={styles.cvBlock}>
                <h4>CV description EN</h4>
                <p>{project.cvDescriptionEN}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}