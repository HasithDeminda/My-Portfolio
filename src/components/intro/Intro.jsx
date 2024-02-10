import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey There! I am</h2>
          <h1 className="i-name">Hasith Deminda </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Project Manager</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Scrum Master</div>
            </div>
          </div>
          <p
            className="i-desc"
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            I'm a project manager & Full-Stack web developer with a passion for
            <br />
            learning new technologies and project management skills.
            <br />
            <br />
            <strong> I'm currently working as a Project Manager at </strong>
            <a
              href="https://arimaclanka.com/"
              style={{ textDecoration: "none" }}
            >
              <span
                style={{ color: "#ffc200", cursor: "pointer", fontWeight: 600 }}
              >
                Arimac
              </span>
            </a>
            <br />
            <br />
          </p>

          <div className="profile-options">
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button className="btn-primary-btn">
                <a
                  href="https://drive.google.com/file/d/1KV-ROz8iJxSGcI88y8Z6ansDpV__Zfql/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-download"></i> Download Resume
                </a>
              </button>

              <button className="btn-highlighted-btn">
                <a href="https://www.linkedin.com/in/hasith-deminda">
                  <i class="fas fa-envelope"></i> Contact Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img
          src="https://res.cloudinary.com/desnqqj6a/image/upload/v1707579685/Online_resume-bro_ydytmv.png"
          alt=""
          className="i-img"
        />
      </div>
    </div>
  );
};

export default Intro;
