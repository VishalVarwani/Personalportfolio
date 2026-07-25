export const profile = {
  name: "Vishal Varwani",
  role: "AI Engineer",
  tagline: "I build AI systems that ship, not demos that impress once and break in production.",
  location: "Ludwigshafen, Germany",
  relocation: "Open to relocating anywhere in Germany",
  email: "vishalvarwani8@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishal-varwani-74419324a/",
  github: "https://github.com/VishalVarwani",
  currently: "Working student AI Engineer at e.Ray Europa, finishing a Master's in Applied Data Science at SRH Heidelberg",
  resumeUrl: "/resume.pdf",
} as const;

export const education = [
  {
    degree: "Master of Applied Data Science and Analytics",
    institution: "SRH Hochschule Heidelberg",
    location: "Heidelberg, Germany",
    period: "April 2024 – April 2026",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Somaiya Vidyavihar University",
    location: "Mumbai, India",
    period: "March 2020 – April 2023",
    note: "GPA 1.3 (German scale, 1.0 is best)",
  },
] as const;

export const extracurricular = {
  role: "Project Manager, Google Developer Groups (GDG)",
  location: "Mannheim, Germany",
  period: "March 2025 – Present",
  text: "Co-organizes meetups, hack nights, and hackathons for the local chapter. Has run ML and cloud sessions for 50+ members and helped onboard new contributors.",
} as const;
