import { useEffect, useRef, useState } from "react";
import { profile, stats, about, stack, skills, projects, services, testimonials, socials } from "./data";

const NAV = ["about", "skills", "projects", "services", "testimonials", "contact"];

/* ---------- inline icons (no library needed) ---------- */
const Svg = ({ className = "h-5 w-5", children }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const ArrowDown = (p) => <Svg {...p}><path d="M12 5v14M19 12l-7 7-7-7" /></Svg>;
const ChevronLeft = (p) => <Svg {...p}><path d="M15 18l-6-6 6-6" /></Svg>;
const ChevronRight = (p) => <Svg {...p}><path d="M9 18l6-6-6-6" /></Svg>;
const Mail = (p) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Svg>;
const MapPin = (p) => <Svg {...p}><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>;
const Database = (p) => <Svg {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></Svg>;
const Server = (p) => <Svg {...p}><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></Svg>;
const Layers = (p) => <Svg {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></Svg>;
const ShieldCheck = (p) => <Svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></Svg>;
const Github = (p) => <Svg {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></Svg>;
const XIcon = (p) => <Svg {...p}><path d="M4 4l16 16M20 4L4 20" /></Svg>;

const ICONS = { Database, Server, Layers, ShieldCheck };
const Icon = ({ name, className = "h-5 w-5" }) => { const I = ICONS[name]; return <I className={className} />; };
const SocialIcon = ({ label }) => (label === "GitHub" ? <Github /> : <XIcon />);

/* ---------- hooks & helpers ---------- */
function useScrollSpy(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); o.disconnect(); } }, { threshold: 0.15 });
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>{children}</div>;
}

const Section = ({ id, title, children }) => (
  <section id={id} className="mx-auto max-w-5xl px-6 py-20">
    <h2 className="mb-10 text-3xl font-extrabold text-white">{title}</h2>
    {children}
  </section>
);

const Arrow = ({ onClick, label, children }) => (
  <button onClick={onClick} aria-label={label} className="glass glow flex h-9 w-9 items-center justify-center rounded-full">{children}</button>
);

/* ---------- sections ---------- */
function Navbar() {
  const active = useScrollSpy(NAV);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "glass" : ""}`}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-extrabold">{"</>"} {profile.name}</a>
        <ul className="hidden gap-6 text-sm sm:flex">
          {NAV.map((id) => (
            <li key={id}><a href={`#${id}`} className={`capitalize transition hover:text-white ${active === id ? "text-white" : "text-steel"}`}>{id}</a></li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">Hire me</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto grid min-h-screen max-w-5xl items-center gap-12 px-6 pt-24 pb-16 md:grid-cols-2">
      <div>
        <p className="glass mb-5 inline-block rounded-full px-4 py-1.5 text-sm text-steel">{profile.role} · {profile.location}</p>
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">{profile.headline}</h1>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-white px-6 py-3 font-semibold text-black">See my work</a>
          <a href="#contact" className="glass glow rounded-full px-6 py-3 font-semibold">Get in touch</a>
        </div>
        <dl className="mt-12 flex">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/15 px-5 first:border-0 first:pl-0">
              <dt className="text-xl font-extrabold">{s.value}</dt><dd className="text-sm text-steel">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="spin-border mx-auto w-full max-w-sm">
        <div className="flex aspect-square items-center justify-center rounded-[1.4rem] bg-black p-6">
          <img src="/public/logo.jpg" alt={`${profile.name} logo`} className="h-full w-full object-contain" />
        </div>
      </div>
      <a href="#about" aria-label="Scroll down" className="bounce-y absolute bottom-6 left-1/2 text-steel"><ArrowDown /></a>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="glass glow rounded-2xl p-6">
          <p className="leading-relaxed text-white/90">{profile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-sm text-steel">{t}</span>)}
          </div>
        </Reveal>
        <div className="grid gap-4">
          {about.map((a) => (
            <Reveal key={a.title} className="glass glow flex gap-4 rounded-2xl p-5">
              <Icon name={a.icon} className="mt-1 h-6 w-6 shrink-0 text-white" />
              <div><h3 className="font-semibold">{a.title}</h3><p className="text-sm text-steel">{a.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills & technologies">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((g) => (
          <Reveal key={g.group} className="glass glow rounded-2xl p-6">
            <h3 className="mb-4 font-semibold">{g.group}</h3>
            {g.items.map((s) => (
              <div key={s.name} className="mb-4">
                <div className="mb-1 flex justify-between text-sm"><span>{s.name}</span><span className="text-steel">{s.tag}</span></div>
                <div className="h-2 rounded-full bg-white/10" role="progressbar" aria-valuenow={s.level} aria-label={s.name}>
                  <div className="h-2 rounded-full bg-gradient-to-r from-steel to-white" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const STATUS_STYLES = {
    Deployed:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    "Under Development":
      "border-blue-400/30 bg-blue-400/10 text-blue-300",
    "Not Started":
      "border-white/15 bg-white/5 text-steel",
  };
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState(0);
  const track = useRef(null);
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  const STEP = 308;
  const to = (i) => track.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
  useEffect(() => { setIdx(0); track.current?.scrollTo({ left: 0 }); }, [cat]);
  return (
    <Section id="projects" title="Projects">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full px-4 py-1.5 text-sm ${cat === c ? "bg-white text-black" : "glass"}`}>{c}</button>
        ))}
        <div className="ml-auto flex gap-2">
          <Arrow label="Previous project" onClick={() => to(Math.max(idx - 1, 0))}><ChevronLeft className="h-4 w-4" /></Arrow>
          <Arrow label="Next project" onClick={() => to(Math.min(idx + 1, list.length - 1))}><ChevronRight className="h-4 w-4" /></Arrow>
        </div>
      </div>
      <div ref={track} onScroll={(e) => setIdx(Math.round(e.currentTarget.scrollLeft / STEP))} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {list.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="glass glow w-72 shrink-0 snap-start rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${STATUS_STYLES[p.status] || STATUS_STYLES["Not Started"]
                  }`}
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-current" />
                {p.status || "Not Started"}
              </span>

              <span className="text-xs text-steel">{p.category}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/80">{p.desc}</p>
            <p className="mt-6 text-sm font-semibold">{p.metric}</p>
          </a>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {list.map((p, i) => (
          <button key={p.title} onClick={() => to(i)} aria-label={`Go to ${p.title}`} className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/30"}`} />
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <Reveal key={s.title} className={`glass glow rounded-2xl p-6 ${s.big ? "md:col-span-2 md:row-span-2 md:p-10" : ""}`}>
            <Icon name={s.icon} className={s.big ? "h-10 w-10" : "h-6 w-6"} />
            <h3 className={`mt-4 font-semibold ${s.big ? "text-3xl" : "text-lg"}`}>{s.title}</h3>
            <p className="mt-2 text-steel">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <Section id="testimonials" title="What clients say">
      <div className="glass glow grid max-w-3xl gap-6 rounded-2xl p-8 sm:grid-cols-[8rem_1fr]">
        <img src={t.photo} alt={t.name} className="h-32 w-32 rounded-2xl object-cover object-top grayscale transition duration-500 hover:grayscale-0" />
        <div>
          <p className="text-xl leading-relaxed">“{t.quote}”</p>
          <p className="mt-5 font-semibold">{t.name}</p>
          <p className="text-sm text-steel">{t.role} · {t.result}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Arrow label="Previous testimonial" onClick={() => go(-1)}><ChevronLeft className="h-4 w-4" /></Arrow>
        <Arrow label="Next testimonial" onClick={() => go(1)}><ChevronRight className="h-4 w-4" /></Arrow>
        <span className="text-sm text-steel">{i + 1} / {testimonials.length}</span>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) e.message = "Write at least 10 characters.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!profile.formEndpoint) {
      const body = encodeURIComponent(`${form.message}\n\n– ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio%20message&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, access_key: profile.accessKey, subject: "New portfolio message" }),
      });
      const data = await res.json();
      console.log("Web3Forms:", res.status, data);
      if (!data.success) throw new Error(data.message || "Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const field = "glass w-full rounded-xl px-4 py-3 outline-none placeholder:text-steel focus:border-white/50";
  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={submit} noValidate className="space-y-4">
          {["name", "email"].map((k) => (
            <div key={k}>
              <input className={field} placeholder={k === "name" ? "Your name" : "Your email"} aria-label={k} value={form[k]} onChange={set(k)} />
              {errors[k] && <p className="mt-1 text-sm text-red-300">{errors[k]}</p>}
            </div>
          ))}
          <div>
            <textarea rows="5" className={field} placeholder="Your message" aria-label="message" value={form.message} onChange={set("message")} />
            {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
          </div>
          <button disabled={status === "sending"} className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && <p role="status" className="text-green-300">Message sent. I’ll reply soon.</p>}
          {status === "error" && <p role="alert" className="text-red-300">Message failed to send. Email me directly instead.</p>}
        </form>
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="glass glow flex items-center gap-4 rounded-2xl p-6"><Mail /><div><p className="text-sm text-steel">Email</p><p>{profile.email}</p></div></a>
          <div className="glass glow flex items-center gap-4 rounded-2xl p-6"><MapPin /><div><p className="text-sm text-steel">Location</p><p>{profile.location}</p></div></div>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="glass glow flex h-12 w-12 items-center justify-center rounded-full transition hover:scale-110"><SocialIcon label={s.label} /></a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-8 text-sm sm:grid-cols-3">
        <div><p className="text-lg font-extrabold">{"</>"} {profile.name}</p><p className="mt-2 text-steel">{profile.role}</p></div>
        <div><p className="mb-2 font-semibold">Quick links</p><ul className="space-y-1 text-steel">{NAV.map((id) => <li key={id}><a href={`#${id}`} className="capitalize hover:text-white">{id}</a></li>)}</ul></div>
        <div><p className="mb-2 font-semibold">Connect</p><ul className="space-y-1 text-steel">{socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">{s.label}</a></li>)}</ul></div>
      </div>
      <p className="mx-auto mt-10 max-w-5xl text-sm text-steel">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-steel/25 blur-3xl" />
        <div className="absolute -right-32 top-[55%] h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      </div>
      <Navbar />
      <main><Hero /><About /><Skills /><Projects /><Services /><Testimonials /><Contact /></main>
      <Footer />
    </>
  );
}