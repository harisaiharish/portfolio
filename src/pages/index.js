import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';

const Page = styled.main`
  margin: 0;
  max-width: none;
  padding: 0 10vw 120px !important;

  section {
    max-width: 1180px;
    padding: 110px 0;
    border-top: 1px solid var(--lightest-navy);
  }
  .eyebrow {
    margin: 0 0 22px;
    color: var(--green);
    font: 500 13px/1.4 var(--font-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  h2 {
    font-size: clamp(34px, 5vw, 62px);
    letter-spacing: -0.035em;
  }
  p {
    line-height: 1.55;
  }

  .hero {
    display: grid;
    align-content: center;
    min-height: 100vh;
    border: 0;
    padding-top: 130px;
  }
  .hero h1 {
    max-width: 1080px;
    margin: 0;
    color: var(--lightest-slate);
    font-size: clamp(48px, 7.2vw, 96px);
    line-height: 0.94;
    letter-spacing: -0.05em;
  }
  .hero h1 span {
    color: var(--green);
  }
  .hero-bottom {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 60px;
    align-items: end;
    margin-top: 56px;
  }
  .hero-copy {
    max-width: 670px;
    color: var(--light-slate);
    font-size: clamp(19px, 1.8vw, 24px);
  }
  .hero-copy span {
    display: block;
  }
  .hero-meta {
    color: var(--slate);
    font: 14px/1.75 var(--font-mono);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
  }
  .pill {
    border: 1px solid var(--green);
    border-radius: 999px;
    padding: 11px 17px;
    color: var(--green);
    font: 500 13px/1 var(--font-mono);
  }
  .pill.primary {
    background: var(--green);
    color: var(--navy);
  }
  .pill:hover,
  .pill:focus {
    background: var(--green-tint);
    transform: translateY(-2px);
  }

  .section-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: end;
    margin-bottom: 58px;
  }
  .section-head p {
    max-width: 540px;
    color: var(--slate);
    font-size: 19px;
  }
  .work-list {
    border-bottom: 1px solid var(--lightest-navy);
  }
  .work-row {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr 110px;
    gap: 30px;
    padding: 34px 0;
    border-top: 1px solid var(--lightest-navy);
  }
  .work-row h3 {
    margin: 0 0 9px;
    font-size: clamp(25px, 3vw, 38px);
  }
  .work-row p {
    max-width: 700px;
    margin: 0;
    color: var(--slate);
    font-size: 17px;
  }
  .work-row p + p {
    margin-top: 9px;
  }
  .work-row .role {
    color: var(--green);
    font: 13px/1.5 var(--font-mono);
  }
  .work-row .date {
    color: var(--slate);
    font: 13px/1.5 var(--font-mono);
    text-align: right;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
  .project {
    display: flex;
    min-height: 360px;
    flex-direction: column;
    justify-content: space-between;
    padding: 34px;
    border: 1px solid var(--lightest-navy);
    border-radius: 18px;
    background: var(--light-navy);
    transition: transform 0.25s ease, border-color 0.25s ease;
  }
  .project:hover {
    transform: translateY(-5px);
    border-color: var(--green);
  }
  .project-number {
    color: var(--green);
    font: 13px/1 var(--font-mono);
  }
  .project h3 {
    margin: 0 0 14px;
    font-size: clamp(30px, 3.4vw, 44px);
    line-height: 1.02;
    letter-spacing: -0.035em;
    overflow-wrap: anywhere;
  }
  .project p {
    max-width: 690px;
    color: var(--slate);
    font-size: 18px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }
  .tags span {
    padding: 7px 10px;
    border: 1px solid var(--dark-slate);
    border-radius: 999px;
    color: var(--light-slate);
    font: 12px/1 var(--font-mono);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 80px;
  }
  .about-grid .lede {
    color: var(--lightest-slate);
    font-size: clamp(24px, 2.5vw, 32px);
    letter-spacing: -0.015em;
  }
  .facts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 45px;
  }
  .fact strong {
    display: block;
    margin-bottom: 9px;
    color: var(--green);
    font: 13px/1 var(--font-mono);
    text-transform: uppercase;
  }
  .fact span {
    color: var(--slate);
    font-size: 16px;
  }
  .contact {
    padding-bottom: 40px;
    text-align: center;
  }
  .contact p {
    max-width: 650px;
    margin: 24px auto 34px;
    color: var(--slate);
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding-inline: 25px !important;
    section {
      padding: 75px 0;
    }
    .hero {
      padding-top: 120px;
    }
    .hero-bottom,
    .section-head,
    .about-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .work-row {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .work-row .date {
      text-align: left;
    }
    .project-grid {
      grid-template-columns: 1fr;
    }
    .facts {
      grid-template-columns: 1fr;
    }
  }
`;

const jobs = [
  {
    company: 'LangChain',
    role: 'Software Engineer / Applied AI',
    date: 'Jun - Aug 2026',
    copy: [
      'Owned production tracing infrastructure for coding agents, exposing model calls, tools, skills, and subagent activity for debugging and evaluation.',
      'Created and launched LangSmith Custom Apps, enabling teams to build and deploy personalized dashboards directly on their trace data.',
    ],
    url: 'https://www.langchain.com/blog/your-coding-agents-are-a-black-box-heres-how-to-crack-them-open',
  },
  {
    company: 'Google Developer Groups @ Purdue',
    role: 'Co-President',
    date: 'Jan 2026 - Present',
    copy: [
      'Organizing campus-wide workshops, mentoring project managers, and steering three year-long technical projects.',
    ],
  },
  {
    company: 'Concrete Engine',
    role: 'Founding Engineer',
    date: 'Aug 2024 - May 2026',
    copy: [
      'Built a fault-tolerant pipeline that replicated customer data and intermediate artifacts across active NAS nodes for seamless failover.',
      'Created real-time observability across 50+ distributed HPC nodes, reducing incident detection time by more than 40%.',
      'Automated secure GitHub environment creation, Dockerfile auditing, image builds, and artifact uploads to Google Cloud.',
    ],
    url: 'https://www.concreteengine.com/',
  },
  {
    company: 'Vertikal X',
    role: 'Software Engineer',
    date: 'Feb - May 2025',
    copy: [
      'Built a scalable TypeORM and GraphQL backend plus a proprietary athlete scoring system.',
    ],
    url: 'https://www.vtxathlete.com/',
  },
];

const projects = [
  {
    name: 'Sift',
    meta: 'Local-first multimodal search',
    copy: 'A desktop semantic search engine that retrieves files through natural-language intent, unifying text, vision, and audio in a shared vector space.',
    tags: ['Python', 'PySide6', 'Qdrant', 'Qwen3-VL', 'Whisper', 'CLAP'],
  },
  {
    name: 'Pathwise',
    meta: 'A better map of Purdue',
    copy: 'AI-driven recommendations for courses, clubs, events, and research labs, grounded in the paths taken by similar students.',
    tags: ['Next.js', 'Vertex AI', 'BigQuery', 'Firebase'],
  },
  {
    name: 'Inside coding agents',
    meta: 'Writing / LangChain',
    copy: 'A practical look at opening the black box of coding agents by tracing model calls, tool use, skills, and subagent activity.',
    tags: ['Agent observability', 'LangSmith', 'Evals'],
    link: 'https://www.langchain.com/blog/your-coding-agents-are-a-black-box-heres-how-to-crack-them-open',
  },
  {
    name: 'Shortest Root',
    meta: '1st place, Oakridge Codefest',
    copy: 'A collaborative meetup planner that triangulates convenient places and sustainable public-transit routes for a group.',
    tags: ['React', 'Google Maps', 'SQLite'],
    link: 'https://github.com/harisaiharish/shortest-root',
  },
];

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Page>
      <section className="hero">
        <p className="eyebrow">Hari Sai Harish / Software Engineer</p>
        <h1>
          I build at the intersection of <span>agents, infrastructure, and people.</span>
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-copy">
              <span>CS, DS, Math, Econ at Purdue.</span>
              <span>
                Most recently building agent observability and developer tools at LangChain.
              </span>
            </p>
            <div className="links">
              <a className="pill primary" href="mailto:harisaiharish@gmail.com">
                Say hello
              </a>
              <a className="pill" href="https://github.com/harisaiharish">
                GitHub
              </a>
              <a className="pill" href="https://www.linkedin.com/in/hari-harish">
                LinkedIn
              </a>
              <a className="pill" href="/resume.pdf">
                Resume
              </a>
            </div>
          </div>
          <p className="hero-meta">
            US citizen
            <br />
            San Francisco, California
            <br />
            Expected graduation: December 2027
          </p>
        </div>
      </section>
      <section id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 / Experience</p>
            <h2>Selected work</h2>
          </div>
          <p>
            Building reliable infrastructure, expressive developer tools, and applied AI systems -
            from frontier coding agents to distributed compute.
          </p>
        </div>
        <div className="work-list">
          {jobs.map(({ company, role, date, copy, url }) => (
            <article className="work-row" key={company}>
              <div>
                <h3>{url ? <a href={url}>{company} ↗</a> : company}</h3>
                {copy.map(line => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="role">{role}</div>
              <div className="date">{date}</div>
            </article>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 / Projects</p>
            <h2>Things I’ve made</h2>
          </div>
          <p>
            Projects at the intersection of search, recommendation systems, human-centered
            interfaces, and machine learning.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <span className="project-number">
                0{index + 1} / {project.meta}
              </span>
              <div>
                <h3>{project.link ? <a href={project.link}>{project.name} ↗</a> : project.name}</h3>
                <p>{project.copy}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="about">
        <div className="about-grid">
          <div>
            <p className="eyebrow">03 / About</p>
            <h2>Research and community.</h2>
          </div>
          <div>
            <p className="lede">
              Beyond engineering, I research computer vision and autonomous navigation and lead
              Google Developer Groups at Purdue.
            </p>
            <div className="facts">
              <div className="fact">
                <strong>Research</strong>
                <span>
                  Built computer vision and reinforcement learning systems for autonomous theatrical
                  props under Purdue’s Dean of Theatre.
                </span>
              </div>
              <div className="fact">
                <strong>Recognition</strong>
                <span>
                  Data Science Outstanding Freshman of the Year; Dean’s List (4x); Semester Honors
                  (4x).
                </span>
              </div>
              <div className="fact">
                <strong>Current toolkit</strong>
                <span>
                  TypeScript, Python, React, Next.js, GCP, Docker, PyTorch, PostgreSQL, and
                  LangChain.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <p className="eyebrow">04 / Contact</p>
        <h2>Let’s build something clear.</h2>
        <p>
          I’m always interested in ambitious engineering problems, applied AI, and tools that help
          people reason about complex systems.
        </p>
        <a className="pill primary" href="mailto:harisaiharish@gmail.com">
          harisaiharish@gmail.com
        </a>
      </section>
    </Page>
  </Layout>
);

IndexPage.propTypes = { location: PropTypes.object.isRequired };
export default IndexPage;
