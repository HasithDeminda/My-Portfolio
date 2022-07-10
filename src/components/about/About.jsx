import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://res.cloudinary.com/desnqqj6a/image/upload/v1657437416/IMG-20220414-WA0130_opnuxe.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title" style={{ fontWeight: 500 }}>
          About Me
        </h1>
        <br />
        <p className="a-desc" style={{ textAlign: "justify" }}>
          Driven student leveraging studies in software engineering and project
          management to build a career in the industry. Offers a unique blend of
          technical and business skills to build a successful and efficient
          team. Organized and determined team player with a strong sense of
          managing multiple priorities with a high level of responsibility.
          <br />
          <br />
          <br />
          <h2 className="a-title">Experience</h2>
          <p className="a-sub">
            <h4>Current</h4>
            🧑‍💻 Associate Software Engineer & Project Manager at{" "}
            <a
              href="https://syntaxgenie.com"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Syntax Genie (Pvt) Ltd
            </a>
            <br />
            <br />
            <h4>Current</h4>
            🧑‍💻 Freelancing Web Developer at{" "}
            <a
              href="https://Fiverr.com"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Fiverr
            </a>
            <br />
            <br />
            <h4>2022 Jan - July</h4>
            🧑‍💻 Intern at Syntax Genie (Pvt) Ltd
          </p>
          <br />
          <br />
          <h2 className="a-title">Education</h2>
          <p className="a-sub">
            <h4>2020 - 2023</h4>
            🎓 3rd Year Software Engineering Undergraduate at SLIIT
            <br />
            <br />
            <h4>School</h4>
            👨‍🎓 Galahitiyawa Central College, Ganemulla, Gampaha.
            <br />
            <br />
            <h4>2019</h4>
            <li>GCE Advanced Level </li>
            <br />
            <h4>2015</h4>
            <li>GCE Ordinary Level </li>
          </p>
          <br />
          <div>
            <>
              <h2 className="a-title">Technologies I'm good at</h2>
              <br />
              <ul className="columns" data-columns="2">
                <li>React Js</li>
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>MySQL</li>
                <li>Python</li>
                <li>Node Js</li>
                <li>Android Studio</li>
                <li>Java</li>
              </ul>
            </>
            <>
              <br />
              <br />
              <h2 className="a-title">Project Management Skills</h2>
              <br />
              <ul className="columns" data-columns="2">
                <li>Requirements Analysis</li>
                <li>Effective Communication </li>
                <li>Scheduling & Time Management</li>
                <li>Leadership Skills</li>
                <li>Critical Thinking and Problem Solving</li>
              </ul>
            </>
            <br />
            <br />
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
