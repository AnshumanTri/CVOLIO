import React, { useContext } from "react";
import { AppContext } from "../App";

function CVPage() {
  const { personalInfo } = useContext(AppContext);

  const renderTemplate = () => {
    switch (personalInfo.cvTemplate) {
      case "template1":
        return (
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}>
            <header style={{ textAlign: "center", marginBottom: "20px" }}>
              <h1 style={{ fontSize: "2.5em" }}> {personalInfo.name} </h1>
              <p style={{ fontSize: "1.1em", color: "#666" }}>
                ${personalInfo.position} | ${personalInfo.email} | ${personalInfo.phone} |
                LinkedIn: @ ${personalInfo.linkedin}
              </p>
            </header>

            <section style={{ marginBottom: "20px" }} className='profile'>
              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Profile
              </h2>
              <p>
               {personalInfo.about}
              </p>
            </section>

            <section style={{ marginBottom: "20px" }} className='experience'>
              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Experience
              </h2>

              <div style={{ marginBottom: "20px" }} className='job'>
                <h3 style={{ fontSize: "1.5em", color: "#007acc" }}>
                  {personalInfo.experience}
                </h3>
               
                
              </div>

              <div style={{ marginBottom: "20px" }} className='job'>
                <h3 style={{ fontSize: "1.5em", color: "#007acc" }}>
                  {personalInfo.position}
                </h3>
                <p style={{ fontStyle: "italic", color: "#555" }}>
                  ABC Corp | May 2017 - June 2020
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li style={{ marginBottom: "5px" }}>
                    Contributed to the development of internal tools and
                    applications in Python and Django.
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Improved application performance by 30% through code
                    optimization and database tuning.
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Worked closely with the product team to design user-friendly
                    interfaces.
                  </li>
                </ul>
              </div>
            </section>

            <section style={{ marginBottom: "20px" }} className='education'>
              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Education
              </h2>
              <p> {personalInfo.education} </p>
            </section>

            <section style={{ marginBottom: "20px" }} className='skills'>
              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Skills
              </h2>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  Programming Languages: JavaScript, Python, Java
                </li>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  Frameworks: React, Node.js, Django
                </li>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  Version Control: Git, GitHub
                </li>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  Databases: MySQL, MongoDB
                </li>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  Tools: Docker, Kubernetes, Jenkins
                </li>
              </ul>
            </section>

            <section
              style={{ marginBottom: "20px" }}
              className='certifications'>
              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Certifications
              </h2>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  AWS Certified Solutions Architect – Associate
                </li>
                <li
                  style={{
                    marginBottom: "5px",
                    paddingLeft: "10px",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      content: "•",
                      position: "absolute",
                      left: "0",
                      color: "#007acc",
                    }}>
                    •
                  </span>
                  Google Professional Cloud Developer
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: "20px" }} className='projects'>
              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Projects
              </h2>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li style={{ marginBottom: "5px" }}>
                  <strong>Personal Portfolio</strong> – Developed a portfolio
                  website using React and hosted it on AWS.
                </li>
                <li style={{ marginBottom: "5px" }}>
                  <strong>Todo App</strong> – Created a task management app with
                  authentication and a RESTful API.
                </li>
              </ul>
            </section>
          </div>
        );
      case "template2":
        return (
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}>
            {/* Left Column */}
            <div
              style={{
                width: "30%",
                padding: "20px",
                backgroundColor: "#007acc",
                color: "white",
                borderRadius: "10px",
              }}>
              <h1 style={{ fontSize: "2.2em" }}>{personalInfo.name}</h1>
              <p style={{ marginTop: "5px", fontSize: "1.1em" }}>
                {personalInfo.position}
              </p>
              <p style={{ marginTop: "5px", fontSize: "1.1em" }}>
                Email: ${personalInfo.email}
              </p>
              <p style={{ marginTop: "5px", fontSize: "1.1em" }}>
                Phone: ${personalInfo.phone}
              </p>
              <p style={{ marginTop: "5px", fontSize: "1.1em" }}>
                LinkedIn: ${personalInfo.linkedin}
              </p>

              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Skills
              </h2>
              <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                <li style={{ marginBottom: "5px" }}>
                  {personalInfo.skills}
                </li>
                
              </ul>

              <h2
                style={{
                  fontSize: "1.8em",
                  color: "#444",
                  marginBottom: "10px",
                  borderBottom: "2px solid #007acc",
                  paddingBottom: "5px",
                }}>
                Certifications
              </h2>
              <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                <li style={{ marginBottom: "5px" }}>
                  AWS Certified Solutions Architect
                </li>
                <li style={{ marginBottom: "5px" }}>
                  Google Professional Cloud Developer
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div style={{ width: "70%", padding: "20px" }}>
              <section className='profile'>
                <h2
                  style={{
                    fontSize: "1.8em",
                    color: "#444",
                    marginBottom: "10px",
                    borderBottom: "2px solid #007acc",
                    paddingBottom: "5px",
                  }}>
                  Profile
                </h2>
                <p>
                  {personalInfo.about}
                </p>
              </section>

              <section className='experience'>
                <h2
                  style={{
                    fontSize: "1.8em",
                    color: "#444",
                    marginBottom: "10px",
                    borderBottom: "2px solid #007acc",
                    paddingBottom: "5px",
                  }}>
                  Experience
                </h2>

                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "1.5em", color: "#007acc" }}>
                    {personalInfo.position}
                  </h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    XYZ Company | June 2020 - Present
                  </p>
                  <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                    <li style={{ marginBottom: "5px" }}>
                      Developed and maintained web applications using
                      JavaScript, React, and Node.js.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Led a team of 5 developers to create a scalable API for
                      10k+ daily users.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Collaborated with the DevOps team to automate deployments
                      using Docker and Kubernetes.
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "1.5em", color: "#007acc" }}>
                  {personalInfo.position}
                  </h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    ABC Corp | May 2017 - June 2020
                  </p>
                  <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                    <li style={{ marginBottom: "5px" }}>
                      Contributed to the development of internal tools and
                      applications in Python and Django.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Improved application performance by 30% through code
                      optimization and database tuning.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Worked closely with the product team to design
                      user-friendly interfaces.
                    </li>
                  </ul>
                </div>
              </section>

              <section className='education'>
                <h2
                  style={{
                    fontSize: "1.8em",
                    color: "#444",
                    marginBottom: "10px",
                    borderBottom: "2px solid #007acc",
                    paddingBottom: "5px",
                  }}>
                  Education
                </h2>
                <p>{personalInfo.education}</p>
              </section>

              <section className='projects'>
                <h2
                  style={{
                    fontSize: "1.8em",
                    color: "#444",
                    marginBottom: "10px",
                    borderBottom: "2px solid #007acc",
                    paddingBottom: "5px",
                  }}>
                  Projects
                </h2>
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li style={{ marginBottom: "5px" }}>
                    <strong>Personal Portfolio</strong> – Developed a portfolio
                    website using React and hosted it on AWS.
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <strong>Todo App</strong> – Created a task management app
                    with authentication and a RESTful API.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        );

      case "template3":
        return (
          <div
            style={{
              maxWidth: "1000px",
              margin: "40px auto",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexWrap: "wrap",
            }}>
            {/* Left Column */}
            <div
              style={{
                padding: "20px",
                flex: "1",
                backgroundColor: "#f0f4f8",
                borderRadius: "8px",
              }}>
              <h1 style={{ fontSize: "2.5em", marginBottom: "10px" }}>
              {personalInfo.name}
              </h1>
              <p>Email: ${personalInfo.email} </p>
              <p>Phone: ${personalInfo.phone} </p>
              <p>LinkedIn: ${personalInfo.linkedin} </p>

              <section className='skills'>
                <h2
                  style={{
                    fontSize: "1.8em",
                    marginBottom: "10px",
                    color: "#333",
                    borderBottom: "2px solid #007acc",
                    paddingBottom: "5px",
                  }}>
                  Skills
                </h2>
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: "#e1f5fe",
                      borderRadius: "4px",
                    }}>
                    ${personalInfo.skills}
                  </li>
                  
                  
                  <li
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: "#e1f5fe",
                      borderRadius: "4px",
                    }}>
                    Communication Skills
                  </li>
                </ul>
              </section>
            </div>

            {/* Right Column */}
            <div
              style={{
                padding: "20px",
                flex: "1",
              }}>
              <section>
                <h2
                  style={{
                    fontSize: "1.8em",
                    marginBottom: "10px",
                    color: "#333",
                    borderBottom: "2px solid #007acc",
                    paddingBottom: "5px",
                  }}>
                  Professional Experience
                </h2>
                <h3 style={{ fontSize: "1.5em", marginBottom: "5px" }}>
                  Project Manager | ABC Tech | 2017
                </h3>
                <p style={{ marginBottom: "15px" }}>
                  Led multiple projects to successful completion, ensuring they
                  were delivered on time and within budget.
                </p>
              </section>

              {/* Additional sections can be added here */}
            </div>
          </div>
        );

      default:
        return <p>No template selected.</p>;
    }
  };

  return <div className='cv-page'>{renderTemplate()}</div>;
}

export default CVPage;
