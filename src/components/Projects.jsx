import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const spotlightProjects = {
      SplitBuddy: {
        title: "SplitBuddy",
        desc: "A full-stack expense tracker for seamless group expense management. It offers secure data storage, user authentication, and detailed expense tracking with a user-friendly interface.",
        techStack: "MONGODB EXPRESS.JS REACT.JS NODE.JS",
        link: "https://github.com/Himral/SplitWise-Clone",
        open: "",
        image: "/assets/splitbuddy.png",
      },
      Sahayogi: {
        title: "Sahayogi",
        desc: "A platform dedicated to empowering underprivileged children by providing access to education, healthcare, and growth opportunities, ensuring a brighter future for all.",
        techStack: "HTML CSS JAVASCRIPT",
        link: "https://github.com/Himral/OSDC_deja_bytes",
        open: "https://himral.github.io/OSDC_deja_bytes/start.html",
        image: "/assets/sahayogi.png",
      },
    };
    const projects = {
      "Metro Guide System": {
        desc: "Navigate the metro like a pro! This C++ Metro Guide System finds the shortest route or the least interchanges between stations, ensuring a smooth and efficient journey through a fictional metro network.",
        techStack: "C++",
        link: "https://github.com/Himral/DMRC-CPP-Console-App",
        open: "",
      },
      "WhatsApp Chat Analyser": {
        desc: "A powerful WhatsApp chat analysis app that delivers in-depth insights into both group and individual conversations. Get detailed stats, trends, and patterns to understand your messaging habits like never before! 🚀📊",
        techStack: "Python , Data Analysis",
        link: "https://github.com/Himral/Chat-Analyser",
        open: "",
      },
      FitTribe: {
        desc: "A dynamic social fitness platform where users connect, share workouts, and track their fitness journeys. Engineered secure authentication with JWT and optimized data management with MongoDB, ensuring a seamless and private user experience.",
        techStack: "Node.js (Express.js), React.js, MongoDB",
        link: "https://github.com/Himral/FitTribe-TribeUpLevelUp",
      },
      SplitBuddy: {
        desc: "Built a secure MERN-based expense tracker, enabling seamless group splitting and logging. Designed a robust Express.js backend with JWT authentication and optimized MongoDB for fast, efficient data handling.",
        techStack: "MongoDb, React.js, Node.js, Express.js, Material UI",
        link: "https://github.com/Himral/SplitWise-Clone",
        open: "",
      },
      Bookwise: {
        desc: "Stop doom-scrolling and start discovering! This repository is your secret weapon for finding your next favorite book. Get ready for personalized recommendations that actually slap. ",
        techStack: "Python",
        link: "https://github.com/Himral/BOOK_RECOMMENDATION",
        open: "",
      },
      Sahayogi: {
        desc: "A platform dedicated to empowering underprivileged children by providing access to education, healthcare, and growth opportunities, ensuring a brighter future for all.",
        techStack: "HTML CSS Javascript",
        link: "https://github.com/Himral/OSDC_deja_bytes",
        open: "https://himral.github.io/OSDC_deja_bytes/start.html",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
