import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://res.cloudinary.com/desnqqj6a/image/upload/v1633534985/wacwoo335focclm9tdyb.jpg"
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
          Driven student leveraging studies in Software Engineering field seeks
          real-world experience as an Intern Software Engineer. Offers strong
          interpersonal and task prioritization skills. Organized and dependable
          candidate successful at managing multiple priorities with a positive
          attitude. Willingness to take on added responsibilities to meet team
          goals.
          <br />
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
          <h2 className="a-title">Technologies I'm good at</h2>
          <br />
          <ul className="columns" data-columns="2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>Python</li>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Android Studio</li>
            <li>Java</li>
            <li>C </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
