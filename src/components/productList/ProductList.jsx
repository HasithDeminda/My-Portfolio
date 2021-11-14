import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          Here are some of my projects and Researches that I have Implemented !
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            topic={item.topic}
          />
        ))}
      </div>

      <br />
      <br />
      <br />
      <div className="pl-texts">
        <h1 className="pl-title">Want to know more about me?</h1>
        <p className="pl-desc">
          Please go through my social networks! You'll find it interesting 😍❤️
          <br />* I have published my certificates and skills in my LinkedIn
          profile. Please refer it for more.
        </p>

        <br />
        <div className="wrapper">
          <a href="https://www.facebook.com/hasith.deminda.5">
            <div className="icon facebook">
              {/* <div class="tooltip">Facebook</div> */}

              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </div>
          </a>

          {/* <a href="https://www.instagram.com/hasith_deminda/">
            <div className="icon instagram">
              <div class="tooltip">Instagram</div>

              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </div>
          </a> */}

          <a href="https://github.com/HasithDeminda">
            <div className="icon github">
              {/* <div class="tooltip">Github</div> */}
              <span>
                <i className="fab fa-github"></i>
              </span>
            </div>
          </a>

          <a href="https://linkedin.com/in/hasith-deminda">
            <div className="icon youtube">
              {/* <div class="tooltip">LinkedIn</div> */}
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
            </div>
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProductList;
