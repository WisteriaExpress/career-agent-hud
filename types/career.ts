export type ProjectStatus = "draft" | "ready" | "archived";

export type AgentMode =
    | "PROJECT_REVIEW"
    | "CV_MODE_PL"
    | "CV_MODE_EN"
    | "JOB_MATCH"
    | "SKILL_GAP"
    | "INTERVIEW_MODE"
    | "EXPORT_MODE";

export type PortfolioProject = {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    stack: string[];
    features: string[];
    problemsSolved: string[];
    skillsShown: string[];
    cvDescriptionPL: string;
    cvDescriptionEN: string;
    githubUrl?: string;
    liveUrl?: string;
    screenshots?: string[];
    status: ProjectStatus;
    createdAt: string;
    updatedAt: string;
};

export type JobOffer = {
    id: string;
    title: string;
    company?: string;
    location?: string;
    language?: "PL" | "EN" | "UNKNOWN";
    rawText: string;
    requiredSkills: string[];
    niceToHaveSkills: string[];
    responsibilities: string[];
    matchScore: number;
    missingSkills: string[];
    matchingProjects: string[];
    notes: string;
    createdAt: string;
};

export type AgentResult = {
    id: string;
    mode: AgentMode;
    input: string;
    output: string;
    summary: string;
    recommendations: string[];
    createdAt: string;
};