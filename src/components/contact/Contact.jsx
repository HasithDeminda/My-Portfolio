import "./contact.css";

const Contact = () => {
  return (
    <div className="c">
      <footer className="footer-distributed" id="contactId">
        <div className="footer-left">
          <h3>
            <img
              className="c-icon-my"
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1707581838/Hasith_Deminda_Square_vxex97.jpg"
              alt=""
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </h3>

          <p className="footer-links">
            <p
              className="footer-company-about1"
              style={{
                width: "200px",
                marginTop: "-200px",
                marginLeft: "230px",
                textAlign: "justify",
              }}
            >
              <span>Contact Me</span>
              Get in touch with me through my personal mail or contact number.
              Always available for freelancing if the right project comes along
              me.
            </p>
          </p>
        </div>

        <div className="footer-center" style={{ textAlign: "justify" }}>
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Gampaha | Sri Lanka</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>071 707 3719</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:demindahasith@gmail.com">
                demindahasith@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About this Portfolio</span>
            This website has only created for my study purposes.
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/hasith.deminda.5">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/hasith_deminda/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/HasithDeminda">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/hasith-deminda">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
