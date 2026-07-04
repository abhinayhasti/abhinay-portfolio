export interface Experience {
  role: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    role: "Sr. Cloud Ops Engineer",
    company: "SAGE",
    duration: "Apr 2025 — Present",
    summary:
      "Supporting cloud infrastructure and application delivery end-to-end — from development and testing through production — with a focus on Kubernetes operations, secure AWS practices, and observability.",
    achievements: [
      "Designed and built application infrastructure from client requirements through production, improving deployment reliability and helping meet client SLAs",
      "Built GitHub Actions workflows that build Docker images, push to Artifactory, and deploy to Kubernetes via ArgoCD for continuous delivery",
      "Managed Kubernetes cluster configuration — node groups, auto-scaling, network policies — improving performance and strengthening security on AWS",
      "Implemented a Filebeat daemonset shipping pod logs to ELK with Kibana dashboards, improving log visibility and troubleshooting speed",
      "Automated Selenium test execution on dynamic Kubernetes pods using a Helm-deployed Selenium Grid, accelerating test coverage",
    ],
    technologies: ["AWS", "Kubernetes", "GitHub Actions", "ArgoCD", "Terraform", "Helm", "Docker", "ELK", "OpenShift"],
  },
  {
    role: "DevOps Engineer",
    company: "Knight Frank",
    duration: "Feb 2022 — Mar 2025",
    summary:
      "Supported cloud infrastructure and application delivery across AWS, Azure, and Kubernetes for a global real estate and financial services organization, owning CI/CD, IaC, and production release reliability.",
    achievements: [
      "Established a GitLab CI/CD pipeline that automated builds and deployments, cutting release cycle time by 40%",
      "Deployed Docker images to AKS using Helm and Terraform, streamlining releases and reducing manual configuration errors",
      "Developed reusable Terraform modules and standardized GitLab pipeline scripts to improve consistency across projects",
      "Configured Prometheus alerting integrated with Grafana and Azure Monitor for proactive threshold-breach notifications",
      "Developed and ran an Ansible playbook to upgrade the AKS cluster while minimizing downtime",
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "OpenShift", "GitLab CI", "Jenkins", "Terraform", "Ansible", "Helm", "Splunk", "Prometheus", "Grafana"],
  },
  {
    role: "DevOps Engineer",
    company: "Omega Healthcare Pvt. Ltd.",
    duration: "Jul 2017 — Jan 2022",
    summary:
      "Operated a live, HIPAA-regulated healthcare platform — migrating legacy workloads to AWS, maintaining CI/CD pipelines, and deploying microservices while keeping production stable and compliant.",
    achievements: [
      "Migrated legacy on-premise infrastructure and applications to AWS, reducing operational costs and improving scalability",
      "Automated Kubernetes deployments with Helm and ArgoCD, including HPA scaling via KEDA on custom and CPU-based metrics",
      "Configured Istio service mesh (gateways, virtual services, routing rules) to manage microservice-to-microservice communication",
      "Embedded SAST and DAST scanning into the automated pipeline for security checks at build and post-deployment stages",
      "Wrote Python automation scripts that reduced manual deployment effort across multiple microservices",
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "EKS", "Terraform", "Jenkins", "SonarQube", "Docker", "Istio", "Python", "Prometheus"],
  },
];
