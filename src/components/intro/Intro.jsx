import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey There! I'm</h2>
          <h1 className="i-name">Hasith Deminda </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Project Manager</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Android Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a project manager & Full-Stack developer with a passion for
            <br />
            learning new technologies and project management skills.
            <br />
            <br />
            <strong>
              {" "}
              I'm currently working as an Associate Software Engineer and
              <br />
              Project Manager at{" "}
            </strong>
            <a
              href="https://syntaxgenie.com/"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "blue", cursor: "pointer" }}>
                Syntax Genie.
              </span>
            </a>
            <br />
            <br />
          </p>

          <div className="profile-options">
            <a href="https://linkedin.com/in/hasith-deminda">
              <button className="btn-primary-btn">Hire Me</button>
            </a>
            <a
              href="https://drive.google.com/drive/folders/14kVm0bF2Llh8tbR9JBYPKRLqgmX6PSMC?usp=sharing"
              download="Hasith Deminda-Resume.pdf"
            >
              <button className="btn-highlighted-btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img
          src="https://res.cloudinary.com/desnqqj6a/image/upload/v1657373118/Pngtree_web_development_illustration_modern_4461019_gwwu7h.png"
          alt=""
          className="i-img"
        />
      </div>
    </div>
  );
};

export default Intro;
