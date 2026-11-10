import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Database, Github,
  Linkedin, Mail, Menu, X, Server, Layers3, Download, MapPin,
  Terminal, GitBranch, ExternalLink
} from 'lucide-react'

const skills = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Microservices'] },
  { title: 'Data & Messaging', items: ['MySQL', 'SQL', 'Kafka', 'DynamoDB'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Terraform', 'Git', 'CI/CD'] },
  { title: 'Tools', items: ['Postman', 'Swagger', 'Jira', 'Kibana', 'Grafana'] },
]

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'HCLTech',
    period: '2025 – Present',
    description: 'Working on enterprise software delivery, contributing to backend services and collaborating across teams in a client-focused environment.',
    tags: ['Java', 'Spring Boot', 'Microservices', 'REST APIs']
  },
  {
    role: 'Software Engineer',
    company: 'Previous experience',
    period: 'Before HCL',
    description: 'Contributed to backend development and service integration for enterprise applications. Replace this entry with your exact employer, dates and responsibilities.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Microservices']
  }
]

const projects = [
  {
    number: '01',
    name: 'Consumer Lending Platform',
    type: 'Enterprise backend · Financial services',
    description: 'Backend services supporting a personal-loan journey, including application processing, risk assessment, offer retrieval and loan setup.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
    icon: Layers3
  },
  {
    number: '02',
    name: 'Credit Card Platform',
    type: 'Enterprise application · Financial services',
    description: 'Contributing to a credit-card platform. Add only the features, APIs and responsibilities you are authorized to disclose publicly.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'SQL'],
    icon: Database
  },
  {
    number: '03',
    name: 'KYC Data Enrichment Workflow',
    type: 'Cloud workflow · Learning / project experience',
    description: 'A workflow concept for retrieving, enriching and mapping member data using event-driven and serverless components.',
    stack: ['AWS Lambda', 'Step Functions', 'S3', 'DynamoDB'],
    icon: Server
  }
]

function SectionHeading({ eyebrow, title, detail }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {detail && <p>{detail}</p>}
  </div>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]
  return <header className="nav-wrap">
    <nav className="nav container">
      <a className="brand" href="#home">M<span>.</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={21}/> : <Menu size={21}/>}
      </button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
      </div>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero container" id="home">
    <div className="hero-copy">
      <div className="availability"><span className="pulse"/> OPEN TO THE RIGHT OPPORTUNITY</div>
      <p className="hero-kicker">HELLO, I'M MUSTHAK</p>
      <h1>Building reliable<br/><span>backend systems.</span></h1>
      <p className="hero-description">Software Engineer with <strong>4 years of experience</strong> building backend applications with Java, Spring Boot and Microservices.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
        <a className="button button-ghost" href="/resume.pdf" download>Download resume <Download size={17}/></a>
      </div>
      <div className="hero-meta">
        <span><MapPin size={15}/> India · Open to global opportunities</span>
        <span><Code2 size={15}/> Backend-focused engineer</span>
      </div>
    </div>
    <div className="hero-visual">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <div className="code-card">
        <div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>developer.java</span><Terminal size={15}/></div>
        <div className="code-body">
          <p><span className="line-no">01</span><span className="purple">public class</span> <span className="green">Engineer</span> {'{'}</p>
          <p><span className="line-no">02</span>&nbsp;&nbsp;<span className="purple">String</span> focus = <span className="orange">"Backend"</span>;</p>
          <p><span className="line-no">03</span>&nbsp;&nbsp;<span className="purple">String[]</span> stack = {'{'}</p>
          <p><span className="line-no">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">"Java"</span>, <span className="orange">"Spring Boot"</span>,</p>
          <p><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">"Microservices"</span></p>
          <p><span className="line-no">06</span>&nbsp;&nbsp;{'}'};</p>
          <p><span className="line-no">07</span>&nbsp;&nbsp;<span className="purple">int</span> experience = <span className="green">4</span>;</p>
          <p><span className="line-no">08</span>{'}'}</p>
        </div>
        <div className="code-status"><span><span className="status-dot"/> Available for collaboration</span><span>UTF-8</span></div>
      </div>
      <div className="float-chip chip-java"><Code2 size={16}/> Java</div>
      <div className="float-chip chip-spring"><Layers3 size={16}/> Spring Boot</div>
    </div>
    <a href="#about" className="scroll-hint"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
  </section>
}

function About() {
  return <section className="section container" id="about">
    <SectionHeading eyebrow="01 / ABOUT" title="Engineering with purpose." detail="I enjoy turning complex requirements into clean, dependable software."/>
    <div className="about-grid">
      <div className="about-text">
        <p className="large-copy">I'm a backend-focused software engineer with <span>4 years of experience</span> in software development.</p>
        <p>My core expertise is in Java, Spring Boot, REST API development and microservices. I enjoy understanding business problems, designing maintainable services and working with teams to deliver reliable applications.</p>
        <p>I'm continuously learning modern cloud and engineering practices to build systems that are scalable, observable and easier to maintain.</p>
      </div>
      <div className="stat-grid">
        <div className="stat-card"><strong>04<span>+</span></strong><small>Years of experience</small></div>
        <div className="stat-card"><strong>Java</strong><small>Core backend language</small></div>
        <div className="stat-card"><strong>API</strong><small>Service development</small></div>
        <div className="stat-card"><strong>Cloud</strong><small>Expanding cloud skills</small></div>
      </div>
    </div>
  </section>
}

function Skills() {
  const icons = [Code2, Database, Server, Terminal]
  return <section className="section section-alt" id="skills"><div className="container">
    <SectionHeading eyebrow="02 / TOOLKIT" title="My technical toolkit." detail="Technologies I work with and continue to build expertise in."/>
    <div className="skill-grid">
      {skills.map((group, i) => {
        const Icon = icons[i]
        return <article className="skill-card" key={group.title}>
          <div className="skill-icon"><Icon size={21}/></div>
          <h3>{group.title}</h3>
          <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
        </article>
      })}
    </div>
  </div></section>
}

function Experience() {
  return <section className="section container" id="experience">
    <SectionHeading eyebrow="03 / EXPERIENCE" title="Where I've contributed." detail="A snapshot of my professional journey. Update the dates and descriptions to match your verified work history."/>
    <div className="timeline">
      {experiences.map((item, i) => <article className="timeline-item" key={item.role}>
        <div className="timeline-marker">{i + 1}</div>
        <div className="timeline-content">
          <div className="experience-top"><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><span className="period">{item.period}</span></div>
          <p>{item.description}</p>
          <div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        </div>
      </article>)}
    </div>
  </section>
}

function Projects() {
  return <section className="section section-alt" id="projects"><div className="container">
    <SectionHeading eyebrow="04 / SELECTED WORK" title="Projects & domains." detail="Representative experience and project areas. Keep client names, proprietary details and confidential architecture out of your public portfolio."/>
    <div className="project-grid">
      {projects.map(project => {
        const Icon = project.icon
        return <article className="project-card" key={project.number}>
          <div className="project-top"><span className="project-number">{project.number} / CASE STUDY</span><Icon size={23}/></div>
          <p className="project-type">{project.type}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        </article>
      })}
    </div>
  </div></section>
}

function Contact() {
  const email = 'your.email@example.com'
  return <section className="section container" id="contact">
    <div className="contact-panel">
      <span className="eyebrow">05 / CONTACT</span>
      <h2>Have a great project<br/>in mind<span>?</span></h2>
      <p>I'm always interested in meaningful engineering challenges, collaboration and new opportunities.</p>
      <a className="button button-primary" href={`mailto:${email}?subject=Let's%20connect`}>Say hello <ArrowUpRight size={17}/></a>
      <div className="contact-links">
        <a href="mailto:your.email@example.com"><Mail size={17}/> Email</a>
        <a href="https://www.linkedin.com/in/YOUR-LINKEDIN/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
        <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
      </div>
    </div>
  </section>
}

function Footer() {
  return <footer className="footer container"><a className="brand" href="#home">M<span>.</span></a><p>Designed & built by Musthak · {new Date().getFullYear()}</p><a href="#home" className="back-top">Back to top ↑</a></footer>
}

export default function App() {
  return <><Navbar/><main><Hero/><About/><Skills/><Experience/><Projects/><Contact/></main><Footer/></>
}
