import { useState, useEffect } from "react";
import profileImg from "./assets/profile.png";
import vsLogo from "./assets/vs_logo.png";
import heroImg from "./assets/hero.png";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = [
  { icon: "🐍", name: "Python", type: "Language" },
  { icon: "🦄", name: "Django", type: "Backend Framework" },
  { icon: "⚡", name: "DRF", type: "REST APIs" },
  { icon: "⚛️", name: "React", type: "Frontend" },
  { icon: "🟨", name: "JavaScript", type: "Language" },
  { icon: "🐘", name: "PostgreSQL", type: "Database" },
  { icon: "🐙", name: "Git", type: "Version Control" },
  { icon: "🐳", name: "Docker", type: "DevOps" },
];

const PROJECTS = [
  {
    tag: "Web Application",
    title: "School Management System",
    desc: "A comprehensive school management solution covering student enrollment, attendance tracking, grade management, and reporting — built for scalability and ease of use.",
    tech: ["Django", "DRF", "React", "PostgreSQL"],
  },
  {
    tag: "Enterprise Tool",
    title: "Asset Management System",
    desc: "Enterprise-level asset tracking system enabling organizations to manage physical and digital assets, track lifecycles, assign ownership, and generate audit reports.",
    tech: ["Django", "DRF", "React", "PostgreSQL"],
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0f4ff", color: "#0f172a" }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
        rel="stylesheet"
      />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        :root {
          --navy: #04112b;
          --blue: #2563eb;
          --blue-light: #3b82f6;
          --accent: #60a5fa;
          --bg: #f0f4ff;
          --white: #ffffff;
          --gray: #64748b;
          --text: #0f172a;
        }

        a { text-decoration: none; color: inherit; }

        .nav-link {
          color: rgba(255,255,255,0.72);
          font-size: 14px; font-weight: 500;
          letter-spacing: 0.4px; transition: color 0.2s;
          position: relative; cursor: pointer;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px; background: #60a5fa;
          transition: width 0.25s;
        }
        .nav-link:hover { color: white; }
        .nav-link:hover::after { width: 100%; }

        .brand-logo {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          box-shadow: 0 10px 30px rgba(37,99,235,0.28);
        }

        .btn-primary {
          background: #2563eb; color: white;
          padding: 14px 30px; border-radius: 12px;
          font-size: 15px; font-weight: 500;
          transition: all 0.2s; display: inline-block;
          box-shadow: 0 4px 24px rgba(37,99,235,0.45);
        }
        .btn-primary:hover { background: #3b82f6; transform: translateY(-2px); }

        .btn-outline {
          border: 1.5px solid rgba(96,165,250,0.5); color: #60a5fa;
          padding: 14px 30px; border-radius: 12px;
          font-size: 15px; font-weight: 500;
          transition: all 0.2s; display: inline-block;
          background: rgba(96,165,250,0.06);
        }
        .btn-outline:hover { border-color: #60a5fa; background: rgba(96,165,250,0.12); }

        .social-btn {
          width: 46px; height: 46px; border-radius: 12px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.75); font-size: 14px;
          font-weight: 700; transition: all 0.2s;
          font-family: 'Syne', sans-serif; cursor: pointer;
        }
        .social-btn:hover {
          background: #2563eb; border-color: #2563eb;
          color: white; transform: translateY(-2px);
        }

        .skill-card {
          background: white; border-radius: 20px; padding: 28px 20px;
          text-align: center; box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05); transition: all 0.25s;
          cursor: default;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(37,99,235,0.15);
          border-color: rgba(37,99,235,0.2);
        }

        .project-card {
          background: #f0f4ff; border-radius: 24px; padding: 36px;
          border: 1px solid rgba(0,0,0,0.06); transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .project-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(to bottom, #2563eb, #60a5fa);
          border-radius: 4px 0 0 4px;
        }
        .project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); }

        .tech-pill {
          background: white; border: 1px solid rgba(0,0,0,0.08);
          border-radius: 6px; padding: 4px 10px;
          font-size: 12px; font-weight: 500; color: #0f172a;
        }

        .contact-item {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; background: #f0f4ff; border-radius: 14px;
          border: 1px solid transparent; transition: all 0.2s;
          cursor: pointer;
        }
        .contact-item:hover {
          border-color: rgba(37,99,235,0.3);
          background: #eff6ff;
        }

        .fact-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 16px 20px; background: #f0f4ff;
          border-radius: 14px; border-left: 3px solid #2563eb;
        }

        .about-photo-wrap {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(15,23,42,0.16);
          min-height: 520px;
        }

        .about-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-photo-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(4,17,43,0.02) 0%, rgba(4,17,43,0.12) 52%, rgba(4,17,43,0.72) 100%);
        }

        .about-photo-card {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 1;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.24);
          backdrop-filter: blur(14px);
          border-radius: 24px;
          padding: 24px;
          color: white;
        }

        .form-input {
          width: 100%; background: white;
          border: 1.5px solid rgba(0,0,0,0.08); border-radius: 12px;
          padding: 14px 18px; font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: #0f172a; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
        }

        .btn-send {
          width: 100%; background: #2563eb; color: white;
          border: none; padding: 16px; border-radius: 12px;
          font-family: 'Syne', sans-serif; font-size: 16px;
          font-weight: 700; cursor: pointer; transition: all 0.2s;
          letter-spacing: 0.5px;
        }
        .btn-send:hover {
          background: #3b82f6; transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(37,99,235,0.4);
        }

        @keyframes pulse {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade1 { animation: fadeUp 0.65s ease 0.1s forwards; opacity: 0; }
        .fade2 { animation: fadeUp 0.65s ease 0.25s forwards; opacity: 0; }
        .fade3 { animation: fadeUp 0.65s ease 0.4s forwards; opacity: 0; }
        .fade4 { animation: fadeUp 0.65s ease 0.55s forwards; opacity: 0; }
        .fade5 { animation: fadeUp 0.65s ease 0.7s forwards; opacity: 0; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .nav-desktop { display: none !important; }
          .hero-card { display: none !important; }
          .about-photo-wrap { min-height: 420px; }
          .about-photo-card {
            left: 18px;
            right: 18px;
            bottom: 18px;
            padding: 18px;
          }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100,
          background: scrolled ? "rgba(4,17,43,0.98)" : "#04112b",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "background 0.3s",
        }}
      >
        <nav style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              padding: 4,
              borderRadius: 20,
              background: "linear-gradient(135deg, rgba(37,99,235,0.28), rgba(251,146,60,0.22))",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
            }}>
              <img src={vsLogo} alt="Vipul Singh logo" className="brand-logo" />
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "white" }}>
              Vipul Singh
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="nav-desktop" style={{ display: "flex", gap: 36, listStyle: "none" }}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
              </li>
            ))}
          </ul>

          <a href="#" style={{
            background: "#2563eb", color: "white",
            border: "none", padding: "10px 24px", borderRadius: 10,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            fontSize: 14, cursor: "pointer", letterSpacing: 0.3,
            transition: "background 0.2s",
          }}>
            Resume ↗
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          padding: "120px 32px 80px",
          background: "linear-gradient(135deg, #04112b 0%, #0a1f4a 55%, #0d2560 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* BG glows */}
        <div style={{
          position: "absolute", top: -120, right: -120,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: "10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div
          className="hero-grid"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 80, alignItems: "center", width: "100%" }}
        >
          {/* Left */}
          <div>
            <div className="fade1" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,99,235,0.18)", border: "1px solid rgba(96,165,250,0.3)",
              color: "#60a5fa", borderRadius: 100, padding: "6px 16px",
              fontSize: 13, fontWeight: 500, letterSpacing: 1,
              textTransform: "uppercase", marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", animation: "pulse 2s infinite", display: "inline-block" }} />
              Full Stack Developer
            </div>

            <h1 className="fade2" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(42px, 6vw, 80px)",
              fontWeight: 800, lineHeight: 1.05,
              color: "white", marginBottom: 20,
            }}>
              Hi, I'm<br /><span style={{ color: "#60a5fa" }}>Vipul Singh</span>
            </h1>

            <p className="fade3" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: 22, lineHeight: 1.5 }}>
              I build scalable web applications.
            </p>

            <p className="fade4" style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: 40, maxWidth: 520 }}>
              Full Stack Developer crafting production-grade applications with Django, React, JavaScript, and PostgreSQL — turning ideas into robust digital experiences.
            </p>

            <div className="fade5" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>

            <div className="fade5" style={{ display: "flex", gap: 14 }}>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">GH</a>
              <a href="https://www.linkedin.com/in/vipul-kumar-singh-511277128/" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">in</a>
              <a href="mailto:vipul70067007@gmail.com" className="social-btn" title="Email">✉</a>
            </div>
          </div>

          {/* Profile Card */}
          <div
            className="hero-card fade3"
            style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 32, padding: 40, display: "flex", flexDirection: "column",
              alignItems: "center", gap: 24, backdropFilter: "blur(10px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Profile image */}
            <div style={{
              width: 200, height: 200, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(37,99,235,0.4), rgba(96,165,250,0.2))",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "3px solid rgba(96,165,250,0.3)",
              boxShadow: "0 0 0 8px rgba(37,99,235,0.1)",
              overflow: "hidden", flexShrink: 0,
            }}>
              {!imgError ? (
                <img
                  src={profileImg}
                  alt="Vipul Singh"
                  onError={() => setImgError(true)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: 72 }}>👨‍💻</span>
              )}
            </div>

            {/* Stat chips */}
            {[
              { icon: "💼", title: "Software Developer", sub: "A3 Services" },
              { icon: "📍", title: "Location", sub: "Pune, India" },
              { icon: "✅", title: "Status", sub: "Open to opportunities" },
            ].map(({ icon, title, sub }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "12px 18px",
                display: "flex", alignItems: "center", gap: 12, width: "100%",
              }}>
                <span style={{ fontSize: 18 }}>{icon}</span>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                  <strong style={{ color: "white", display: "block", fontSize: 15 }}>{title}</strong>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "96px 32px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb", marginBottom: 12 }}>About Me</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, marginBottom: 24, lineHeight: 1.1 }}>
                Passionate about<br />building things
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: "#64748b", marginBottom: 36 }}>
                I'm a Full Stack Developer currently working at A3 Services, where I design and build scalable REST APIs and responsive frontend applications. I love turning complex problems into elegant, efficient solutions.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "💼", label: "Current Role", value: "Software Developer at A3 Services" },
                  { icon: "📍", label: "Location", value: "Pune, India" },
                  { icon: "✉", label: "Email", value: "vipul70067007@gmail.com" },
                  { icon: "📞", label: "Phone", value: "+91 8793770497" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="fact-row">
                    <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                    <div style={{ fontSize: 15 }}>
                      <strong style={{ display: "block", color: "#0f172a", fontWeight: 600, marginBottom: 2 }}>{label}</strong>
                      <span style={{ color: "#64748b" }}>{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-photo-wrap">
              <img src={heroImg} alt="Technical illustration" className="about-photo" style={{ objectFit: "contain", padding: 40, background: "linear-gradient(135deg, #eff6ff, #dbeafe)" }} />
              <div className="about-photo-overlay" />
              <div className="about-photo-card">
                <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", opacity: 0.82, marginBottom: 10 }}>
                  Technical Focus
                </p>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, lineHeight: 1.15, marginBottom: 10 }}>
                  API design, frontend systems, and production-ready engineering
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.86)" }}>
                  Focused on scalable architecture, modern interfaces, and clean delivery across Django, DRF, React, and PostgreSQL projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "96px 32px", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb", marginBottom: 12 }}>What I Work With</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, marginBottom: 48, lineHeight: 1.1 }}>Technical Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 20 }}>
            {SKILLS.map(({ icon, name, type }) => (
              <div key={name} className="skill-card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "96px 32px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb", marginBottom: 12 }}>Portfolio</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, marginBottom: 48, lineHeight: 1.1 }}>Recent Projects</h2>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {PROJECTS.map(({ tag, title, desc, tech }) => (
              <div key={title} className="project-card">
                <span style={{
                  display: "inline-block", background: "rgba(37,99,235,0.1)",
                  color: "#2563eb", borderRadius: 6, padding: "4px 12px",
                  fontSize: 12, fontWeight: 600, letterSpacing: 0.5, marginBottom: 16,
                }}>{tag}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#0f172a" }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#64748b", marginBottom: 20 }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "96px 32px", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb", marginBottom: 12 }}>Career</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, marginBottom: 48, lineHeight: 1.1 }}>Work Experience</h2>
          <div style={{
            background: "white", borderRadius: 24, padding: 40,
            border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%",
                background: "#2563eb", boxShadow: "0 0 0 4px rgba(37,99,235,0.2)",
                flexShrink: 0,
              }} />
              <div style={{ width: 2, flex: 1, minHeight: 80, background: "linear-gradient(to bottom, #2563eb, transparent)" }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 700, marginBottom: 4 }}>Software Developer</h3>
              <p style={{ fontSize: 16, color: "#2563eb", fontWeight: 600, marginBottom: 8 }}>A3 Services</p>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>📅 Current Position</p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#64748b" }}>
                Designing and developing scalable REST APIs using Django REST Framework. Building responsive, modern frontend applications using React and JavaScript. Collaborating with cross-functional teams to deliver production-ready features and maintain high code quality.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                {["Python", "Django", "DRF", "React", "JavaScript", "PostgreSQL"].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "96px 32px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#2563eb", marginBottom: 12 }}>Let's Talk</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.15 }}>Get In Touch</h2>
              <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, marginBottom: 40 }}>
                Have a project in mind or want to collaborate? Feel free to reach out — I'm always open to discussing new opportunities.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "✉", label: "Email", value: "vipul70067007@gmail.com", href: "mailto:vipul70067007@gmail.com" },
                  { icon: "📞", label: "Phone", value: "+91 8793770497", href: "tel:+918793770497" },
                  { icon: "in", label: "LinkedIn", value: "vipul-kumar-singh-511277128", href: "https://www.linkedin.com/in/vipul-kumar-singh-511277128/" },
                ].map(({ icon, label, value, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-item">
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "rgba(37,99,235,0.1)", display: "flex",
                      alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                      fontFamily: "'Syne', sans-serif", fontWeight: 700,
                    }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: "#64748b", marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 15, fontWeight: 500 }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ background: "#f0f4ff", borderRadius: 24, padding: 40, border: "1px solid rgba(0,0,0,0.06)" }}>
              {[
                { label: "Your Name", type: "text", placeholder: "John Doe", id: "name" },
                { label: "Email Address", type: "email", placeholder: "john@example.com", id: "email" },
              ].map(({ label, type, placeholder, id }) => (
                <div key={id} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0f172a", marginBottom: 8, letterSpacing: 0.3 }}>{label}</label>
                  <input type={type} placeholder={placeholder} className="form-input" />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0f172a", marginBottom: 8, letterSpacing: 0.3 }}>Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="form-input" style={{ resize: "vertical" }} />
              </div>
              <button className="btn-send">Send Message →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#04112b", color: "rgba(255,255,255,0.6)", padding: 32, textAlign: "center", fontSize: 14 }}>
        <p>© 2026 <span style={{ color: "#60a5fa" }}>Vipul Singh</span>. All rights reserved. Built with ❤️</p>
      </footer>
    </div>
  );
}
