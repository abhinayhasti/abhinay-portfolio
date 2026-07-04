export interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasArchitectureDiagram?: boolean;
}

// Drawn from real work across SAGE, Knight Frank, and Omega Healthcare.
// TODO: swap githubUrl/liveUrl for links to public repos or write-ups where available.
export const projects: Project[] = [
  {
    title: "GitOps Delivery Platform on EKS",
    tagline: "Kubernetes • GitHub Actions • ArgoCD • Helm",
    description:
      "CI/CD platform that builds Docker images via GitHub Actions, pushes them to Artifactory, and deploys to Kubernetes through ArgoCD. Added a Filebeat → ELK → Kibana logging pipeline and a Helm-deployed Selenium Grid for automated test execution on dynamic pods.",
    technologies: ["Kubernetes", "AWS", "GitHub Actions", "ArgoCD", "Helm", "ELK", "Artifactory"],
    githubUrl: "https://github.com/abhinayhasti",
    hasArchitectureDiagram: true,
  },
  {
    title: "Enterprise AKS Platform & CI/CD Rollout",
    tagline: "Azure • AKS • GitLab CI • Terraform",
    description:
      "GitLab CI/CD pipeline automating builds and deployments end-to-end, cutting release cycle time by 40%. Docker images built and pushed to Azure Container Registry, then deployed to AKS using reusable Terraform modules and Helm charts.",
    technologies: ["Azure", "AKS", "GitLab CI", "Terraform", "Helm", "Docker"],
    githubUrl: "https://github.com/abhinayhasti",
    hasArchitectureDiagram: true,
  },
  {
    title: "Healthcare Cloud Migration (HIPAA)",
    tagline: "AWS • Terraform • Istio • Security Scanning",
    description:
      "Migrated legacy on-premise infrastructure to AWS for a HIPAA-regulated healthcare platform, provisioning resources with Terraform and managing state in S3/DynamoDB. Configured an Istio service mesh for microservice traffic and embedded SAST/DAST scanning into the deployment pipeline.",
    technologies: ["AWS", "Terraform", "Istio", "Docker", "SonarQube", "Python"],
    githubUrl: "https://github.com/abhinayhasti",
    hasArchitectureDiagram: true,
  },
];
