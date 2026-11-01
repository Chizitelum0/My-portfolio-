// ✏️ All site content lives here. Items marked TODO are placeholders – replace them.

export const profile = {
  name: "Chizitelum",
  role: "Backend & database engineer",
  headline: "Backend engineer building reliable APIs, databases, and business systems.",
  bio: "I'm focused on backend engineering and the foundations behind dependable software: APIs, databases, transaction processing, and business systems. I learn by building practical projects, improving their architecture, and documenting the decisions along the way.",
  email: "chizitelumemma0@gmail.com",
  location: "Enugu, Nigeria",
  formEndpoint: "https://api.web3forms.com/submit",
  accessKey: import.meta.env.VITE_W3F_KEY,
};

export const stats = [
  { value: "TypeScript", label: "Main language" },
  { value: "PostgreSQL", label: "Core database" },
  { value: "Solo", label: "Builder" },
];

export const about = [
  { icon: "ShieldCheck", title: "Correctness first", desc: "Constraints, transactions and tests before features." },
  { icon: "Layers", title: "Multi-tenancy", desc: "Tenant isolation designed in from the schema up." },
  { icon: "Database", title: "Financial infrastructure", desc: "Ledgers, balances and audit-friendly data models." },
];

export const stack = ["TypeScript", "JavaScript", "Node.js", "Fastify", "Express", "PostgreSQL", "Supabase", "React"];

export const skills = [
  { group: "Languages", items: [
    { name: "JavaScript", tag: "Currently using" },
    { name: "TypeScript", tag: "Currently using" },
    { name: "Go", tag: "Exploring" },
    { name: "Python", tag: "Exploring" } ] },
  { group: "Backend & data", items: [
    { name: "Node.js", tag: "Currently using" },
    { name: "Fastify / Express", tag: "Working with" },
    { name: "PostgreSQL", tag: "Working with" },
    { name: "Supabase", tag: "Working with" } ] },
  { group: "Frontend", items: [{ name: "React", tag: "Working with" }] },
];

// Projects 

export const projects = [
  {
    title: "POS Transaction App",
    category: "Backend",
    status: "Under Development",
    desc: "A point-of-sale application for products, checkout, transactions, and reporting.",
    metric: "Node.js · Express · MongoDB",
    link: "https://github.com/Chizitelum0/POS-Transaction-App",
  },
  {
    title: "Business Management Platform",
    category: "Backend",
    status: "Under Development",
    desc: "A private, operations-focused platform being developed to help businesses manage inventory, suppliers, purchasing, staff, and everyday workflows.",
    metric: "Business operations · Backend & data architecture",
    private: true,
  },
  {
    title: "Multi-tenant Ledger API",
    category: "Backend",
    status: "Planned",
    desc: "A planned financial backend with transaction integrity and tenant isolation.",
    metric: "Node.js · PostgreSQL",
  },
  {
    title: "Admin Dashboard",
    category: "Frontend",
    status: "Planned",
    desc: "A planned dashboard for business operations and reporting.",
    metric: "React · TypeScript",
  },
];

// service
export const services = [
  { icon: "Layers", title: "Multi-tenant backend architecture", desc: "Planning tenant isolation, data models and API boundaries so the system stays correct as it grows.", big: true },
  { icon: "Server", title: "API development", desc: "Fastify, Express and Node.js services." },
  { icon: "Database", title: "PostgreSQL & Supabase", desc: "Schemas, migrations, RLS and queries." },
  { icon: "ShieldCheck", title: "Correctness reviews", desc: "Finding bugs in money-handling code before users do." },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/chizitelum0" },
  { label: "X", href: "https://x.com/CHIZITELUM_CE" },
];