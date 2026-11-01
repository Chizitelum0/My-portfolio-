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

// Engineering areas currently being explored and developed.
export const services = [
  { icon: "Layers", title: "Backend architecture", desc: "Designing clear service boundaries, data models, and maintainable backend structures.", big: true },
  { icon: "Server", title: "API design & development", desc: "Building and learning to structure HTTP APIs with Node.js, Express, and Fastify." },
  { icon: "Database", title: "Database design", desc: "Working with relational schemas, queries, migrations, and Supabase." },
  { icon: "ShieldCheck", title: "Transaction correctness", desc: "Learning to model reliable transaction flows, validation, and audit-friendly records." },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/chizitelum0" },
  { label: "X", href: "https://x.com/CHIZITELUM_CE" },
];