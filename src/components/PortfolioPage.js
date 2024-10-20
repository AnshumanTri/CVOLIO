import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";


function PortfolioPage() {
  const { personalInfo } = useContext(AppContext);
  const [showCode, setShowCode] = useState(false);
  const [templateCode, setTemplateCode] = useState("");
  const [renderedTemplate, setRenderedTemplate] = useState(null);

  // Function for Template 1
  const renderTemplate1 = () => {
    const code = `
      <div className="template1div">
    <header className="headerTemplate1">
      <nav className="navTemplate1">
        <div className="logoTemplate1">{personalInfo.name}</div>
        <ul className="navLinksTemplate1">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section className="heroTemplate1">
      <div className="heroContentTemplate1 glassCardTemplate1">
        <h1>Crafting Digital Experiences</h1>
        <p>Where design meets innovation</p>
        <a href="#projects" className="btnTemplate1">View Projects</a>
      </div>
    </section>

    <section id="about" className="aboutTemplate1 glassCardTemplate1">
      <div className="containerTemplate1">
        <h2>About Me</h2>
        <p> {personalInfo.about} </p>
      </div>
    </section>

    <section id="projects" className="projectsTemplate1">
      <div className="containerTemplate1">
        <h2>Featured Projects</h2>
        <div className="projectGridTemplate1">
          <div className="projectCardTemplate1 glassCardTemplate1">
            <h3>Modern UI Design</h3>
            <p>Creating fluid, interactive user interfaces with a glassy touch.</p>
          </div>
          <div className="projectCardTemplate1 glassCardTemplate1">
            <h3>Responsive Web Development</h3>
            <p>Building mobile-first, responsive designs for diverse audiences.</p>
          </div>
          <div className="projectCardTemplate1 glassCardTemplate1">
            <h3>Creative Coding</h3>
            <p>Bringing creativity to the forefront with innovative coding techniques.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="skillsTemplate1 glassCardTemplate1">
      <div className="containerTemplate1">
        <h2>Skills</h2>
        <ul>
          {personalInfo.skills}
        </ul>
      </div>
    </section>

    <section id="contact" className="contactTemplate1 glassCardTemplate1">
      <div className="containerTemplate1">
        <h2>Contact Me</h2>
        <p>Let’s collaborate and build amazing digital experiences together.</p>
        <a href="mailto:your-email@example.com" className="btnTemplate1">Get in Touch</a>
      </div>
    </section>

    <footer className="footerTemplate1">
      <p>&copy; 2024 ${personalInfo.name} - All Rights Reserved</p>
    </footer>
  </div>
    `;

    setTemplateCode(code);
    return <div className="template1div">
    <header className="headerTemplate1">
      <nav className="navTemplate1">
        <div className="logoTemplate1">{personalInfo.name}</div>
        <ul className="navLinksTemplate1">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section className="heroTemplate1">
      <div className="heroContentTemplate1 glassCardTemplate1">
        <h1>Crafting Digital Experiences</h1>
        <p>Where design meets innovation</p>
        <a href="#projects" className="btnTemplate1">View Projects</a>
      </div>
    </section>

    <section id="about" className="aboutTemplate1 glassCardTemplate1">
      <div className="containerTemplate1">
        <h2>About Me</h2>
        <p> {personalInfo.about} </p>
      </div>
    </section>

    <section id="projects" className="projectsTemplate1">
      <div className="containerTemplate1">
        <h2>Featured Projects</h2>
        <div className="projectGridTemplate1">
          <div className="projectCardTemplate1 glassCardTemplate1">
            <h3>Modern UI Design</h3>
            <p>Creating fluid, interactive user interfaces with a glassy touch.</p>
          </div>
          <div className="projectCardTemplate1 glassCardTemplate1">
            <h3>Responsive Web Development</h3>
            <p>Building mobile-first, responsive designs for diverse audiences.</p>
          </div>
          <div className="projectCardTemplate1 glassCardTemplate1">
            <h3>Creative Coding</h3>
            <p>Bringing creativity to the forefront with innovative coding techniques.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="skillsTemplate1 glassCardTemplate1">
      <div className="containerTemplate1">
        <h2>Skills</h2>
        <ul>
          {personalInfo.skills}
        </ul>
      </div>
    </section>

    <section id="contact" className="contactTemplate1 glassCardTemplate1">
      <div className="containerTemplate1">
        <h2>Contact Me</h2>
        <p>Let’s collaborate and build amazing digital experiences together.</p>
        <a href="mailto:your-email@example.com" className="btnTemplate1">Get in Touch</a>
      </div>
    </section>

    <footer className="footerTemplate1">
      <p>&copy; 2024 ${personalInfo.name} - All Rights Reserved</p>
    </footer>
  </div>;
  };

  // Function for Template 2
  const renderTemplate2 = () => {
    const code = `
      <div>
        <div className='template2-body'>
          <header className='template2-header'>
            <nav className='template2-nav'>
              <div className='template2-logo'> {personalInfo.name} </div>
              <ul className='template2-nav-links'>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#projects'>Projects</a>
                </li>
                <li>
                  <a href='#skills'>Skills</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </nav>
          </header>

          <section className='template2-hero'>
            <div className='template2-hero-text'>
              <h1>
                Hello, I'm{" "}
                <span className='template2-highlight'> {personalInfo.name}</span>
              </h1>
              <p>
                Bold. Creative.{" "}
                <span className='template2-highlight'>
                  Brutalist Designer & Developer
                </span>
              </p>
              <a href='#projects' className='template2-btn'>
                View My Work
              </a>
            </div>
          </section>

          <section id='about' className='template2-about'>
            <div className='template2-container'>
              <h2>About Me</h2>
              <p>
               {personalInfo.about}
              </p>
            </div>
          </section>

          <section id='projects' className='template2-projects'>
            <div className='template2-container'>
              <h2>Projects</h2>
              <div className='template2-project-grid'>
                <div className='template2-project-card' id='template2-project1'>
                  <h3>Project 1</h3>
                  <p>
                    Breaking convention in design with a raw, unfiltered
                    aesthetic.
                  </p>
                </div>
                <div className='template2-project-card' id='template2-project2'>
                  <h3>Project 2</h3>
                  <p>
                    An exploration of sharp contrasts and vibrant color schemes.
                  </p>
                </div>
                <div className='template2-project-card' id='template2-project3'>
                  <h3>Project 3</h3>
                  <p>A functional yet unapologetically bold UI experience.</p>
                </div>
              </div>
            </div>
          </section>

          <section id='skills' className='template2-skills'>
            <div className='template2-container'>
              <h2>Skills</h2>
              <ul>
                {personalInfo.skills}
              </ul>
            </div>
          </section>

          <section id='contact' className='template2-contact'>
            <div className='template2-container'>
              <h2>Contact Me</h2>
              <p>
                Interested in collaborating on a bold, daring project? Reach out
                to me!
              </p>
              <a href='mailto:your-email@example.com' className='template2-btn'>
                Let's Talk
              </a>
            </div>
          </section>

          <footer className='template2-footer'>
            <p>&copy; 2024 ${personalInfo.name} - All Rights Reserved</p>
          </footer>
        </div>
      </div>
    
    `;

    setTemplateCode(code);
    return (
      <div>
        <div className='template2-body'>
          <header className='template2-header'>
            <nav className='template2-nav'>
              <div className='template2-logo'> {personalInfo.name} </div>
              <ul className='template2-nav-links'>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#projects'>Projects</a>
                </li>
                <li>
                  <a href='#skills'>Skills</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </nav>
          </header>

          <section className='template2-hero'>
            <div className='template2-hero-text'>
              <h1>
                Hello, I'm{" "}
                <span className='template2-highlight'> {personalInfo.name}</span>
              </h1>
              <p>
                Bold. Creative.{" "}
                <span className='template2-highlight'>
                  Brutalist Designer & Developer
                </span>
              </p>
              <a href='#projects' className='template2-btn'>
                View My Work
              </a>
            </div>
          </section>

          <section id='about' className='template2-about'>
            <div className='template2-container'>
              <h2>About Me</h2>
              <p>
               {personalInfo.about}
              </p>
            </div>
          </section>

          <section id='projects' className='template2-projects'>
            <div className='template2-container'>
              <h2>Projects</h2>
              <div className='template2-project-grid'>
                <div className='template2-project-card' id='template2-project1'>
                  <h3>Project 1</h3>
                  <p>
                    Breaking convention in design with a raw, unfiltered
                    aesthetic.
                  </p>
                </div>
                <div className='template2-project-card' id='template2-project2'>
                  <h3>Project 2</h3>
                  <p>
                    An exploration of sharp contrasts and vibrant color schemes.
                  </p>
                </div>
                <div className='template2-project-card' id='template2-project3'>
                  <h3>Project 3</h3>
                  <p>A functional yet unapologetically bold UI experience.</p>
                </div>
              </div>
            </div>
          </section>

          <section id='skills' className='template2-skills'>
            <div className='template2-container'>
              <h2>Skills</h2>
              <ul>
                {personalInfo.skills}
              </ul>
            </div>
          </section>

          <section id='contact' className='template2-contact'>
            <div className='template2-container'>
              <h2>Contact Me</h2>
              <p>
                Interested in collaborating on a bold, daring project? Reach out
                to me!
              </p>
              <a href='mailto:your-email@example.com' className='template2-btn'>
                Let's Talk
              </a>
            </div>
          </section>

          <footer className='template2-footer'>
            <p>&copy; 2024 ${personalInfo.name} - All Rights Reserved</p>
          </footer>
        </div>
      </div>
    );
  };

  // Function for Template 3
  const renderTemplate3 = () => {
    const code = `
     <div>
    <header className="header-template3">
      <nav className="nav-template3">
        <div className="logo-template3">MyPortfolio</div>
        <ul className="nav-links-template3">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section className="hero-template3">
      <div className="hero-text-template3">
        <h1>Hello, I'm <span className="highlight-template3"> {personalInfo.name} </span></h1>
        <p>I'm a passionate <span className="highlight-template3"> {personalInfo.profession} </span> with a focus on {personalInfo.specialisation}.</p>
        <a href="#projects" className="btn-template3">View My Work</a>
      </div>
    </section>

    <section id="about" className="about-template3">
      <div className="container-template3">
        <h2>About Me</h2>
        <p> {personalInfo.about}  </p>
      </div>
    </section>

    <section id="projects" className="projects-template3">
      <div className="container-template3">
        <h2>Projects</h2>
        <div className="project-grid-template3">
          <div className="project-card-template3">
            <h3>Project 1</h3>
            <p>A brief description of the project goes here.</p>
          </div>
          <div className="project-card-template3">
            <h3>Project 2</h3>
            <p>A brief description of the project goes here.</p>
          </div>
          <div className="project-card-template3">
            <h3>Project 3</h3>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="skills-template3">
      <div className="container-template3">
        <h2>Skills</h2>
        <ul>
          {personalInfo.skills}
        </ul>
      </div>
    </section>

    <section id="contact" className="contact-template3">
      <div className="container-template3">
        <h2>Contact Me</h2>
        <p>Let's work together! Reach out to me for collaborations or just to say hi.</p>
        <a href="mailto:your-email@example.com" className="btn-template3">Get in Touch</a>
      </div>
    </section>

    <footer className="footer-template3">
      <p>&copy; 2024 ${personalInfo.name} - All Rights Reserved</p>
    </footer>
  </div>
    `;
    setTemplateCode(code);
    return <div>
    <header className="header-template3">
      <nav className="nav-template3">
        <div className="logo-template3">MyPortfolio</div>
        <ul className="nav-links-template3">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section className="hero-template3">
      <div className="hero-text-template3">
        <h1>Hello, I'm <span className="highlight-template3"> {personalInfo.name} </span></h1>
        <p>I'm a passionate <span className="highlight-template3"> {personalInfo.profession} </span> with a focus on {personalInfo.specialisation}.</p>
        <a href="#projects" className="btn-template3">View My Work</a>
      </div>
    </section>

    <section id="about" className="about-template3">
      <div className="container-template3">
        <h2>About Me</h2>
        <p> {personalInfo.about}  </p>
      </div>
    </section>

    <section id="projects" className="projects-template3">
      <div className="container-template3">
        <h2>Projects</h2>
        <div className="project-grid-template3">
          <div className="project-card-template3">
            <h3>Project 1</h3>
            <p>A brief description of the project goes here.</p>
          </div>
          <div className="project-card-template3">
            <h3>Project 2</h3>
            <p>A brief description of the project goes here.</p>
          </div>
          <div className="project-card-template3">
            <h3>Project 3</h3>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="skills-template3">
      <div className="container-template3">
        <h2>Skills</h2>
        <ul>
          {personalInfo.skills}
        </ul>
      </div>
    </section>

    <section id="contact" className="contact-template3">
      <div className="container-template3">
        <h2>Contact Me</h2>
        <p>Let's work together! Reach out to me for collaborations or just to say hi.</p>
        <a href="mailto:your-email@example.com" className="btn-template3">Get in Touch</a>
      </div>
    </section>

    <footer className="footer-template3">
      <p>&copy; 2024 ${personalInfo.name} - All Rights Reserved</p>
    </footer>
  </div>;
  };

  // Function to handle the template selection
  useEffect(() => {
    switch (personalInfo.portfolioTemplate) {
      case "template1":
        setRenderedTemplate(renderTemplate1());
        break;
      case "template2":
        setRenderedTemplate(renderTemplate2());
        break;
      case "template3":
        setRenderedTemplate(renderTemplate3());
        break;
      default:
        setRenderedTemplate(<p>No template selected.</p>);
    }
  }, [personalInfo.portfolioTemplate]);

  return (
    <div className='portfolio-page'>
      {/* Render selected template */}
      {renderedTemplate}

      {/* Button to show code */}
      <button onClick={() => setShowCode(!showCode)}>
        Show Portfolio Code
      </button>

      {/* Display Code if showCode is true */}
      {showCode && (
        <div className='code-display'>
          <h2>Portfolio Code:</h2>
          <pre>{templateCode}</pre>
          <button onClick={() => setShowCode(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;
