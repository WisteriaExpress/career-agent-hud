import type { PortfolioProject } from "@/types/career";

export const mockProjects: PortfolioProject[] = [
  {
    id: "project-001",
    title: "Portfolio Dashboard",
    shortDescription:
      "A responsive dashboard for presenting portfolio projects and learning progress.",
    longDescription:
      "A frontend application focused on organizing portfolio projects, tracking progress, and presenting technical skills in a clean dashboard layout.",
    stack: ["Next.js", "React", "TypeScript", "CSS Modules"],
    features: [
      "Responsive dashboard layout",
      "Project cards",
      "Status tracking",
      "Clean UI structure",
    ],
    problemsSolved: [
      "Organizing portfolio information",
      "Presenting projects in a recruiter-friendly way",
      "Practicing component-based frontend architecture",
    ],
    skillsShown: [
      "React components",
      "TypeScript data modeling",
      "CSS Modules styling",
      "UI structure",
    ],
    cvDescriptionPL:
      "Aplikacja dashboardowa w Next.js i TypeScript do prezentacji projektow portfolio, statusow oraz postepow nauki. Projekt pokazuje umiejetnosc pracy z komponentami React, struktura danych i responsywnym interfejsem.",
    cvDescriptionEN:
      "A Next.js and TypeScript dashboard application for presenting portfolio projects, statuses, and learning progress. The project demonstrates React component structure, data modeling, and responsive UI development.",
    status: "ready",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-20",
  },
  {
    id: "project-002",
    title: "Job Offer Analyzer",
    shortDescription:
      "A tool for analyzing job offers and comparing requirements with current skills.",
    longDescription:
      "A recruitment-support tool that extracts important requirements from job offers and compares them with the user's portfolio projects and current learning path.",
    stack: ["React", "TypeScript", "Data Analysis", "UX Writing"],
    features: [
      "Job offer parsing",
      "Required skills list",
      "Missing skills detection",
      "Application recommendation",
    ],
    problemsSolved: [
      "Understanding job requirements",
      "Reducing stress before applying",
      "Turning job posts into learning tasks",
    ],
    skillsShown: [
      "Text analysis logic",
      "TypeScript types",
      "Conditional rendering",
      "User-centered product thinking",
    ],
    cvDescriptionPL:
      "Narzedzie do analizy ofert pracy, ktore porownuje wymagania z aktualnymi umiejetnosciami i projektami uzytkownika. Projekt pokazuje myslenie produktowe, prace z danymi tekstowymi i tworzenie praktycznych funkcji wspierajacych rekrutacje.",
    cvDescriptionEN:
      "A job offer analysis tool that compares job requirements with the user's current skills and portfolio projects. The project demonstrates product thinking, text-based data handling, and practical recruitment-support features.",
    status: "draft",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-20",
  },
  {
    id: "project-003",
    title: "Career Agent HUD",
    shortDescription:
      "An AI-assisted career preparation dashboard for portfolio, CV, and interview readiness.",
    longDescription:
      "A structured agent-based dashboard designed to help users organize portfolio projects, generate CV-ready descriptions, compare job offers with their skills, and prepare for interviews.",
    stack: ["Next.js", "React", "TypeScript", "Agent Workflow", "CSS Modules"],
    features: [
      "Controlled agent modes",
      "Portfolio project memory",
      "CV description generation",
      "Interview question preparation",
      "Markdown report export",
    ],
    problemsSolved: [
      "Preparing for a first IT job",
      "Explaining learning projects professionally",
      "Connecting portfolio work with job requirements",
      "Creating structured interview preparation",
    ],
    skillsShown: [
      "Application architecture",
      "TypeScript data modeling",
      "Agent workflow design",
      "Frontend dashboard development",
      "Recruitment-focused product design",
    ],
    cvDescriptionPL:
      "Aplikacja webowa w Next.js i TypeScript wspierajaca przygotowanie do rekrutacji w IT. Projekt umozliwia zarzadzanie portfolio, generowanie opisow projektow do CV, analize ofert pracy, wykrywanie brakow w umiejetnosciach oraz przygotowanie pytan rekrutacyjnych.",
    cvDescriptionEN:
      "A Next.js and TypeScript web application designed to support IT job preparation. The project allows users to manage portfolio projects, generate CV-ready descriptions, analyze job offers, identify skill gaps, and prepare interview questions.",
    status: "ready",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-20",
  },
];