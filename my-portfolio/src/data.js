// ✏️ All site content lives here. Items marked TODO are placeholders – replace them.

export const profile = {
  name: "Chizitelum",
  role: "Backend & database engineer",
  headline: "Backend engineer and Database engineer.",
  bio: "I'm a backend-focused engineer building secure, scalable and reliable systems: APIs, databases, transaction processing and ledgers. I'm currently building a POS app and a Business Management Platform, with the goal of solving real financial problems for underserved businesses. I learn by building and documenting my decisions.",
  email: "you@example.com", // TODO
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
    { name: "JavaScript", level: 75, tag: "Intermediate" },
    { name: "TypeScript", level: 70, tag: "Intermediate" },
    { name: "Go", level: 10, tag: "Learning next" },
    { name: "Python", level: 10, tag: "Learning next" } ] },
  { group: "Backend & data", items: [
    { name: "Node.js", level: 75, tag: "Intermediate" },
    { name: "Fastify / Express", level: 70, tag: "Intermediate" },
    { name: "PostgreSQL", level: 75, tag: "Intermediate" },
    { name: "Supabase", level: 70, tag: "Intermediate" } ] },
  { group: "Frontend", items: [{ name: "React", level: 50, tag: "Basic" }] },
];

// TODO: add complete, pending, not started and deployed. add later
export const projects = [
  { title: "Multi-tenant ledger API", category: "Backend", desc: "Double-entry ledger with per-tenant isolation.", metric: "Fastify · PostgreSQL", link: "https://github.com/chizitelum0"},
  { title: "Tenant-safe schema design", category: "Database", desc: "Row-level security patterns on Supabase.", metric: "Supabase · RLS", link: "https://github.com/chizitelum0" },
  { title: "Payments service POS", category: "Backend", desc: "Idempotent payment processing with retries.", metric: "Node.js · Express", link: "https://github.com/chizitelum0" },
  { title: "Admin dashboard", category: "Frontend", desc: "React dashboard over the ledger API.", metric: "React · TypeScript", link: "https://github.com/chizitelum0" },
];
// service
export const services = [
  { icon: "Layers", title: "Multi-tenant backend architecture", desc: "Planning tenant isolation, data models and API boundaries so the system stays correct as it grows.", big: true },
  { icon: "Server", title: "API development", desc: "Fastify, Express and Node.js services." },
  { icon: "Database", title: "PostgreSQL & Supabase", desc: "Schemas, migrations, RLS and queries." },
  { icon: "ShieldCheck", title: "Correctness reviews", desc: "Finding bugs in money-handling code before users do." },
];

// Testimonals
export const testimonials = [
  { name: "MY DAD", role: "Customer", quote: "Make sure your foundations are as solid as your logic, because the backend holds the whole house up.", result: "Result or metric", photo: "src/assets/client1.jpg" },
  { name: "CHIZITELUM.me", role: "Customer", quote: "Build for scale: Just like a good database schema, design your life to handle future growth without crashing.", result: "Result or metric", photo: "src/assets/client2.jpg" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/chizitelum0" },
  { label: "X", href: "https://x.com/CHIZITELUM_CE" },
];