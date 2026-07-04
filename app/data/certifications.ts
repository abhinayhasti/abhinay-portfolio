export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  status?: "earned" | "in-progress";
}

export const certifications: Certification[] = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation / CNCF",
    year: "2024",
    credentialUrl: "https://www.credly.com/badges/9a2c4413-0b2e-4c3a-9edc-baeddb5131e1/public_url",
    status: "earned",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (004)",
    issuer: "HashiCorp",
    year: "2024",
    credentialUrl: "https://www.credly.com/badges/12a46601-ec6f-4879-a26e-e0d571e13855/public_url",
    status: "earned",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "In progress", // TODO: not found on your resume — confirm status or remove
    status: "in-progress",
  },
];
