import { mockProjects } from "@/data/mockProjects";
import { generateInterviewQuestions } from "@/lib/mockAgent";
import Link from "next/link";
import styles from "./interview.module.css";

const softSkillQuestions = [
  {
    question: "Tell me about a project you are proud of.",
    answer:
      "I would describe the project goal, my role, the technologies I used, the biggest challenge and what I learned from it.",
  },
  {
    question: "How do you handle problems when you get stuck?",
    answer:
      "I break the problem into smaller parts, check documentation, test one thing at a time and ask for help when I can clearly explain what I tried.",
  },
  {
    question: "Why are you interested in frontend development?",
    answer:
      "I like building visible, useful interfaces and turning ideas into applications that people can actually use.",
  },
];

const englishQuestions = [
  {
    question: "Can you describe your portfolio project in English?",
    answer:
      "This project is a Next.js and TypeScript application. It helps users organize portfolio projects, generate CV descriptions and prepare for interviews.",
  },
  {
    question: "What technologies did you use?",
    answer:
      "I used Next.js, React, TypeScript and CSS Modules. I also worked with structured mock data and simple agent workflow functions.",
  },
  {
    question: "What would you improve next?",
    answer:
      "I would add real AI API integration, database storage, authentication and a PDF export feature.",
  },
];

export default function InterviewPage() {
  const interviewResult = generateInterviewQuestions(mockProjects);

  const readyProjects = mockProjects.filter(
    (project) => project.status === "ready"
  ).length;

  const technicalQuestions = interviewResult.output
    .split("\n")
    .filter((question) => question.trim().length > 0);

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
          <Link className={styles.navItemActive} href="/interview">
            Interview Trainer
          </Link>
          <a className={styles.navItem} href="/export">
            Export
          </a>
        </nav>

        <div className={styles.sidebarFooter}>
          <p>v0.1 Mock MVP</p>
          <span>Interview Trainer active</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Interview preparation</p>
            <h2>Interview Trainer</h2>
            <p className={styles.subtitle}>
              A structured preparation module for technical questions,
              soft-skill answers and simple English interview practice based on
              portfolio projects.
            </p>
          </div>

          <div className={styles.statusBadge}>Practice mode</div>
        </header>

        <section className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p>Portfolio projects</p>
            <strong>{mockProjects.length}</strong>
            <span>Used as interview evidence</span>
          </article>

          <article className={styles.statCard}>
            <p>Ready projects</p>
            <strong>{readyProjects}</strong>
            <span>Good interview examples</span>
          </article>

          <article className={styles.statCard}>
            <p>Question sets</p>
            <strong>3</strong>
            <span>Technical, soft skills, English</span>
          </article>
        </section>

        <section className={styles.twoColumns}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Technical</p>
                <h3>Project-based questions</h3>
              </div>
            </div>

            <div className={styles.questionList}>
              {technicalQuestions.map((question) => (
                <article className={styles.questionCard} key={question}>
                  <p>{question}</p>
                  <span>
                    Answer using a real project example: goal, stack, problem,
                    solution and what you learned.
                  </span>
                </article>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.eyebrow}>Soft skills</p>
                <h3>Model answers</h3>
              </div>
            </div>

            <div className={styles.answerList}>
              {softSkillQuestions.map((item) => (
                <article className={styles.answerCard} key={item.question}>
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>English practice</p>
              <h3>Simple English interview answers</h3>
            </div>
          </div>

          <div className={styles.englishGrid}>
            {englishQuestions.map((item) => (
              <article className={styles.englishCard} key={item.question}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.eyebrow}>Agent recommendations</p>
              <h3>How to prepare</h3>
            </div>
          </div>

          <ul className={styles.recommendations}>
            {interviewResult.recommendations.map((recommendation) => (
              <li key={recommendation}>{recommendation}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}