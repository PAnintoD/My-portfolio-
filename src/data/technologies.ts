export interface Technology {
  name: string;
  short: string;
  category: string;
}

export const technologies: Technology[] = [
  { name: "TypeScript", short: "TS", category: "Web" },
  { name: "React", short: "RE", category: "Frontend" },
  { name: "Next.js", short: "NX", category: "Full Stack" },
  { name: "Node.js", short: "ND", category: "Backend" },
  { name: "Python", short: "PY", category: "AI & Automation" },
  { name: "OpenCV", short: "CV", category: "Computer Vision" },
  { name: "Arduino", short: "AR", category: "Embedded" },
  { name: "Docker", short: "DK", category: "Infrastructure" }
];
