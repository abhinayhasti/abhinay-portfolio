export interface SkillCategory {
  title: string;
  icon:
    | "cloud"
    | "container"
    | "iac"
    | "cicd"
    | "code"
    | "monitor"
    | "shield";
  description: string;
  tools: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud",
    icon: "cloud",
    description: "Designing and running production workloads across major cloud providers.",
    tools: ["AWS", "Azure"],
  },
  {
    title: "Containers",
    icon: "container",
    description: "Orchestrating containerized workloads at scale.",
    tools: ["Docker", "Kubernetes", "Helm"],
  },
  {
    title: "Infrastructure as Code",
    icon: "iac",
    description: "Codifying infrastructure for repeatable, auditable environments.",
    tools: ["Terraform", "Ansible"],
  },
  {
    title: "CI/CD",
    icon: "cicd",
    description: "Building automated pipelines from commit to production.",
    tools: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"],
  },
  {
    title: "Programming",
    icon: "code",
    description: "Scripting and tooling to automate everything that shouldn't be manual.",
    tools: ["Python", "Bash", "JavaScript", "TypeScript"],
  },
  {
    title: "Monitoring",
    icon: "monitor",
    description: "Full-stack observability across metrics, logs, and traces.",
    tools: ["Prometheus", "Grafana", "Datadog", "ELK", "Splunk"],
  },
  {
    title: "Security",
    icon: "shield",
    description: "Shifting security left across the software delivery lifecycle.",
    tools: ["SonarQube", "Trivy", "IAM", "Secrets Management"],
  },
];
