import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Workflow,
} from "lucide-react";

import profileImage from "./assets/profile.png";

const marketFocus = [
  "API-first SaaS",
  "Fintech & BFSI",
  "Automation",
  "Data products",
  "Cloud services",
  "Enterprise software",
];

const skillGroups = [
  {
    title: "Backend & APIs",
    icon: Code2,
    skills: ["Python", "Django", "Django REST Framework", "JWT Auth"],
  },
  {
    title: "Data & platform",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Redis", "Git", "Jira"],
  },
  {
    title: "Product-facing frontend",
    icon: Layers3,
    skills: ["React", "JavaScript"],
  },
];

const projectCards = [
  {
    number: "01",
    title: "School Management System",
    type: "Workflow platform",
    description:
      "A connected set of workflows for students, teachers, attendance, fees, exams, and reporting, with secure role-based access.",
    challenge: "Many school operations, one platform",
    tech: ["Django", "Django REST Framework", "React", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Asset Management System",
    type: "Operations platform",
    description:
      "An asset-tracking product organized around dashboards, lifecycle status, allocation flows, and administrative controls.",
    challenge: "Make asset status and ownership easier to follow",
    tech: ["Django API", "React", "Role-based access", "Analytics"],
  },
  {
    number: "03",
    title: "Cattle Monitoring Alerts",
    type: "Automation system",
    description:
      "A backend-first alert system combining sensor streams, behavioral logic, health signals, and notification workflows.",
    challenge: "Turn incoming signals into timely alerts",
    tech: ["Python", "Redis", "PostgreSQL", "Scheduling"],
  },
];

const experienceEntries = [
  {
    role: "Software Developer",
    company: "A3 Services",
    location: "Pune, Maharashtra",
    dates: "May 2023 – Present",
    highlights: [
      "Built backend features with Python and Django, including REST APIs and internal tools.",
      "Automated recurring manual work with Python scripts, improving team productivity by 30%.",
      "Integrated third-party APIs with MySQL and PostgreSQL databases for client solutions.",
      "Worked with frontend, QA, and deployment teams using Git, Jira, and Agile practices; helped manage sprint goals and deliver on time.",
    ],
  },
  {
    role: "Customer Relationship Executive",
    company: "Shriram Finance Limited",
    location: "Lucknow, Uttar Pradesh",
    dates: "February 2021 – May 2022",
    highlights: [
      "Managed relationships with 100+ customers, supporting service satisfaction and retention.",
      "Handled loan verification, document collection, and commercial vehicle financing processing.",
      "Coordinated with credit, legal, and operations teams, resolving concerns and supporting approvals and disbursals.",
      "Met sales targets, cross-sold financial products, maintained CRM records, and reported customer trends.",
    ],
  },
  {
    role: "Medical Sales Representative",
    company: "Hycure Bio Genesis",
    location: "Sultanpur, Uttar Pradesh",
    dates: "May 2016 – February 2018",
    highlights: [
      "Managed B2B relationships and achieved 120%+ of quarterly sales targets.",
      "Presented products, negotiated contracts, and closed deals; coordinated onboarding and after-sales support.",
      "Maintained CRM records, prepared weekly leadership reports, and trained new team members.",
    ],
  },
];

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendState, setSendState] = useState({ status: "idle", text: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
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
      setSendState({ status: "sending", text: "Sending your message..." });

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
        { publicKey },
      );

      setFormData({ name: "", email: "", message: "" });
      setSendState({
        status: "success",
        text: "Message sent successfully. You should receive it in your email.",
      });
    } catch {
      setSendState({
        status: "error",
        text: "Message could not be sent right now. Please try again in a moment.",
      });
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Vipul Singh, home">
            <span className="brand-mark" aria-hidden="true">VS</span>
            <span className="brand-copy">
              <span className="brand-kicker">Software · Customers</span>
              <span className="brand-name">Vipul Singh</span>
            </span>
          </a>
          <a className="header-cta" href="#contact">
            Let&apos;s talk <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <nav className="section-nav" aria-label="Main navigation">
          <div className="section-nav-inner">
            <a href="#about">Approach</a>
            <a href="#skills">Capabilities</a>
            <a href="#projects">Selected work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Software engineering, with customer context</p>
            <h1 id="hero-title">
              I connect the <span>business problem</span> to the software that solves it.
            </h1>
            <p className="hero-intro">
              I bring software development together with customer-facing finance
              and sales experience: clarifying needs, explaining technical fit,
              and building APIs and workflows around real requirements.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a conversation <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="/vipul-singh-portfolio.pdf"
                download
              >
                Download portfolio <Download size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href="#projects">
                Explore selected work <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-links">
              <a
                href="https://www.linkedin.com/in/vipul-kumar-singh-511277128/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:vipul70067007@gmail.com">
                <Mail size={16} aria-hidden="true" /> vipul70067007@gmail.com
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="portrait-frame">
              <img src={profileImage} alt="Vipul Singh" />
              <span className="portrait-caption">People-first perspective. Engineer&apos;s detail.</span>
            </div>
            <div className="bridge-note">
              <div className="bridge-node">
                <span className="node-index">01</span>
                <span className="node-title">Understand</span>
                <span className="node-caption">Customer needs &amp; workflows</span>
              </div>
              <span className="bridge-line" aria-hidden="true" />
              <div className="bridge-node">
                <span className="node-index">02</span>
                <span className="node-title">Build</span>
                <span className="node-caption">APIs, logic &amp; interfaces</span>
              </div>
            </div>
          </div>
        </section>

        <section className="market-band" aria-labelledby="market-title">
          <div className="section-wrap market-inner">
            <div>
              <p className="eyebrow">Areas of interest</p>
              <h2 id="market-title">Where this perspective can be useful</h2>
            </div>
            <ul className="market-list">
              {marketFocus.map((market) => <li key={market}>{market}</li>)}
            </ul>
            <p className="market-note">
              Focus areas for applying my skills—not a claim of prior delivery in every sector.
            </p>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">The working advantage</p>
            <h2>Clearer conversations make for better software.</h2>
          </div>
          <div className="approach-layout">
            <p className="approach-lede">
              My customer-facing roles taught me to listen for the need behind
              the request. My engineering work lets me carry that context into
              implementation.
            </p>
            <div className="approach-details">
              <article>
                <span className="detail-index">01 / Clarify</span>
                <h3>Start with the workflow</h3>
                <p>Ask useful questions, understand constraints, and make the underlying need explicit.</p>
              </article>
              <article>
                <span className="detail-index">02 / Translate</span>
                <h3>Make trade-offs understandable</h3>
                <p>Talk about technical fit in plain language and connect implementation choices to the problem at hand.</p>
              </article>
              <article>
                <span className="detail-index">03 / Deliver</span>
                <h3>Build for how work happens</h3>
                <p>Shape APIs and product workflows around the people and operations that depend on them.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="capabilities-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading section-heading-inline">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2>Tools I use to take an idea into a working product.</h2>
              </div>
              <p>Grounded in the technologies and tools reflected in my project and work history.</p>
            </div>
            <div className="capability-list">
              {skillGroups.map(({ title, icon: Icon, skills }, index) => (
                <article className="capability-row" key={title}>
                  <span className="capability-number">0{index + 1}</span>
                  <div className="capability-title">
                    <Icon size={20} aria-hidden="true" />
                    <h3>{title}</h3>
                  </div>
                  <ul className="skill-list">
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap projects-section" id="projects">
          <div className="section-heading section-heading-inline">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Real workflows, translated into software.</h2>
            </div>
            <p>Project examples show the problems and systems I have worked on—without dressing them up as unverified outcomes.</p>
          </div>
          <div className="project-list">
            {projectCards.map((project) => (
              <article className="project-row" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-summary">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-detail">
                  <p className="project-challenge"><Workflow size={16} aria-hidden="true" /> {project.challenge}</p>
                  <p>{project.description}</p>
                  <ul className="project-tech">
                    {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap experience-layout">
            <div className="experience-intro">
              <p className="eyebrow">Experience</p>
              <h2>A career across customer conversations and code.</h2>
              <p>
                The path from finance and sales into software development is
                part of how I work: understand people&apos;s needs, communicate
                clearly, and follow through with practical solutions.
              </p>
              <span className="location-note"><MapPin size={15} aria-hidden="true" /> Based in India</span>
            </div>
            <ol className="timeline">
              {experienceEntries.map((entry, index) => (
                <li className="timeline-entry" key={`${entry.company}-${entry.role}`}>
                  <span className="timeline-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <article>
                    <div className="timeline-header">
                      <div>
                        <h3>{entry.role}</h3>
                        <p className="company-name">{entry.company}</p>
                      </div>
                      <span className="timeline-dates">{entry.dates}</span>
                    </div>
                    <p className="timeline-location">{entry.location}</p>
                    <ul>
                      {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s talk about the problem you&apos;re solving.</h2>
            <p>
              Open to conversations about software engineering, technical
              sales, solutions engineering, and customer-facing product roles.
            </p>
            <div className="contact-details">
              <a href="mailto:vipul70067007@gmail.com">
                <Mail size={17} aria-hidden="true" /> vipul70067007@gmail.com
              </a>
              <a href="tel:+918793770497">
                <Phone size={17} aria-hidden="true" /> +91 8793770497
              </a>
              <span><MapPin size={17} aria-hidden="true" /> India</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <BriefcaseBusiness size={19} aria-hidden="true" />
              <span>Send a message</span>
            </div>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="contact-message">What would you like to discuss?</label>
            <textarea
              id="contact-message"
              rows="5"
              name="message"
              placeholder="A little context helps me get back to you."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {sendState.text ? (
              <p
                className={`form-status status-${sendState.status}`}
                role="status"
                aria-live="polite"
              >
                {sendState.text}
              </p>
            ) : null}
            <button type="submit" disabled={sendState.status === "sending"}>
              {sendState.status === "sending" ? "Sending..." : "Send message"}
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <span>Vipul Singh</span>
          <span>Software engineering shaped by customer context.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
