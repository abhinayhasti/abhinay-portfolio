export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  diagram?: { src: string; alt: string };
  caseStudy: {
    intro: string;
    challenge: string;
    approach: string[];
    impact: string[];
  };
}

// Drawn from real work across SAGE, Knight Frank, and Omega Healthcare.
export const projects: Project[] = [
  {
    slug: "gitops-delivery-platform-eks",
    title: "GitOps Delivery Platform on EKS",
    tagline: "Kubernetes • GitHub Actions • ArgoCD • Helm",
    description:
      "CI/CD platform that builds Docker images via GitHub Actions, pushes them to Artifactory, and deploys to Kubernetes through ArgoCD. Added a Filebeat → ELK → Kibana logging pipeline and a Helm-deployed Selenium Grid for automated test execution on dynamic pods.",
    technologies: ["Kubernetes", "AWS", "GitHub Actions", "ArgoCD", "Helm", "ELK", "Artifactory"],
    diagram: {
      src: "/diagrams/gitops-eks.svg",
      alt: "GitOps delivery platform: GitHub Actions builds images to Artifactory, ArgoCD syncs Helm manifests to EKS, and logs flow through Filebeat and ELK into Kibana.",
    },
    caseStudy: {
      intro:
        "A delivery platform for containerized services on AWS EKS, built around the GitOps model: git is the single source of truth, and the cluster continuously converges to what's declared in the config repo.",
      challenge:
        "Deployments were manual and inconsistent — engineers ran kubectl and Helm commands by hand, environments drifted from what was in git, and there was no reliable way to know what version was running where. Test infrastructure was a static bottleneck shared across teams.",
      approach: [
        "Built GitHub Actions pipelines that build, test, and package every service into a Docker image and publish it to Artifactory with immutable tags.",
        "Moved all deployment configuration into a dedicated config repo of Helm values; pipelines promote a release by bumping an image tag in git rather than touching the cluster.",
        "Deployed ArgoCD to watch the config repo and continuously sync EKS to the declared state, making rollbacks a git revert.",
        "Shipped a Filebeat DaemonSet feeding an ELK stack, with Kibana dashboards and alerts giving every team self-serve access to their service logs.",
        "Replaced static test infrastructure with a Helm-deployed Selenium Grid that scales browser pods on demand and tears them down after each run.",
      ],
      impact: [
        "Every deployment became auditable and reversible through git history alone.",
        "Environment drift disappeared — ArgoCD flags and heals any divergence from the declared state.",
        "Test capacity stopped being a shared bottleneck; grids scale with the workload and cost nothing when idle.",
      ],
    },
  },
  {
    slug: "enterprise-aks-platform",
    title: "Enterprise AKS Platform & CI/CD Rollout",
    tagline: "Azure • AKS • GitLab CI • Terraform",
    description:
      "GitLab CI/CD pipeline automating builds and deployments end-to-end, cutting release cycle time by 40%. Docker images built and pushed to Azure Container Registry, then deployed to AKS using reusable Terraform modules and Helm charts.",
    technologies: ["Azure", "AKS", "GitLab CI", "Terraform", "Helm", "Docker"],
    diagram: {
      src: "/diagrams/aks-cicd.svg",
      alt: "Enterprise AKS platform: GitLab CI builds Docker images into Azure Container Registry and deploys to AKS with Helm, on infrastructure provisioned by reusable Terraform modules.",
    },
    caseStudy: {
      intro:
        "An end-to-end delivery platform on Azure Kubernetes Service, where both the infrastructure and the release process are fully automated — from merge request to running workload.",
      challenge:
        "Releases involved multiple manual handoffs between development and operations, stretching cycle time and making deployments a scheduled event rather than a routine. Infrastructure was provisioned ad hoc, so no two environments were quite alike.",
      approach: [
        "Designed GitLab CI pipelines covering build, test, image publish, and deployment, so a merged change flows to the cluster without manual steps.",
        "Standardized container builds pushing to Azure Container Registry with per-commit image tags.",
        "Wrote reusable, versioned Terraform modules for AKS clusters, ACR, and networking, making every environment reproducible from code.",
        "Packaged services as Helm charts with environment-specific values, deployed by the pipeline via helm upgrade.",
        "Set up cluster autoscaling with HPA and node pools so capacity follows the workload.",
      ],
      impact: [
        "Release cycle time dropped by 40% once manual handoffs were removed.",
        "New environments spin up from Terraform modules in hours instead of weeks.",
        "Deployments became routine and low-risk — small, frequent, and reversible.",
      ],
    },
  },
  {
    slug: "hipaa-cloud-migration",
    title: "Healthcare Cloud Migration (HIPAA)",
    tagline: "AWS • Terraform • Istio • Security Scanning",
    description:
      "Migrated legacy on-premise infrastructure to AWS for a HIPAA-regulated healthcare platform, provisioning resources with Terraform and managing state in S3/DynamoDB. Configured an Istio service mesh for microservice traffic and embedded SAST/DAST scanning into the deployment pipeline.",
    technologies: ["AWS", "Terraform", "Istio", "Docker", "SonarQube", "Python"],
    diagram: {
      src: "/diagrams/hipaa-migration.svg",
      alt: "HIPAA cloud migration: on-premise workloads migrated into a private AWS VPC with an Istio service mesh, provisioned by Terraform with S3/DynamoDB remote state, gated by SAST and DAST scanning.",
    },
    caseStudy: {
      intro:
        "A lift-and-modernize migration of a HIPAA-regulated healthcare platform from an on-premise data center to AWS, where compliance controls had to be designed into the platform rather than bolted on.",
      challenge:
        "The legacy environment mixed monolithic applications with databases holding protected health information. Everything about the target platform — network isolation, encryption, audit trails, release gates — had to satisfy HIPAA requirements from day one, while the migration itself couldn't disrupt a live healthcare business.",
      approach: [
        "Provisioned the entire AWS footprint with Terraform — private VPC, subnets, compute, and managed data stores — with remote state in S3 and DynamoDB locking for safe team collaboration.",
        "Containerized workloads and ran them behind an Istio service mesh, giving every service-to-service call mTLS encryption and explicit traffic policy.",
        "Kept protected health information in encrypted managed data stores inside private subnets, with no public ingress paths.",
        "Embedded SAST (SonarQube) and DAST scanning as mandatory gates in the deployment pipeline, so nothing reaches production unscanned.",
        "Wired CloudTrail and CloudWatch into a central audit trail covering both infrastructure changes and application behavior.",
      ],
      impact: [
        "The platform passed HIPAA compliance review with controls implemented as code, not documentation.",
        "Security scanning shifted left — vulnerabilities surface in the pipeline instead of in production.",
        "Infrastructure changes became fully auditable and reproducible through Terraform state and git history.",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
