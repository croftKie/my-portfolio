import { useState } from "react";
import "./css/app.css";
import ts from "./assets/icons/typescript.png";
import react from "./assets/icons/physics.png";
import sql from "./assets/icons/sql-server.png";
import kotlin from "./assets/icons/kotlin.png";
import android from "./assets/icons/android.png";

function App() {
  const [page, setPage] = useState(0);
  return page === 0 ? (
    <Entry setPage={setPage} />
  ) : page === 1 ? (
    <WebDev setPage={setPage} />
  ) : (
    <AppDev setPage={setPage} />
  );
}

function WebDev({ setPage }) {
  const [mode, setMode] = useState(0);

  const About = () => {
    return (
      <div className="about-content">
        <h1>Full Stack Web Development</h1>
        <p>
          I specialise in React / VueJS and NodeJS development for the web. To
          support this, I am experienced in SQL and MongoDB and CMS
          implementation. My goal is to create unique, user-friendly user
          interfaces as well as secure, robust and scalable back-end services.
        </p>
        <div className="clients">
          <div className="card">
            <img src={ts} alt="" />
            <h4>TypeScript</h4>
          </div>
          <div className="card">
            <img src={react} alt="" />
            <h4>ReactJS & NextJS</h4>
          </div>
          <div className="card">
            <img src={sql} alt="" />
            <h4>SQL Servers</h4>
          </div>
        </div>
        <h2>My Experience</h2>
        <p>
          I've worked with a range of clients, developing complex web
          applications for use in an online programming school, to portfolio
          websites for a Social Media Management Studio, to marketing landing
          pages for an Educational Application.
        </p>
        <div className="clients">
          <div className="card">
            <h4>The Jump Digital</h4>
          </div>
          <div className="card">
            <h4>Jules Studio</h4>
          </div>
          <div className="card">
            <h4>Jay's Pony Tales</h4>
          </div>
        </div>
      </div>
    );
  };
  const Projects = () => {
    return (
      <div className="projects-content">
        <h1>Web App Projects</h1>
        <div className="cards">
          {[1, 2, 3].map(() => {
            return (
              <div className="card">
                <h3>Project Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe quia ut modi suscipit quaerat! Blanditiis quidem ratione
                  voluptatum odio delectus minima numquam dolor quis quisquam?
                  Praesentium voluptas adipisci exercitationem molestias!
                </p>
                <div className="buttons">
                  <button>Source Code</button>
                  <button>Live Link</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const GetInTouch = () => {
    return (
      <div class="contact-content">
        <h1 class="">Get in Touch</h1>
        <p class="">
          If you have a contract or project and need an experienced Software
          Developer to bring your ideas to life, get in touch today.
        </p>
        <form class="">
          <label class="item">
            Name
            <input
              type="text"
              name="name"
              class=""
              placeholder="John"
              required=""
            />
          </label>
          <label class="item">
            Email
            <input
              type="email"
              name="email"
              class=""
              placeholder="John@gmail.com"
              required=""
            />
          </label>
          <label class="item">
            Your Message
            <textarea
              name="message"
              rows="4"
              class="textarea"
              placeholder="Write your thoughts here..."
            ></textarea>
          </label>
          <button type="submit" class="">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="web-dev">
      <nav>
        <h4 onClick={() => setPage(0)} className="brand">
          Croft Studio
        </h4>
        <div className="menu">
          <h4 onClick={() => setMode(0)} className={mode === 0 ? "active" : ""}>
            About
          </h4>
          <h4 onClick={() => setMode(1)} className={mode === 1 ? "active" : ""}>
            Projects
          </h4>
          <h4 onClick={() => setMode(2)} className={mode === 2 ? "active" : ""}>
            Get In Touch
          </h4>
        </div>
        <div className="options">
          <h5 className="active">Web Dev</h5>
          <h5 onClick={() => setPage(2)}>App Dev</h5>
        </div>
      </nav>
      <div
        className={
          mode === 0
            ? "line margin-about"
            : mode === 1
            ? "line margin-projects"
            : "line margin-contact"
        }
      ></div>
      <div className="content">
        {mode === 0 ? <About /> : mode === 1 ? <Projects /> : <GetInTouch />}
      </div>
    </div>
  );
}

function AppDev({ setPage }) {
  const [mode, setMode] = useState(0);

  const About = () => {
    return (
      <div className="about-content">
        <h1>Mobile App Development</h1>
        <p>
          I specialise in Android App Development utilising modern Kotlin to
          create unique, and complex mobile applications for you users. To
          support this, I am also experienced in creating React Native
          cross-platform applications. I provide a full stack service to develop
          high quality UI as well as robust, scalable back-end servers for your
          app.
        </p>
        <div className="clients">
          <div className="card">
            <img src={kotlin} alt="" />
            <h4>Kotlin</h4>
          </div>
          <div className="card">
            <img src={react} alt="" />
            <h4>React Native</h4>
          </div>
          <div className="card">
            <img src={android} alt="" />
            <h4>Android</h4>
          </div>
        </div>
        <h2>My Experience</h2>
        <p>
          I've worked with a range of clients, developing a complex companion app for an ed-tech startup. As well as a creative, art generation tool for Android and a surf data application.
        </p>
        <div className="clients">
          <div className="card">
            <h4>Jay's Pony Tales</h4>
          </div>
          <div className="card">
            <h4>ColorBlocks</h4>
          </div>
          <div className="card">
            <h4>TideChaser</h4>
          </div>
        </div>
      </div>
    );
  };
  const Projects = () => {
    return (
      <div className="projects-content">
        <h1>Web App Projects</h1>
        <div className="cards">
          {[1, 2, 3].map(() => {
            return (
              <div className="card">
                <h3>Project Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe quia ut modi suscipit quaerat! Blanditiis quidem ratione
                  voluptatum odio delectus minima numquam dolor quis quisquam?
                  Praesentium voluptas adipisci exercitationem molestias!
                </p>
                <div className="buttons">
                  <button>Source Code</button>
                  <button>Live Link</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const GetInTouch = () => {
    return (
      <div class="contact-content">
        <h1 class="">Get in Touch</h1>
        <p class="">
          If you have a contract or project and need an experienced Software
          Developer to bring your ideas to life, get in touch today.
        </p>
        <form class="">
          <label class="item">
            Name
            <input
              type="text"
              name="name"
              class=""
              placeholder="John"
              required=""
            />
          </label>
          <label class="item">
            Email
            <input
              type="email"
              name="email"
              class=""
              placeholder="John@gmail.com"
              required=""
            />
          </label>
          <label class="item">
            Your Message
            <textarea
              name="message"
              rows="4"
              class="textarea"
              placeholder="Write your thoughts here..."
            ></textarea>
          </label>
          <button type="submit" class="">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="app-dev">
      <nav>
        <h4 onClick={() => setPage(0)} className="brand">
          Croft Studio
        </h4>
        <div className="menu">
          <h4 onClick={() => setMode(0)} className={mode === 0 ? "active" : ""}>
            About
          </h4>
          <h4 onClick={() => setMode(1)} className={mode === 1 ? "active" : ""}>
            Projects
          </h4>
          <h4 onClick={() => setMode(2)} className={mode === 2 ? "active" : ""}>
            Get In Touch
          </h4>
        </div>
        <div className="options">
          <h5 onClick={() => setPage(1)}>Web Dev</h5>
          <h5 className="active">App Dev</h5>
        </div>
      </nav>
      <div
        className={
          mode === 0
            ? "line margin-about"
            : mode === 1
            ? "line margin-projects"
            : "line margin-contact"
        }
      ></div>
      <div className="content">
        {mode === 0 ? <About /> : mode === 1 ? <Projects /> : <GetInTouch />}
      </div>
    </div>
  );
}

function Entry({ setPage }) {
  return (
    <section className="entry">
      <div className="col info">
        <h3>Hi, I'm Kieran...</h3>
        <h1>Welcome to Croft Studio</h1>
        <h5>
          ...I specialise in Kotlin & React Native App Dev and ReactJS for Web
          Dev
        </h5>
      </div>
      <div className="col grid">
        <div onClick={() => setPage(2)} className="item option">
          <h3>Mobile App Development</h3>
        </div>
        <div className="item">
          <h3>What do you need?</h3>
        </div>
        <div onClick={() => setPage(1)} className="item option">
          <h3>Web App Development</h3>
        </div>
      </div>
    </section>
  );
}

export default App;
