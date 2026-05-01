// lib/careers-data.ts

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  employment: string;
  salary?: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
  niceToHave?: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "market-research-data-analyst",
    title: "Market Research & Data Analyst",
    department: "Research & Analytics",
    location: "Jaipur, Rajasthan",
    type: "In-House",
    employment: "Full Time",
    salary: "Rs. 30,000/month",
    posted: "2025-04-01",
    summary:
      "Work on structured research and data analysis to generate insights that support strategic business decisions.",
    responsibilities: [
      "Conduct in-depth market and industry research",
      "Analyze datasets to identify patterns, trends, and insights",
      "Prepare structured reports and presentations",
      "Support business strategy with data-backed recommendations",
      "Work across market research, business research, and analytics projects",
    ],
    requirements: [
      "1–3 years of experience in research or data analysis",
      "Strong analytical and problem-solving skills",
      "Proficiency in Excel, data analysis tools, or basic statistical methods",
      "Ability to structure insights into clear reports",
      "Strong attention to detail and logical thinking",
    ],
    whatWeOffer: [
      "Exposure to real-world business problems and decision-making",
      "Opportunity to work across industries and domains",
      "Structured learning and growth environment",
      "Collaborative and insight-driven work culture",
    ],
  },
  {
    id: "python-developer",
    title: "Python Developer",
    department: "Technology",
    location: "Jaipur, Rajasthan",
    type: "In-House",
    employment: "Full Time",
    salary: "As per industry standards",
    posted: "2025-04-01",
    summary:
      "Build scalable systems and applications that support business operations, analytics, and digital solutions.",
    responsibilities: [
      "Design and develop backend systems and APIs",
      "Build automation scripts and data pipelines",
      "Develop web applications using frameworks like Django or FastAPI",
      "Ensure performance, scalability, and reliability of applications",
      "Collaborate with cross-functional teams for implementation",
    ],
    requirements: [
      "2–4 years of experience in Python development",
      "Strong understanding of Django, FastAPI, or similar frameworks",
      "Experience with databases, APIs, and backend architecture",
      "Problem-solving mindset with structured coding practices",
      "Understanding of scalability and performance optimization",
    ],
    whatWeOffer: [
      "Opportunity to work on scalable and real-world applications",
      "Exposure to data-driven and backend systems development",
      "Learning-focused and growth-oriented environment",
      "Collaborative team with clear processes and structure",
    ],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    department: "Growth & Sales",
    location: "Jaipur, Rajasthan",
    type: "In-House",
    employment: "Full Time",
    salary: "As per industry standards + incentives",
    posted: "2025-04-01",
    summary:
      "Drive business growth by building relationships, identifying opportunities, and expanding client partnerships.",
    responsibilities: [
      "Identify and reach out to potential clients and partners",
      "Present and pitch IBV Technologies' services",
      "Build and maintain strong client relationships",
      "Understand client needs and align solutions accordingly",
      "Support business growth through consistent pipeline development",
    ],
    requirements: [
      "1–3 years of experience in business development or sales",
      "Strong communication and interpersonal skills",
      "Ability to understand business needs and position solutions",
      "Self-driven and target-oriented approach",
      "Basic understanding of consulting, digital, or tech services",
    ],
    whatWeOffer: [
      "Opportunity to directly contribute to business growth",
      "Exposure to multiple industries and client types",
      "Performance-driven growth and incentives",
      "Structured and supportive work environment",
    ],
  },
];

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find((j) => j.id === id);
}