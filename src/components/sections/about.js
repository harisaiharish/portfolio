import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', 'Python', 'Java', 'C/C++', 'GCP', 'AWS', 'Docker', 'Flutter', 'MongoDB', 'Flask'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Hari, and I am a passionate developer dedicated to creating the 
              change I want to see in the world. With extensive experience in Software Development, 
              Machine Learning, and Research, I am committed to leveraging my skills to build new and 
              innovative technologies.
            </p>

            <p>
              {/* Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://incornandsoy.org/">a corporation</a>,{' '}
              <a href="https://ideas.cs.purdue.edu/">a research lab</a>,{' '}
              <a href="https://centers.purdue.edu/fusion-studio/">a studio</a>, and a{' '}
              <a href="https://eazyml.com/">start up</a>. As for personal ventures, my main focus these days 
              is building and launching my storage solutions company named{' '}
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7156137787556077568/">
                OpenSpaces
              </a>
              . */}
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://tarnea.com/">a corporation</a>,{' '}
              <a href="https://centers.purdue.edu/fusion-studio/">a research lab</a>,{' '}
              <a href="https://maps.app.goo.gl/7YeTG7xy24YXLqo97">a school</a>, and a{' '}
              <a href="https://www.concreteengine.com/">start up</a>
              .
            </p>

            <p>
              Currently I am pursuing a Bachelors of Science double major in 
              Computer Science and Data Science, alongside a minor in Economics 
              at{' '}
              <a href="https://www.cs.purdue.edu/" target="_blank" rel="noreferrer">
                Purdue University
              </a>
              .
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
