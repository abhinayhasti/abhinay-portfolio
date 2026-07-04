export const personal = {
  name: "Abhinay Hasti",
  role: "Senior DevOps & Cloud Platform Engineer",
  email: "abhinayhasti46@gmail.com",
  phone: "(945) 275-0832",
  location: "United States (Remote-friendly)", // TODO: replace with your preferred display location
  yearsOfExperience: 9,
  github: "https://github.com/abhinayhasti",
  linkedin: "https://www.linkedin.com/in/abhinayhasti",
  resumeUrl: "/resume.pdf", // TODO: export your resume docx to PDF and drop it into /public as resume.pdf
};

export const socialLinks = [
  { label: "GitHub", href: personal.github, icon: "github" as const },
  { label: "LinkedIn", href: personal.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${personal.email}`, icon: "mail" as const },
];
