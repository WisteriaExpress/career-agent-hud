import type { AgentResult, JobOffer, PortfolioProject } from "@/types/career";

function createResult(
    mode: AgentResult["mode"],
    input: string,
    output: string,
    summary: string,
    recommendations: string[]
): AgentResult {
    return {
        id: `${mode.toLowerCase()}-${Date.now()}`,
        mode,
        input,
        output,
        summary,
        recommendations,
        createdAt: new Date().toISOString(),
    };
}

export function analyzeProject(project: PortfolioProject): AgentResult {
    return createResult(
        "PROJECT_REVIEW",
        project.title,
        [
            `Project: ${project.title}`,
            "",
            project.longDescription,
            "",
            "Recruitment value:",
            `This project demonstrates ${project.skillsShown.join(", ")}.`,
            "",
            "Main technologies:",
            project.stack.join(", "),
        ].join("\n"),
        `The project shows ${project.skillsShown.length} relevant skills and can be used in a junior IT portfolio.`,
        [
            "Add screenshots before publishing the project.",
            "Prepare a short demo scenario for recruiters.",
            "Make sure the README explains the problem, solution and tech stack.",
        ]
    );
}

export function generateCvDescriptionPL(project: PortfolioProject): AgentResult {
    return createResult(
        "CV_MODE_PL",
        project.title,
        project.cvDescriptionPL,
        "Generated a Polish CV-ready project description.",
        [
            "Keep the description honest and specific.",
            "Mention technologies used in the project.",
            "Avoid claiming commercial experience if this is a learning project.",
        ]
    );
}

export function generateCvDescriptionEN(project: PortfolioProject): AgentResult {
    return createResult(
        "CV_MODE_EN",
        project.title,
        project.cvDescriptionEN,
        "Generated an English CV-ready project description.",
        [
            "Use simple and confident English.",
            "Focus on what the project does and what skills it demonstrates.",
            "Prepare to explain this project during an interview.",
        ]
    );
}

export function matchJobOffer(
    jobOffer: JobOffer,
    projects: PortfolioProject[]
): AgentResult {
    const allSkills = new Set(
        projects.flatMap((project) => [...project.stack, ...project.skillsShown])
    );

    const missingSkills = jobOffer.requiredSkills.filter(
        (skill) => !allSkills.has(skill)
    );

    const matchingProjects = projects.filter((project) =>
        jobOffer.requiredSkills.some(
            (skill) => project.stack.includes(skill) || project.skillsShown.includes(skill)
        )
    );

    const matchScore =
        jobOffer.requiredSkills.length === 0
            ? 0
            : Math.round(
                ((jobOffer.requiredSkills.length - missingSkills.length) /
                    jobOffer.requiredSkills.length) *
                100
            );

    return createResult(
        "JOB_MATCH",
        jobOffer.title,
        [
            `Job offer: ${jobOffer.title}`,
            "",
            `Match score: ${matchScore}%`,
            "",
            "Matching projects:",
            matchingProjects.map((project) => `- ${project.title}`).join("\n") || "- None",
            "",
            "Missing skills:",
            missingSkills.map((skill) => `- ${skill}`).join("\n") || "- None",
        ].join("\n"),
        `The current portfolio matches ${matchScore}% of the required skills in this mock analysis.`,
        [
            "Use matching projects as evidence in your CV or cover letter.",
            "Turn missing skills into a focused learning checklist.",
            "Do not reject yourself too early if the match is not perfect.",
        ]
    );
}

export function generateInterviewQuestions(
    projects: PortfolioProject[]
): AgentResult {
    const questions = [
        "Can you explain the goal of your strongest portfolio project?",
        "Why did you choose Next.js and TypeScript?",
        "What was the most difficult part of building your project?",
        "How did you structure your components?",
        "How do you handle styling in your application?",
        "What would you improve in this project next?",
        "Can you describe this project in English?",
    ];

    return createResult(
        "INTERVIEW_MODE",
        "Portfolio interview preparation",
        questions.map((question, index) => `${index + 1}. ${question}`).join("\n"),
        `Generated ${questions.length} interview questions based on ${projects.length} portfolio projects.`,
        [
            "Practice answers out loud.",
            "Prepare short English answers for each project.",
            "Use real project examples instead of generic theory only.",
        ]
    );
}

export function exportCareerReport(
    projects: PortfolioProject[],
    results: AgentResult[]
): string {
    return [
        "# Career Preparation Report",
        "",
        "## Portfolio Summary",
        "",
        `Total projects: ${projects.length}`,
        `Ready projects: ${projects.filter((project) => project.status === "ready").length}`,
        "",
        "## Projects",
        "",
        ...projects.map((project) =>
            [
                `### ${project.title}`,
                "",
                project.shortDescription,
                "",
                `Stack: ${project.stack.join(", ")}`,
                `Status: ${project.status}`,
                "",
            ].join("\n")
        ),
        "",
        "## Agent Results",
        "",
        ...results.map((result) =>
            [
                `### ${result.mode}`,
                "",
                result.summary,
                "",
                result.output,
                "",
            ].join("\n")
        ),
    ].join("\n");
}