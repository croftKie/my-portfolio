import { useEffect, useRef, useState } from "react";
import "./css/app.css";
import ts from "./assets/icons/typescript.png";
import react from "./assets/icons/physics.png";
import sql from "./assets/icons/sql-server.png";
import kotlin from "./assets/icons/kotlin.png";
import android from "./assets/icons/android.png";
import androidbg from "./assets/photos/android.jpg";
import webbg from "./assets/photos/web.jpg";
import hero from "./assets/photos/devimg.jpg";
import logo from "./assets/logo.png";
import gsap from "gsap";
import {
  clients,
  mobileAppServices,
  projectData,
  servicesInfo,
  webAppServices,
} from "./utils/projectData";

function App() {
  const [page, setPage] = useState(0);

  if (window.innerWidth <= 600) {
    return page === 0 ? (
      <HomeMB setPage={setPage} />
    ) : page === 1 ? (
      <AppDevMB setPage={setPage} />
    ) : (
      <WebDevMB setPage={setPage} />
    );
  }
  return page === 0 ? (
    <HomeDT setPage={setPage} />
  ) : page === 1 ? (
    <AppDevDT setPage={setPage} />
  ) : (
    <WebDevDT setPage={setPage} />
  );
}

//
//
// Mobile Comps

function HomeMB({ setPage }) {
  const infoRef = useRef();
  const optionUpper = useRef();
  const optionMid = useRef();
  const appRef = useRef();
  const [serviceHover, setServiceHover] = useState(0);

  return (
    <section className="entry">
      <div className="nav">
        <img onClick={() => setPage(0)} src={logo} alt="" />
        <button onClick={() => setPage(3)}>Get In Touch</button>
      </div>
      <div ref={infoRef} className="col info">
        <h1>Kieran Croft</h1>
        <h5>
          Software Engineer specialising in developing{" "}
          <span onClick={() => setPage(1)}>Mobile App Development</span> and{" "}
          <span onClick={() => setPage(2)}>Web Development</span>.
        </h5>
      </div>
      <div className="col grid">
        <div ref={optionUpper} className="item option">
          <h3 ref={appRef}>Hi...</h3>
          <p>
            I use mobile and web app development to bring to life your creative
            ideas...
          </p>
        </div>
        <div ref={optionMid} className="item">
          <img src={hero} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            tempora in. Ipsa, non blanditiis, nemo perspiciatis ut omnis rerum
            odio aperiam ipsum voluptatem velit praesentium aut asperiores
            aliquam consequuntur vitae!
          </p>
        </div>
      </div>
      <div className="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="list">
            <p onClick={() => setPage(1)}>
              <img src={kotlin} alt="" /> Mobile App Development
            </p>

            <p onClick={() => setPage(2)}>
              <img src={ts} alt="" /> Web App Development
            </p>
            <div className="pill">
              <p onClick={() => setPage(3)}>Got a project in mind?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title">
          <h2>Featured Projects</h2>
        </div>
        <div className="row">
          <div className="list">
            {projectData.map((item) => {
              return (
                <div className="card">
                  <h4>{item.header}</h4>
                  <p>{item.brief}</p>

                  <button>Case Study</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="clients">
        <div className="title">
          <h2>Clients</h2>
        </div>
        <div className="row">
          <div className="list">
            {clients.map((item) => {
              return (
                <div className="card">
                  <h4>{item}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="title">
          <div className="pill">
            <p
              onClick={() => setServiceHover(2)}
              className={serviceHover === 2 ? "clicked" : ""}
            >
              Got a project in mind?
            </p>
          </div>
          <h2>Hello@kiecroft.com</h2>
        </div>
      </div>
    </section>
  );
}

function AppDevMB({ setPage }) {
  const infoRef = useRef();
  const optionUpper = useRef();
  const optionMid = useRef();
  const appRef = useRef();
  const [serviceHover, setServiceHover] = useState(0);

  return (
    <section className="entry">
      <div className="nav">
        <img onClick={() => setPage(0)} src={logo} alt="" />
        <button onClick={() => setPage(2)}>Get In Touch</button>
      </div>
      <div ref={infoRef} className="col info">
        <h1>Mobile Apps</h1>
        <h5>
          Development of native mobile applications using Kotlin for Android
          Apps and React Native for cross-platform Apps.
        </h5>
      </div>
      <div className="col grid">
        <div ref={optionUpper} className="item option">
          <h3 ref={appRef}>How does it work...</h3>
          <p>
            I use state-of-the-art tools and technology to create native mobile
            applications, bringing to life your unique idea.
          </p>
        </div>
        <div ref={optionMid} className="item">
          <img src={androidbg} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            tempora in. Ipsa, non blanditiis, nemo perspiciatis ut omnis rerum
            odio aperiam ipsum voluptatem velit praesentium aut asperiores
            aliquam consequuntur vitae!
          </p>
        </div>
      </div>
      <div className="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="list">
            {mobileAppServices.map((item) => {
              return (
                <p onClick={() => setPage(1)}>
                  <img src={kotlin} alt="" /> {item.service}
                </p>
              );
            })}
            <div className="pill">
              <p onClick={() => setPage(3)}>Got a project in mind?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="list">
            {projectData.map((item) => {
              if (item.type === "app") {
                return (
                  <div className="card">
                    <h4>{item.header}</h4>
                    <p>{item.brief}</p>

                    <button>Case Study</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="title">
          <div className="pill">
            <p
              onClick={() => setServiceHover(2)}
              className={serviceHover === 2 ? "clicked" : ""}
            >
              Got a project in mind?
            </p>
          </div>
          <h2>Hello@kiecroft.com</h2>
        </div>
      </div>
    </section>
  );
}

function WebDevMB({ setPage }) {
  const infoRef = useRef();
  const optionUpper = useRef();
  const optionMid = useRef();
  const appRef = useRef();
  const [serviceHover, setServiceHover] = useState(0);

  return (
    <section className="entry">
      <div className="nav">
        <img onClick={() => setPage(0)} src={logo} alt="" />
        <button onClick={() => setPage(2)}>Get In Touch</button>
      </div>
      <div ref={infoRef} className="col info">
        <h1>Web Apps</h1>
        <h5>Development of web applications using ReactJS and Typescript.</h5>
      </div>
      <div className="col grid">
        <div ref={optionUpper} className="item option">
          <h3 ref={appRef}>How does it work...</h3>
          <p>
            I use state-of-the-art tools and technology to create native
            user-friendly and robust web applications, bringing to life your
            unique idea.
          </p>
        </div>
        <div ref={optionMid} className="item">
          <img src={androidbg} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            tempora in. Ipsa, non blanditiis, nemo perspiciatis ut omnis rerum
            odio aperiam ipsum voluptatem velit praesentium aut asperiores
            aliquam consequuntur vitae!
          </p>
        </div>
      </div>
      <div className="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="list">
            {webAppServices.map((item) => {
              return (
                <p onClick={() => setPage(1)}>
                  <img src={kotlin} alt="" /> {item.service}
                </p>
              );
            })}
            <div className="pill">
              <p onClick={() => setPage(3)}>Got a project in mind?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="list">
            {projectData.map((item) => {
              if (item.type === "web") {
                return (
                  <div className="card">
                    <h4>{item.header}</h4>
                    <p>{item.brief}</p>

                    <button>Case Study</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="title">
          <div className="pill">
            <p
              onClick={() => setServiceHover(2)}
              className={serviceHover === 2 ? "clicked" : ""}
            >
              Got a project in mind?
            </p>
          </div>
          <h2>Hello@kiecroft.com</h2>
        </div>
      </div>
    </section>
  );
}

//
//
// Desktop Comps

function HomeDT({ setPage }) {
  const navRef = useRef();
  const infoRef = useRef();
  const gridRef = useRef();
  const serviceRef = useRef();
  const featuresRef = useRef();
  const clientsRef = useRef();
  const footer = useRef();
  const refs = [
    navRef,
    infoRef,
    gridRef,
    serviceRef,
    featuresRef,
    clientsRef,
    footer,
  ];

  // const transition = (page) => {
  //   refs.forEach((ref, i) => {
  //     const time = i / 10 + 0.25;
  //     gsap.to(ref.current, { 
  //       x: -1500, 
  //       duration: time, 
  //       delay: time * 2 
  //     });
  //     if (i === 6) {
  //       setTimeout(() => {
  //         setPage(page);
  //       }, 500);
  //     }
  //   });
  // };

  // useEffect(()=>{
  //   const reverseRefs = refs.reverse();
  //   reverseRefs.forEach((ref, i) => {
  //     const time = i / 10 + 0.25;
  //     gsap.to(ref.current, { 
  //       x: 0, 
  //       duration: time, 
  //       delay: time * 2 
  //     });
  //   });
  // })

  return (
    <section className="entry">
      <div ref={navRef} className="nav">
        <img onClick={() => setPage(0)} src={logo} alt="" />
        <button onClick={() => setPage(3)}>Get In Touch</button>
      </div>
      <div ref={infoRef} className="col info">
        <h1>Kieran Croft</h1>
        <h5>
          Software Engineer specialising in developing{" "}
          <span onClick={() => setPage(1)}>Mobile App Development</span> and{" "}
          <span onClick={() => setPage(2)}>Web Development</span>.
        </h5>
      </div>
      <div ref={gridRef} className="col grid">
        <div className="item option">
          <h3>Hi...</h3>
          <p>
            I use mobile and web app development to bring to life your creative
            ideas...
          </p>
        </div>
        <div className="item">
          <img src={hero} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            tempora in. Ipsa, non blanditiis, nemo perspiciatis ut omnis rerum
            odio aperiam ipsum voluptatem velit praesentium aut asperiores
            aliquam consequuntur vitae!
          </p>
        </div>
      </div>
      <div ref={serviceRef} className="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="list">
            <p onClick={() => setPage(1)}>
              <img src={kotlin} alt="" /> Mobile App Development
            </p>
            <p onClick={() => setPage(2)}>
              <img src={ts} alt="" /> Web App Development
            </p>
            <div className="pill">
              <p onClick={() => setServiceHover(2)}>Got a project?</p>
            </div>
          </div>
          <div className="image">
            <img src={androidbg} alt="" />
            <p>{servicesInfo[0]}</p>
            <button>View</button>
          </div>
        </div>
      </div>
      <div ref={featuresRef} className="features">
        <div className="title">
          <h2>Featured Projects</h2>
        </div>
        <div className="row">
          <div className="list">
            {projectData.map((item, i) => {
              if (i > 2) {
                return (
                  <div className="card">
                    <h4>{item.header}</h4>
                    <p>{item.brief}</p>

                    <button>Case Study</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div ref={clientsRef} className="clients">
        <div className="title">
          <h2>Clients</h2>
        </div>
        <div className="row">
          <div className="list">
            {clients.map((item) => {
              return (
                <div className="card">
                  <h4>{item}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div ref={footer} className="footer">
        <div className="title">
          <div className="pill">
            <p onClick={() => setPage(2)}>Got a project in mind?</p>
          </div>
          <h2>Hello@kiecroft.com</h2>
        </div>
      </div>
    </section>
  );
}

function AppDevDT({ setPage }) {
  const navRef = useRef();
  const infoRef = useRef();
  const gridRef = useRef();
  const serviceRef = useRef();
  const featuresRef = useRef();
  const clientsRef = useRef();
  const footer = useRef();
  const refs = [
    navRef,
    infoRef,
    gridRef,
    serviceRef,
    featuresRef,
    clientsRef,
    footer,
  ];

  const transition = (page) => {
    const tl = gsap.timeline();
    refs.forEach((ref, i) => {
      const time = i / 10 + 0.25;
      console.log(time);
      gsap.to(ref.current, { 
        x: -1500, 
        duration: time, 
        delay: time * 2 
      });
      if (i === 6) {
        setTimeout(() => {
          setPage(page);
        }, 500);
      }
    });
  };

  return (
    <section className="entry">
      <div className="nav">
        <img onClick={() => setPage(0)} src={logo} alt="" />
        <button onClick={() => setPage(3)}>Get In Touch</button>
      </div>
      <div className="col info">
        <h1>Mobile Apps</h1>
        <h5>
          Software Engineer specialising in developing{" "}
          <span onClick={() => setPage(1)}>Mobile App Development</span> and{" "}
          <span onClick={() => setPage(2)}>Web Development</span>.
        </h5>
      </div>
      <div className="col grid">
        <div className="item option">
          <h3>Hi...</h3>
          <p>
            I use mobile and web app development to bring to life your creative
            ideas...
          </p>
        </div>
        <div className="item">
          <img src={hero} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            tempora in. Ipsa, non blanditiis, nemo perspiciatis ut omnis rerum
            odio aperiam ipsum voluptatem velit praesentium aut asperiores
            aliquam consequuntur vitae!
          </p>
        </div>
      </div>
      <div className="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="list">
            {mobileAppServices.map((item) => {
              return (
                <p onClick={() => setPage(1)}>
                  <img src={kotlin} alt="" /> {item.service}
                </p>
              );
            })}
            <div className="pill">
              <p onClick={() => setServiceHover(2)}>Got a project?</p>
            </div>
          </div>
          <div className="image">
            <img src={androidbg} alt="" />
            <p>{servicesInfo[0]}</p>
            <button>View</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title">
          <h2>Featured Projects</h2>
        </div>
        <div className="row">
          <div className="list">
            {projectData.map((item, i) => {
              if (item.type === "app") {
                return (
                  <div className="card">
                    <h4>{item.header}</h4>
                    <p>{item.brief}</p>

                    <button>Case Study</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="title">
          <div className="pill">
            <p onClick={() => setPage(2)}>Got a project in mind?</p>
          </div>
          <h2>Hello@kiecroft.com</h2>
        </div>
      </div>
    </section>
  );
}

function WebDevDT({ setPage }) {
  return (
    <section className="entry">
      <div className="nav">
        <img onClick={() => setPage(0)} src={logo} alt="" />
        <button onClick={() => setPage(3)}>Get In Touch</button>
      </div>
      <div className="col info">
        <h1>Web Apps</h1>
        <h5>
          Software Engineer specialising in developing{" "}
          <span onClick={() => setPage(1)}>Mobile App Development</span> and{" "}
          <span onClick={() => setPage(2)}>Web Development</span>.
        </h5>
      </div>
      <div className="col grid">
        <div className="item option">
          <h3>Hi...</h3>
          <p>
            I use mobile and web app development to bring to life your creative
            ideas...
          </p>
        </div>
        <div className="item">
          <img src={hero} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            tempora in. Ipsa, non blanditiis, nemo perspiciatis ut omnis rerum
            odio aperiam ipsum voluptatem velit praesentium aut asperiores
            aliquam consequuntur vitae!
          </p>
        </div>
      </div>
      <div className="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="list">
            {webAppServices.map((item) => {
              return (
                <p onClick={() => setPage(1)}>
                  <img src={kotlin} alt="" /> {item.service}
                </p>
              );
            })}
            <div className="pill">
              <p onClick={() => setServiceHover(2)}>Got a project?</p>
            </div>
          </div>
          <div className="image">
            <img src={androidbg} alt="" />
            <p>{servicesInfo[0]}</p>
            <button>View</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title">
          <h2>Featured Projects</h2>
        </div>
        <div className="row">
          <div className="list">
            {projectData.map((item, i) => {
              if (item.type === "web") {
                return (
                  <div className="card">
                    <h4>{item.header}</h4>
                    <p>{item.brief}</p>

                    <button>Case Study</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="title">
          <div className="pill">
            <p onClick={() => setPage(2)}>Got a project in mind?</p>
          </div>
          <h2>Hello@kiecroft.com</h2>
        </div>
      </div>
    </section>
  );
}

export default App;
