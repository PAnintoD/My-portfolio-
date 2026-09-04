export interface Technology {
  name: string;
  short: string;
  category: string;
}

export const row1Technologies: Technology[] = [
  { name: "TypeScript", short: "TS", category: "Web Systems" },
  { name: "React", short: "RE", category: "Frontend" },
  { name: "Next.js", short: "NX", category: "Full Stack" },
  { name: "Node.js", short: "ND", category: "Backend" },
  { name: "REST APIs", short: "API", category: "Integration" }
];

export const row2Technologies: Technology[] = [
  { name: "Python", short: "PY", category: "Automation" },
  { name: "OpenCV", short: "CV", category: "AI Vision" },
  { name: "Arduino", short: "AR", category: "Embedded" },
  { name: "Docker", short: "DK", category: "Infrastructure" },
  { name: "IoT", short: "IoT", category: "Connected Systems" }
];

export const technologies: Technology[] = [...row1Technologies, ...row2Technologies];
