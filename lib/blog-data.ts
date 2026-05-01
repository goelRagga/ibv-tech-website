export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  paragraphs: string[];
  // ── Optional extended fields ──
  author?: string;
  authorRole?: string;
  authorImage?: string;
  sections?: Array<{
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
    images?: string[];
  }>;
}
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    category: "Digital Agency",
    date: "26th March 2026",
    title: "How Digital Strategy Is Reshaping the Way Businesses Compete",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "5 min read",
    excerpt:
      "Digital transformation is no longer a future ambition — it is the operating standard for businesses that want to remain relevant, competitive, and resilient.",
    paragraphs: [],
    sections: [
      {
        paragraphs: [
          "The pace at which digital tools and platforms have redefined market dynamics over the last decade has been extraordinary. Businesses that were once dominant through product quality alone are now finding that experience, speed, and digital presence are equally decisive factors in how customers choose, switch, and stay loyal.",
          "At IBV Technologies, we work with companies across industries — from retail and healthcare to finance and logistics — and the pattern is consistent: organizations that invest in a coherent digital strategy early grow faster, retain customers better, and operate more efficiently than those that approach digital as an afterthought.",
        ],
      },
      {
        heading: "Why digital strategy is no longer optional",
        paragraphs: [
          "A useful way to think about digital strategy is not as technology adoption, but as a rethinking of how value is created and delivered. This starts with understanding your customer journey end-to-end — from awareness to repeat purchase — and identifying exactly where digital tools can reduce friction, improve decision quality, or create new touchpoints.",
          "The businesses we see winning are not always the ones spending the most on technology. They are the ones being most deliberate about which capabilities to build, in what order, and how to connect those capabilities to measurable business outcomes. That discipline — more than any single platform or tool — is what separates high-performing organizations from the rest.",
          "If you are thinking about where to start, begin with your data. Most businesses are sitting on more customer and operational data than they are using. Getting that data organised, accessible, and connected to decisions is often the highest-leverage early investment in a digital transformation.",
        ],
      },
      {
        heading: "The pillars of a working digital strategy",
        paragraphs: [
          "Every successful digital strategy we have seen rests on three connected pillars: a clear understanding of the customer, a set of well-chosen platforms and tools, and a team that has both the capability and the mandate to execute. Miss any one of these and the strategy stalls — usually at the execution stage.",
          "Customer understanding means more than demographics. It means knowing exactly what your customers are trying to do at each point in their relationship with you, and where the current experience falls short. This is the foundation everything else is built on.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        ],
      },
      {
        heading: "Translating strategy into execution",
        paragraphs: [
          "Strategy without execution is just intention. The organisations that consistently close the gap between the two share a few common habits: they sequence initiatives carefully, they staff for capability not just capacity, and they measure the right things early.",
          "Sequencing matters more than most leaders realise. The temptation is always to move on multiple fronts simultaneously — to upgrade the website, launch the app, rebuild the CRM, and retrain the team all at once. In practice, this spreads resources too thin and produces incremental progress on everything rather than transformative progress on anything.",
        ],
        images: [
          "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
          "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
        ],

      },
      {
        paragraphs: [
          "The measurement question is equally important. Many businesses track activity metrics — pages visited, emails sent, features shipped — when what they really need are outcome metrics: customer acquisition cost, retention rate, revenue per channel. The former tells you what happened; the latter tells you whether it mattered.",
          "Getting this right takes time, but it is the kind of foundational work that compounds. Once you have clear outcome metrics tied to your digital initiatives, every decision gets easier — because you have a shared language for what success looks like and a way to tell quickly whether you are getting there.",
        ],
      },
    ],
  },
  {
    id: "blog-2",
    category: "Business Strategy",
    date: "26th March 2026",
    title: "The Case for Structured Thinking in High-Growth Environments",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "6 min read",
    excerpt:
      "Fast-moving environments reward action, but they can punish speed without structure. Here is how high-growth companies maintain rigour without slowing down.",
    paragraphs: [
      "There is a common belief that structure and speed are opposites — that bringing discipline to a fast-growing organisation will inevitably slow it down. In our experience working with businesses at various stages of growth, the opposite tends to be true. The absence of structure is usually what creates the drag.",
      "When a team does not have a clear decision framework, every decision gets escalated. When there is no prioritisation process, every request gets treated as urgent. When there is no common language around goals and metrics, meetings run long because people are not actually talking about the same thing. These are the friction points that accumulate silently and compound.",
      "Structured thinking does not mean bureaucracy. It means establishing lightweight but clear processes for how decisions get made, how priorities get set, and how progress gets measured. Done well, this actually accelerates execution — because people have the context and confidence to move without waiting for approval.",
      "One of the most valuable tools we help businesses implement is a simple decision-rights framework. It clarifies which decisions can be made at which level, what information is needed before deciding, and when escalation is appropriate. This alone often reduces decision latency significantly, particularly in organisations that have grown faster than their internal processes.",
      "The other area where structure delivers outsized returns is goal-setting. Many teams are working hard without shared clarity on what winning looks like this quarter. Introducing a consistent goal-setting rhythm — with clear objectives, measurable key results, and regular review cadences — creates alignment that makes coordination feel effortless rather than exhausting.",
    ],
  },
  {
    id: "blog-3",
    category: "Technology",
    date: "26th March 2026",
    title: "Choosing the Right Technology Stack for Your Business Stage",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "7 min read",
    excerpt:
      "The technology choices you make in early stages can either accelerate your growth or create technical debt that slows you down. Here is how to choose well.",
    paragraphs: [
      "One of the most consequential decisions a growing business makes is which technology platforms and tools to build on. Get it right and your technology becomes a genuine competitive advantage — enabling speed, scalability, and new capabilities. Get it wrong and it becomes a tax on every initiative, requiring constant workarounds and expensive rewrites.",
      "The most common mistake we see is choosing technology based on what is trending or what other companies are using, rather than what fits the specific context of the business. A startup with five engineers has very different needs than a scale-up with fifty. A business with highly variable demand has different infrastructure requirements than one with predictable, steady load.",
      "Before evaluating any specific tool or platform, it helps to be clear about three things: your current scale and the scale you need to reach in the next eighteen months, the technical maturity of your team, and where your real complexity lies. Is the hard problem in your data model? Your integrations? Your user experience? Different answers point to different priorities.",
      "For most businesses in the early-to-mid growth stages, the best technology choices are the ones that are well-documented, widely supported, and well-understood by the market of engineers you will be hiring. The advantage of using a proven, mainstream stack is not just about functionality — it is about the ecosystem of tooling, talent, and community knowledge that comes with it.",
      "The other principle worth holding onto is to resist premature optimisation. Many businesses build for a scale they have not yet reached, investing heavily in infrastructure complexity that they will not need for years, if ever. A far better use of early engineering time is building something that works reliably at your current scale and that is structured clearly enough to refactor as requirements evolve.",
    ],
  },
   {
    id: "blog-4",
    category: "Technology",
    date: "26th March 2026",
    title: "Choosing the Right Technology Stack for Your Business Stage",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "7 min read",
    excerpt:
      "The technology choices you make in early stages can either accelerate your growth or create technical debt that slows you down. Here is how to choose well.",
    paragraphs: [
      "One of the most consequential decisions a growing business makes is which technology platforms and tools to build on. Get it right and your technology becomes a genuine competitive advantage — enabling speed, scalability, and new capabilities. Get it wrong and it becomes a tax on every initiative, requiring constant workarounds and expensive rewrites.",
      "The most common mistake we see is choosing technology based on what is trending or what other companies are using, rather than what fits the specific context of the business. A startup with five engineers has very different needs than a scale-up with fifty. A business with highly variable demand has different infrastructure requirements than one with predictable, steady load.",
      "Before evaluating any specific tool or platform, it helps to be clear about three things: your current scale and the scale you need to reach in the next eighteen months, the technical maturity of your team, and where your real complexity lies. Is the hard problem in your data model? Your integrations? Your user experience? Different answers point to different priorities.",
      "For most businesses in the early-to-mid growth stages, the best technology choices are the ones that are well-documented, widely supported, and well-understood by the market of engineers you will be hiring. The advantage of using a proven, mainstream stack is not just about functionality — it is about the ecosystem of tooling, talent, and community knowledge that comes with it.",
      "The other principle worth holding onto is to resist premature optimisation. Many businesses build for a scale they have not yet reached, investing heavily in infrastructure complexity that they will not need for years, if ever. A far better use of early engineering time is building something that works reliably at your current scale and that is structured clearly enough to refactor as requirements evolve.",
    ],
  },
   {
    id: "blog-5",
    category: "Technology",
    date: "26th March 2026",
    title: "Choosing the Right Technology Stack for Your Business Stage",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "7 min read",
    excerpt:
      "The technology choices you make in early stages can either accelerate your growth or create technical debt that slows you down. Here is how to choose well.",
    paragraphs: [
      "One of the most consequential decisions a growing business makes is which technology platforms and tools to build on. Get it right and your technology becomes a genuine competitive advantage — enabling speed, scalability, and new capabilities. Get it wrong and it becomes a tax on every initiative, requiring constant workarounds and expensive rewrites.",
      "The most common mistake we see is choosing technology based on what is trending or what other companies are using, rather than what fits the specific context of the business. A startup with five engineers has very different needs than a scale-up with fifty. A business with highly variable demand has different infrastructure requirements than one with predictable, steady load.",
      "Before evaluating any specific tool or platform, it helps to be clear about three things: your current scale and the scale you need to reach in the next eighteen months, the technical maturity of your team, and where your real complexity lies. Is the hard problem in your data model? Your integrations? Your user experience? Different answers point to different priorities.",
      "For most businesses in the early-to-mid growth stages, the best technology choices are the ones that are well-documented, widely supported, and well-understood by the market of engineers you will be hiring. The advantage of using a proven, mainstream stack is not just about functionality — it is about the ecosystem of tooling, talent, and community knowledge that comes with it.",
      "The other principle worth holding onto is to resist premature optimisation. Many businesses build for a scale they have not yet reached, investing heavily in infrastructure complexity that they will not need for years, if ever. A far better use of early engineering time is building something that works reliably at your current scale and that is structured clearly enough to refactor as requirements evolve.",
    ],
  },
   {
    id: "blog-6",
    category: "Technology",
    date: "26th March 2026",
    title: "Choosing the Right Technology Stack for Your Business Stage",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "7 min read",
    excerpt:
      "The technology choices you make in early stages can either accelerate your growth or create technical debt that slows you down. Here is how to choose well.",
    paragraphs: [
      "One of the most consequential decisions a growing business makes is which technology platforms and tools to build on. Get it right and your technology becomes a genuine competitive advantage — enabling speed, scalability, and new capabilities. Get it wrong and it becomes a tax on every initiative, requiring constant workarounds and expensive rewrites.",
      "The most common mistake we see is choosing technology based on what is trending or what other companies are using, rather than what fits the specific context of the business. A startup with five engineers has very different needs than a scale-up with fifty. A business with highly variable demand has different infrastructure requirements than one with predictable, steady load.",
      "Before evaluating any specific tool or platform, it helps to be clear about three things: your current scale and the scale you need to reach in the next eighteen months, the technical maturity of your team, and where your real complexity lies. Is the hard problem in your data model? Your integrations? Your user experience? Different answers point to different priorities.",
      "For most businesses in the early-to-mid growth stages, the best technology choices are the ones that are well-documented, widely supported, and well-understood by the market of engineers you will be hiring. The advantage of using a proven, mainstream stack is not just about functionality — it is about the ecosystem of tooling, talent, and community knowledge that comes with it.",
      "The other principle worth holding onto is to resist premature optimisation. Many businesses build for a scale they have not yet reached, investing heavily in infrastructure complexity that they will not need for years, if ever. A far better use of early engineering time is building something that works reliably at your current scale and that is structured clearly enough to refactor as requirements evolve.",
    ],
  },
   {
    id: "blog-7",
    category: "Technology",
    date: "26th March 2026",
    title: "Choosing the Right Technology Stack for Your Business Stage",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
    readTime: "7 min read",
    excerpt:
      "The technology choices you make in early stages can either accelerate your growth or create technical debt that slows you down. Here is how to choose well.",
    paragraphs: [
      "One of the most consequential decisions a growing business makes is which technology platforms and tools to build on. Get it right and your technology becomes a genuine competitive advantage — enabling speed, scalability, and new capabilities. Get it wrong and it becomes a tax on every initiative, requiring constant workarounds and expensive rewrites.",
      "The most common mistake we see is choosing technology based on what is trending or what other companies are using, rather than what fits the specific context of the business. A startup with five engineers has very different needs than a scale-up with fifty. A business with highly variable demand has different infrastructure requirements than one with predictable, steady load.",
      "Before evaluating any specific tool or platform, it helps to be clear about three things: your current scale and the scale you need to reach in the next eighteen months, the technical maturity of your team, and where your real complexity lies. Is the hard problem in your data model? Your integrations? Your user experience? Different answers point to different priorities.",
      "For most businesses in the early-to-mid growth stages, the best technology choices are the ones that are well-documented, widely supported, and well-understood by the market of engineers you will be hiring. The advantage of using a proven, mainstream stack is not just about functionality — it is about the ecosystem of tooling, talent, and community knowledge that comes with it.",
      "The other principle worth holding onto is to resist premature optimisation. Many businesses build for a scale they have not yet reached, investing heavily in infrastructure complexity that they will not need for years, if ever. A far better use of early engineering time is building something that works reliably at your current scale and that is structured clearly enough to refactor as requirements evolve.",
    ],
  },
];

export function getBlogById(id: string): BlogPost | undefined {
  return blogPosts.find((b) => b.id === id);
}

export function getBlogSectionFormat() {
  return blogPosts.map((b) => ({
    id: parseInt(b.id.replace("blog-", "")),
    category: b.category,
    date: b.date,
    title: b.title,
    href: `/insights/blogs/${b.id}`,
    image: b.image,
  }));
}
