import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://res.cloudinary.com/desnqqj6a/image/upload/v1707581838/Hasith_Deminda_Square_vxex97.jpg"
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
          Passionate and committed project management enthusiast, combining
          technical skills with business insight to achieve success. Highly
          organized team player with a strong sense of responsibility, skilled
          at managing multiple tasks effectively. Dedicated to building
          efficient teams and achieving exceptional outcomes.
          <br />
          <br />
          <br />
          <h2
            className="a-title"
            style={{
              textDecoration: "underline",
            }}
          >
            Experience
          </h2>
          <p className="a-sub">
            <h4>2023 Nov - Present</h4>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div>
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1707585158/Arimac_cbtivf.png"
                  alt=""
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "5px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                {" "}
                Project Manager at{" "}
                <a
                  href="https://arimaclanka.com"
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  Arimac
                </a>
              </div>
            </div>
            <br />

            <h4>2021 Dec - Present</h4>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div>
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1707585173/Fiverr_ijz0nf.png"
                  alt=""
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "5px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                Freelance Web Developer at{" "}
                <a
                  href="https://Fiverr.com"
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  Fiverr
                </a>
              </div>
            </div>

            <br />
            <h4>2022 July - 2023 Nov</h4>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div>
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1703936808/sgx-logo_1_dw1z1s.png"
                  alt=""
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "5px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                Associate Project Manager at{" "}
                <a
                  href="https://syntaxgenie.com"
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  Syntax Genie
                </a>
              </div>
            </div>

            <br />
            <h4>2022 Jan - July</h4>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div>
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1703936808/sgx-logo_1_dw1z1s.png"
                  alt=""
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "5px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                Intern Software Engineer at{" "}
                <a
                  href="https://syntaxgenie.com"
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  Syntax Genie
                </a>
              </div>
            </div>
          </p>
          <br />
          <br />
          <h2
            className="a-title"
            style={{
              textDecoration: "underline",
            }}
          >
            Education
          </h2>
          <p className="a-sub">
            <h4>2020 - 2023</h4>
            🎓 BSc (Hons) in IT, specialized in Software Engineering, SLIIT, Sri
            Lanka
            <br />
            <br />
            <h4>School</h4>
            👨‍🎓 Galahitiyawa Central College, Ganemulla, Gampaha, Sri Lanka
            <br />
            <br />
            {/* <h4>2019</h4>
            <li>GCE Advanced Level </li>
            <br />
            <h4>2015</h4>
            <li>GCE Ordinary Level </li> */}
          </p>
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
