import { mockProjects } from "@/data/mockProjects";
import { matchJobOffer } from "@/lib/mockAgent";
import type { JobOffer } from "@/types/career";
import Link from "next/link";
import styles from "./jobs.module.css";

const sampleJobOffer: JobOffer = {
  id: "job-001",
  title: "Junior Frontend Developer",
  company: "Example Software House",
  location: "Remote / Poland",
  language: "EN",
  rawText:
    "We are looking for a Junior Frontend Developer with basic knowledge of React, TypeScript, CSS, Git and responsive web development. Experience with Next.js, UI components and portfolio projects is a plus.",
  requiredSkills: ["React", "TypeScript", "CSS Modules"],
  niceToHaveSkills: ["Next.js", "Git", "Responsive design", "UI components"],
  responsibilities: [
    "Build and maintain frontend components",
    "Work with TypeScript and React",
    "Collaborate with designers and developers",
    "Improve user interface quality",
    "Learn and grow within a development team",
  ],
  matchScore: 0,
  missingSkills: [],
  matchingProjects: [],
  notes:
    "This is a mock job offer used to demonstrate the Job Matcher workflow in version 0.1.",
  createdAt: "2026-06-20",
};

export default function JobsPage() {
  const jobMatchResult = matchJobOffer(sampleJobOffer, mockProjects);

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
          <Link className={styles.navItemActive} href="/jobs">
            Job Matcher
          </Link>
          <a className={styles.navItem} href="/interview">
            Interview Trainer
          </a>
          <a className={styles.navItem} href="/export">
            Export
          </a>
        </nav>

        <div className={styles.sidebarFooter}>
          <p>v0.1 Mock MVP</p>
          <span>Job Matcher active</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Recruitment analysis</p>
            <h2>Job Matcher</h2>
            <p className={styles.subtitle}>
              A module for comparing a job offer with portfolio projects,
              technical skills and current readiness for junior IT applications.
            </p>
          </div>

          <div className={styles.statusBadge}>Mock job analysis</div>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Required skills</p>
            <strong>{sampleJobOffer.requiredSkills.length}</strong>
            <span>Core requirements</span>
          </article>

          <article className={styles.statCard}>
            <p>Nice to have</p>
            <strong>{sampleJobOffer.niceToHaveSkills.length}</strong>
            <span>Additional skills</span>
          </article>

          <article className={styles.statCard}>
            <p>Portfolio projects</p>
            <strong>{mockProjects.length}</strong>
            <span>Used for matching</span>
          </article>
        </section>

        <section className={styles.twoColumns}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Job offer</p>
                <h3>{sampleJobOffer.title}</h3>
              </div>

              <span className={styles.companyBadge}>
                {sampleJobOffer.company}
              </span>
            </div>

            <p className={styles.location}>{sampleJobOffer.location}</p>
            <p className={styles.rawText}>{sampleJobOffer.rawText}</p>

            <div className={styles.sectionBlock}>
              <h4>Required skills</h4>
              <div className={styles.tags}>
                {sampleJobOffer.requiredSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className={styles.sectionBlock}>
              <h4>Nice-to-have skills</h4>
              <div className={styles.tags}>
                {sampleJobOffer.niceToHaveSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className={styles.sectionBlock}>
              <h4>Responsibilities</h4>
              <ul>
                {sampleJobOffer.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Agent result</p>
                <h3>Match analysis</h3>
              </div>
            </div>

            <div className={styles.resultBox}>
              <p className={styles.resultMode}>{jobMatchResult.mode}</p>
              <h4>{jobMatchResult.summary}</h4>
              <pre>{jobMatchResult.output}</pre>
            </div>

            <div className={styles.recommendations}>
              <h4>Recommendations</h4>
              <ul>
                {jobMatchResult.recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>Portfolio evidence</p>
              <h3>Projects used for matching</h3>
            </div>
          </div>

          <div className={styles.projectGrid}>
            {mockProjects.map((project) => (
              <article className={styles.projectCard} key={project.id}>
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.shortDescription}</p>
                </div>

                <div className={styles.tags}>
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}