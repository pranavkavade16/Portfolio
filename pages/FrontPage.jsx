import { useRef } from "react";
import Card from "../components/Card";

const FrontPage = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const yOffset = -60; // small offset
    const y =
      contactRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="max-w">
            <h1 className="hero-title">Pranav Kavade</h1>

            <p className="subtitle mt-3" style={{ fontSize: "1.5rem" }}>
              full stack dev
            </p>
            <div className="accent-underline mt-3" />

            <p
              className="text-muted-on-dark mb-2"
              style={{ fontSize: "1.3rem" }}
            >
              Passionate full‑stack developer crafting intuitive digital
              experiences with modern technologies.
            </p>
            <p
              className="text-muted-on-dark mb-4"
              style={{ fontSize: "1.3rem" }}
            >
              Specializing in React, Node.js, and MongoDB to build scalable and
              user‑centered applications.
            </p>

            <div className="d-flex gap-3">
              <button
                className="btn btn-accent px-3 py-2"
                onClick={scrollToContact}
                style={{ color: "16a34a" }}
              >
                Contact Me
              </button>
              <button className="btn btn-dark-soft px-3 py-2">Resume</button>
            </div>
          </div>
        </div>
      </header>

      <button
        className="scroll-top"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ color: "16a34a" }}
      >
        ↑
      </button>
      <div className="mb-5">
        <div className="container">
          <div className="max-w">
            <h1 className="hero-title">Projects</h1>
            <p className="subtitle mt-3">
              Building solutions that solve real-world problems
            </p>
            <div className="accent-underline mt-3" />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g4">
            <div className="col">
              <Card
                title={"KicksCulture"}
                text={
                  "An interactive MERN-based e-commerce platform designed for product discovery with advanced filtering, real-time cart management, and persistent order tracking."
                }
                imageUrl={"/KicksCulture.PNG"}
                techStack={["React.js", "Node.js", "MongoDB"]}
                demo={"https://kicks-culture-frontend.vercel.app/"}
                code={"https://github.com/pranavkavade16/CRM-Frontend"}
              />
            </div>
            <div className="col">
              <Card
                title={"NexusCRM"}
                text={
                  "An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics."
                }
                imageUrl={
                  "https://blog-cdn.quarkly.io/2023/01/Best-CRM-Tools-for-Small-Businesses.png"
                }
                techStack={["React.js", "Chart.js", "MongoDB", "Node,js"]}
                demo={"https://crm-frontend-alpha-topaz.vercel.app/"}
                code={"https://github.com/pranavkavade16/KicksCulture-Frontend"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="container">
          <div className="margin-top">
            <h1 className="hero-title">Tech Stack</h1>
            <p className="subtitle mt-3">Technologies and tools I work with</p>
            <div className="accent-underline mt-3" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g4">
              <div className="col">
                <p className="tech-stack mt-5">
                  <i class="devicon-react-original me-3"></i>
                  React
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-nodejs-plain-wordmark me-3"></i>
                  Node.js
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-bootstrap-plain me-3"></i>
                  Bootstrap
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-git-plain me-3"></i>
                  Git
                </p>
              </div>
              <div className="col">
                <p className="tech-stack mt-5">
                  <i class="devicon-mongodb-plain me-3"></i>
                  MongoDB
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-github-original me-3"></i>
                  GitHub
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-mongoose-original me-3"></i>
                  Mongoose
                </p>
                <p className="tech-stack mt-5">
                  <i class="bi bi-code-slash me-3"></i>
                  DevTools
                </p>
              </div>
              <div className="col">
                <p className="tech-stack mt-5">
                  <i class="devicon-express-original me-3"></i>
                  Express
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-vercel-original me-3"></i>
                  Vercel
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-vscode-plain me-3"></i>
                  VSCode
                </p>
                <p className="tech-stack mt-5">
                  <i class="devicon-typescript-plain me-3"></i>
                  TypeScript
                </p>
              </div>
              <div className="col">
                <p className="tech-stack mt-5">
                  <i class="devicon-amazonwebservices-plain-wordmark me-3"></i>
                  AWS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" ref={contactRef}>
          <div className="margin-top">
            <h1 className="hero-title">Contact Me</h1>
            <p className="subtitle mt-3">
              Let's collaborate on something amazing together
            </p>
            <div className="accent-underline mt-3" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g4">
              <div className="col">
                <div
                  class="card card-hover"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <div className="m-4">
                    <div class="tech-stack">
                      <i
                        class="bi bi-envelope-fill m-3"
                        style={{ color: "#16a34a" }}
                      ></i>
                      Email
                    </div>
                    <p className="text-muted-on-dark mt-3 ms-3">
                      pranavkavade69739@gmail.com
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/pranavkavade/"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    class="card mt-4 card-hover"
                    style={{ backgroundColor: "#1a1a1a" }}
                  >
                    <div className="m-4">
                      <div class="tech-stack">
                        <i
                          class="bi bi-linkedin m-3"
                          style={{ color: "#16a34a" }}
                        ></i>
                        LinkedIn
                      </div>
                      <p className="text-muted-on-dark mt-3 ms-3">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="https://github.com/pranavkavade16"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    class="card card-hover"
                    style={{ backgroundColor: "#1a1a1a" }}
                  >
                    <div className="m-4">
                      <div class="tech-stack">
                        <i
                          class="bi bi-github m-3"
                          style={{ color: "#16a34a" }}
                        ></i>
                        GitHub
                      </div>
                      <p className="text-muted-on-dark mt-3 ms-3">
                        Follow on GitHub
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-top"></div>
      </div>
    </>
  );
};
export default FrontPage;
