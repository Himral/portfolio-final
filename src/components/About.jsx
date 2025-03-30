import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I’m a <b>Final-year Computer Science student</b> at
        <a href="https://www.jiit.ac.in/"> JIIT Noida</a>, passionate about
        problem-solving and full-stack development. I’ve built projects like
        SplitWise Clone and FitTribe using the MERN stack and led programming
        workshops as a <b>Student Coordinator</b> at Knuth Programming Hub. I
        was also among 300 students selected for
        <b>
          <a href="https://amazonmlsummerschoolindia.splashthat.com/">
            {" "}
            Amazon ML Summer School{" "}
          </a>
        </b>{" "}
        out of 85,000 applicants.
      </p>
    );
    const two = (
      <p>
        Outside tech, I enjoy music, writing, and video editing. You’ll often
        find me scrolling through Pinterest, capturing ideas, or collaborating
        on something creative!
      </p>
    );

    const tech_stack = [
      "React.js",
      "Node.js",
      "C++",
      "Javascript",
      "Express.js",
      "Python",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Himral Garg" src={"/assets/me2.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
