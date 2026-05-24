import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Database,
  Download,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import profileImage from "./assets/profile.png";

const skillStack = [
  "Python",
  "Django",
  "Django REST",
  "React",
  "JavaScript",
  "PostgreSQL",
  "Redis",
  "JWT Auth",
];

const projectCards = [
  {
    title: "School Management System",
    type: "Flagship Build",
    description:
      "A full workflow platform for students, teachers, attendance, fees, exams, and reporting with secure role-based flows.",
    tech: ["Django", "DRF", "React", "PostgreSQL"],
  },
  {
    title: "Asset Management System",
    type: "Operations Platform",
    description:
      "An enterprise-ready asset tracking product with dashboards, lifecycle status, allocation flows, and admin controls.",
    tech: ["Django API", "React", "RBAC", "Analytics"],
  },
  {
    title: "Cattle Monitoring Alerts",
    type: "Automation Engine",
    description:
      "A backend-first alert system for sensor streams, behavioral logic, health signals, and notification workflows.",
    tech: ["Python", "Redis", "PostgreSQL", "Scheduling"],
  },
];

const experiencePoints = [
  "Developing scalable REST APIs and backend services.",
  "Designing business logic that supports real production workflows.",
  "Integrating React frontends with secure API-driven systems.",
  "Improving database structure, auth flows, and operational stability.",
];

const contactItems = [
  { icon: Mail, label: "Email", value: "vipul70067007@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8793770497" },
  { icon: MapPin, label: "Location", value: "India" },
];

export default function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendState, setSendState] = useState({
    status: "idle",
    text: "",
  });

  useEffect(() => {
    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setPointer({ x, y });
    };

    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  const sceneStyle = {
    transform: `rotateX(${pointer.y * -4}deg) rotateY(${pointer.x * 7}deg)`,
  };

  const orbStyle = {
    transform: `translate3d(${pointer.x * 18}px, ${pointer.y * 18}px, 0)`,
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSendState({
        status: "error",
        text: "Please fill in your name, email, and message.",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const toEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL;

    if (!serviceId || !templateId || !publicKey || !toEmail) {
      setSendState({
        status: "error",
        text: "Contact form is not configured yet. Add the EmailJS values in your .env file.",
      });
      return;
    }

    try {
      setSendState({
        status: "sending",
        text: "Sending your message...",
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_email: toEmail,
          reply_to: formData.email,
        },
        {
          publicKey,
        }
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSendState({
        status: "success",
        text: "Message sent successfully. You should receive it in your email.",
      });
    } catch (error) {
      setSendState({
        status: "error",
        text: "Message could not be sent right now. Please try again in a moment.",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1d3d74_0%,_#09111f_45%,_#04070d_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-cyan-400/18 blur-3xl" style={orbStyle} />
        <div className="absolute right-[6%] top-[32rem] h-72 w-72 rounded-full bg-blue-500/16 blur-3xl" />
        <div className="absolute bottom-12 left-1/3 h-64 w-64 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-white/10 text-sm font-semibold tracking-[0.35em] text-cyan-200 shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              VS
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Portfolio
              </p>
              <h1 className="text-lg font-semibold text-white">Vipul Singh</h1>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Stack</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/12 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
          >
            Let&apos;s Build
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-16 md:px-10"
        >
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/8 px-4 py-2 text-sm text-cyan-100/90 backdrop-blur">
                <Sparkles size={16} />
                Full Stack Developer with product-minded backend depth
              </div>

              <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                Building systems that feel
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">
                  alive, layered, and production ready.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                I design and ship full stack platforms with Django, DRF, React,
                and PostgreSQL, turning complex business workflows into products
                that are fast, maintainable, and visually sharp.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-slate-950 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,255,255,0.18)]"
                >
                  Explore Projects <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:vipul70067007@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-white/12"
                >
                  Start a Conversation <Mail size={18} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-chip"
                >
                  <Globe size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vipul-kumar-singh-511277128/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-chip"
                >
                  <Globe size={16} />
                  LinkedIn
                </a>
                <a href="#contact" className="glass-chip">
                  <Download size={16} />
                  Resume Ready
                </a>
              </div>
            </div>

            <div className="relative perspective-[1800px]">
              <div
                className="hero-scene relative mx-auto aspect-square max-w-[540px] transition-transform duration-300 ease-out"
                style={sceneStyle}
              >
                <div className="panel-back absolute inset-[8%] rounded-[2.5rem] border border-cyan-200/20 bg-white/8 backdrop-blur-xl" />
                <div className="panel-floor absolute bottom-[10%] left-[9%] right-[9%] h-40 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-white/8 to-blue-500/15 blur-[2px]" />

                <div className="stat-card absolute left-0 top-[14%] w-44">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                    Current Role
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Software Developer
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Shipping business systems at A3 Services.
                  </p>
                </div>

                <div className="stat-card absolute right-0 top-[8%] w-40">
                  <p className="text-4xl font-semibold text-white">2+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-300">
                    Years building live apps
                  </p>
                </div>

                <div className="profile-stage absolute left-1/2 top-1/2 flex h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.20),rgba(255,255,255,0.06))] shadow-[0_30px_90px_rgba(8,15,30,0.45)] backdrop-blur-xl">
                  <div className="absolute inset-4 rounded-[2rem] border border-cyan-200/20" />
                  <div className="absolute -bottom-7 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-2xl" />
                  <img
                    src={profileImage}
                    alt="Vipul Singh"
                    className="relative z-10 h-[88%] w-[88%] rounded-[2rem] object-cover object-top shadow-[0_30px_80px_rgba(5,10,20,0.55)]"
                  />
                </div>

                <div className="stat-card absolute bottom-[13%] left-[6%] w-48">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <Database size={18} />
                    <span className="text-xs uppercase tracking-[0.35em]">
                      Backend Focus
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    APIs, auth, database design, automation, and production
                    logic.
                  </p>
                </div>

                <div className="stat-card absolute bottom-[8%] right-[8%] w-44">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <Code2 size={18} />
                    <span className="text-xs uppercase tracking-[0.35em]">
                      Frontend Edge
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Responsive React interfaces with stronger visual presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel p-8 md:p-10">
              <p className="section-label">About</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                I enjoy turning heavy workflows into clear digital experiences.
              </h3>
              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                My work sits at the intersection of backend reliability and
                thoughtful frontend delivery. I build tools for real operations,
                from school platforms to automation systems, and I care about
                both the business logic underneath and the way the product feels
                in someone&apos;s hands.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel tilt-panel p-8">
                <Briefcase className="text-cyan-200" size={28} />
                <h4 className="mt-5 text-2xl font-semibold text-white">
                  Product Thinking
                </h4>
                <p className="mt-4 leading-7 text-slate-300">
                  I like systems that solve real team problems, not just demo
                  screens.
                </p>
              </div>
              <div className="glass-panel tilt-panel p-8">
                <Database className="text-cyan-200" size={28} />
                <h4 className="mt-5 text-2xl font-semibold text-white">
                  Data & APIs
                </h4>
                <p className="mt-4 leading-7 text-slate-300">
                  Strong comfort with API design, relational data, auth, and
                  backend rules.
                </p>
              </div>
              <div className="glass-panel tilt-panel p-8">
                <Code2 className="text-cyan-200" size={28} />
                <h4 className="mt-5 text-2xl font-semibold text-white">
                  Frontend Delivery
                </h4>
                <p className="mt-4 leading-7 text-slate-300">
                  Clean React builds with attention to flow, spacing, and
                  interaction polish.
                </p>
              </div>
              <div className="glass-panel tilt-panel p-8">
                <MapPin className="text-cyan-200" size={28} />
                <h4 className="mt-5 text-2xl font-semibold text-white">
                  Based in India
                </h4>
                <p className="mt-4 leading-7 text-slate-300">
                  Working across modern web products with a full stack mindset.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Stack</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                The tools behind the builds
              </h3>
            </div>
            <p className="max-w-xl text-slate-300">
              A backend-heavy toolkit with enough frontend fluency to make the
              final product feel complete.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillStack.map((skill, index) => (
              <div
                key={skill}
                className="skill-card"
                style={{ transform: `translateZ(${(index % 4) * 8}px)` }}
              >
                <span className="text-sm uppercase tracking-[0.32em] text-cyan-200/65">
                  0{index + 1}
                </span>
                <h4 className="mt-6 text-2xl font-semibold text-white">
                  {skill}
                </h4>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Projects</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                Systems shaped like products
              </h3>
            </div>
            <p className="max-w-xl text-slate-300">
              A few builds that reflect how I approach scale, clarity, and
              operations.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {projectCards.map((project, index) => (
              <article
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100">
                  {project.type}
                </span>
                <h4 className="mt-7 text-3xl font-semibold text-white">
                  {project.title}
                </h4>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="glass-panel p-8 md:p-10">
            <p className="section-label">Experience</p>
            <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Shipping dependable software at A3 Services
            </h3>
            <p className="mt-6 text-lg text-cyan-100">Software Developer</p>
            <p className="mt-2 text-slate-300">Full Stack Development</p>
          </div>

          <div className="glass-panel p-8 md:p-10">
            <div className="space-y-5">
              {experiencePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/6 px-5 py-5"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                  <p className="leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="glass-panel grid gap-10 p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <p className="section-label">Contact</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                If you&apos;re building something real, let&apos;s talk.
              </h3>
              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                I&apos;m interested in teams and products where strong backend
                architecture and polished frontend delivery both matter.
              </p>

              <div className="mt-10 space-y-4">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/6 px-5 py-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                        {label}
                      </p>
                      <p className="mt-1 text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-input"
              />
              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-input resize-none"
              />
              {sendState.text ? (
                <p
                  className={`text-sm ${
                    sendState.status === "success"
                      ? "text-emerald-300"
                      : sendState.status === "error"
                        ? "text-rose-300"
                        : "text-cyan-100"
                  }`}
                >
                  {sendState.text}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={sendState.status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-medium text-slate-950 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,255,255,0.18)]"
              >
                {sendState.status === "sending" ? "Sending..." : "Send Message"} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Vipul Singh. Crafted with depth, motion, and modern React.
      </footer>
    </div>
  );
}
