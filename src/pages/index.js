import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';

const Page = styled.main`
  margin: 0;
  max-width: none;
  padding: 0 10vw 120px !important;

  section { max-width: 1180px; padding: 110px 0; border-top: 1px solid var(--lightest-navy); }
  .eyebrow { margin: 0 0 22px; color: var(--green); font: 500 13px/1.4 var(--font-mono); letter-spacing: .12em; text-transform: uppercase; }
  h2 { font-size: clamp(40px, 6vw, 76px); letter-spacing: -.04em; }
  p { line-height: 1.55; }

  .hero { display: grid; align-content: center; min-height: 100vh; border: 0; padding-top: 130px; }
  .hero h1 { max-width: 1120px; margin: 0; color: var(--lightest-slate); font-size: clamp(58px, 9vw, 126px); line-height: .88; letter-spacing: -.06em; }
  .hero h1 span { color: var(--green); }
  .hero-bottom { display: grid; grid-template-columns: 1.25fr .75fr; gap: 60px; align-items: end; margin-top: 56px; }
  .hero-copy { max-width: 670px; color: var(--light-slate); font-size: clamp(20px, 2.2vw, 28px); }
  .hero-meta { color: var(--slate); font: 14px/1.75 var(--font-mono); }

  .links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px; }
  .pill { border: 1px solid var(--green); border-radius: 999px; padding: 11px 17px; color: var(--green); font: 500 13px/1 var(--font-mono); }
  .pill.primary { background: var(--green); color: var(--navy); }
  .pill:hover, .pill:focus { background: var(--green-tint); transform: translateY(-2px); }

  .section-head { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 58px; }
  .section-head p { max-width: 540px; color: var(--slate); font-size: 19px; }
  .work-list { border-bottom: 1px solid var(--lightest-navy); }
  .work-row { display: grid; grid-template-columns: 1.3fr .7fr 110px; gap: 30px; padding: 34px 0; border-top: 1px solid var(--lightest-navy); }
  .work-row h3 { margin: 0 0 9px; font-size: clamp(25px, 3vw, 38px); }
  .work-row p { max-width: 700px; margin: 0; color: var(--slate); font-size: 17px; }
  .work-row .role { color: var(--green); font: 13px/1.5 var(--font-mono); }
  .work-row .date { color: var(--slate); font: 13px/1.5 var(--font-mono); text-align: right; }

  .project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .project { display: flex; min-height: 340px; flex-direction: column; justify-content: space-between; padding: 34px; border: 1px solid var(--lightest-navy); border-radius: 18px; background: var(--light-navy); transition: transform .25s ease, border-color .25s ease; }
  .project:hover { transform: translateY(-5px); border-color: var(--green); }
  .project.featured { grid-column: span 2; min-height: 430px; background: linear-gradient(135deg, var(--light-navy), var(--navy)); }
  .project-number { color: var(--green); font: 13px/1 var(--font-mono); }
  .project h3 { margin: 0 0 14px; font-size: clamp(34px, 5vw, 62px); letter-spacing: -.04em; }
  .project p { max-width: 690px; color: var(--slate); font-size: 18px; }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
  .tags span { padding: 7px 10px; border: 1px solid var(--dark-slate); border-radius: 999px; color: var(--light-slate); font: 12px/1 var(--font-mono); }

  .about-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 80px; }
  .about-grid .lede { color: var(--lightest-slate); font-size: clamp(27px, 3vw, 42px); letter-spacing: -.02em; }
  .facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-top: 45px; }
  .fact strong { display: block; margin-bottom: 9px; color: var(--green); font: 13px/1 var(--font-mono); text-transform: uppercase; }
  .fact span { color: var(--slate); font-size: 16px; }
  .contact { padding-bottom: 40px; text-align: center; }
  .contact p { max-width: 650px; margin: 24px auto 34px; color: var(--slate); font-size: 20px; }

  @media (max-width: 768px) {
    padding-inline: 25px !important;
    section { padding: 75px 0; }
    .hero { padding-top: 120px; }
    .hero-bottom, .section-head, .about-grid { grid-template-columns: 1fr; gap: 28px; }
    .work-row { grid-template-columns: 1fr; gap: 12px; }
    .work-row .date { text-align: left; }
    .project-grid { grid-template-columns: 1fr; }
    .project.featured { grid-column: auto; }
    .facts { grid-template-columns: 1fr; }
  }
`;

const jobs = [
  ['LangChain', 'Software Engineer Intern', 'Jun - Aug 2026', 'Built production tracing infrastructure for seven frontier coding agents and helped launch LangSmith Custom Apps for trace-native, personalized dashboards.', 'https://www.langchain.com/blog/your-coding-agents-are-a-black-box-heres-how-to-crack-them-open'],
  ['Google Developer Groups @ Purdue', 'Co-President', 'Jan 2026 - Present', 'Organizing campus-wide workshops, mentoring project managers, and steering three year-long technical projects.'],
  ['Concrete Engine', 'Founding Engineer', 'Aug 2024 - May 2026', 'Architected fault-tolerant data replication and observability across 50+ distributed HPC nodes, cutting incident detection time by more than 40%.', 'https://www.concreteengine.com/'],
  ['Vertikal X', 'Software Engineer Intern', 'Feb - May 2025', 'Built a scalable TypeORM and GraphQL backend plus a proprietary athlete scoring system.', 'https://www.vtxathlete.com/'],
];

const projects = [
  { name: 'Sift', meta: 'Local-first multimodal search', copy: 'A desktop semantic search engine that retrieves files through natural-language intent, unifying text, vision, and audio in a shared vector space.', tags: ['Python', 'PySide6', 'Qdrant', 'Qwen3-VL', 'Whisper', 'CLAP'], featured: true },
  { name: 'Pathwise', meta: 'A better map of Purdue', copy: 'AI-driven recommendations for courses, clubs, events, and research labs, grounded in the paths taken by similar students.', tags: ['Next.js', 'Vertex AI', 'BigQuery', 'Firebase'] },
  { name: 'Shortest Root', meta: '1st place, Oakridge Codefest', copy: 'A collaborative meetup planner that triangulates convenient places and sustainable public-transit routes for a group.', tags: ['React', 'Google Maps', 'SQLite'], link: 'https://github.com/harisaiharish/shortest-root' },
  { name: 'Inside coding agents', meta: 'Writing / LangChain', copy: 'A practical look at opening the black box of coding agents by tracing model calls, tool use, skills, and subagent activity.', tags: ['Agent observability', 'LangSmith', 'Evals'], link: 'https://www.langchain.com/blog/your-coding-agents-are-a-black-box-heres-how-to-crack-them-open' },
];

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Page>
      <section className="hero">
        <p className="eyebrow">Hari Sai Harish / Software Engineer</p>
        <h1>I build systems that make complex work <span>legible.</span></h1>
        <div className="hero-bottom"><div><p className="hero-copy">Computer science, data science, and mathematics at Purdue. Most recently building agent observability and developer tools at LangChain.</p><div className="links"><a className="pill primary" href="mailto:harisaiharish@gmail.com">Say hello</a><a className="pill" href="https://github.com/harisaiharish">GitHub</a><a className="pill" href="https://www.linkedin.com/in/hari-harish">LinkedIn</a><a className="pill" href="/resume.pdf">Resume</a></div></div><p className="hero-meta">US citizen<br />West Lafayette, Indiana<br />Expected graduation: December 2027</p></div>
      </section>
      <section id="work"><div className="section-head"><div><p className="eyebrow">01 / Experience</p><h2>Selected work</h2></div><p>Building reliable infrastructure, expressive developer tools, and applied AI systems - from frontier coding agents to distributed compute.</p></div><div className="work-list">{jobs.map(([company, role, date, copy, url]) => <article className="work-row" key={company}><div><h3>{url ? <a href={url}>{company} ↗</a> : company}</h3><p>{copy}</p></div><div className="role">{role}</div><div className="date">{date}</div></article>)}</div></section>
      <section id="projects"><div className="section-head"><div><p className="eyebrow">02 / Projects</p><h2>Things I’ve made</h2></div><p>Projects at the intersection of search, recommendation systems, human-centered interfaces, and machine learning.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project ${project.featured ? 'featured' : ''}`} key={project.name}><span className="project-number">0{index + 1} / {project.meta}</span><div><h3>{project.link ? <a href={project.link}>{project.name} ↗</a> : project.name}</h3><p>{project.copy}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      <section id="about"><div className="about-grid"><div><p className="eyebrow">03 / About</p><h2>A broad toolkit, used with focus.</h2></div><div><p className="lede">I like turning ambiguous technical problems into systems people can inspect, understand, and trust.</p><p>At Purdue, I study computer science, data science, mathematics, and economics. Beyond software engineering, I’ve researched computer vision and reinforcement learning for autonomous theatrical props, and I help lead Google Developer Groups on campus.</p><div className="facts"><div className="fact"><strong>Recognition</strong><span>Data Science Outstanding Freshman of the Year; Dean’s List and Semester Honors, four times each.</span></div><div className="fact"><strong>Current toolkit</strong><span>TypeScript, Python, React, Next.js, GCP, Docker, PyTorch, PostgreSQL, and LangChain.</span></div></div></div></div></section>
      <section id="contact" className="contact"><p className="eyebrow">04 / Contact</p><h2>Let’s build something clear.</h2><p>I’m always interested in ambitious engineering problems, applied AI, and tools that help people reason about complex systems.</p><a className="pill primary" href="mailto:harisaiharish@gmail.com">harisaiharish@gmail.com</a></section>
    </Page>
  </Layout>
);

IndexPage.propTypes = { location: PropTypes.object.isRequired };
export default IndexPage;
