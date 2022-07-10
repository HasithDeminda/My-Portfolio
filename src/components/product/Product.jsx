import "./product.css";

const Product = ({ img, link, topic, stack }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="topic">{topic}</div>
      </div>
      <div className="p-img">
        <img className="p-img-img" src={img} alt="" />
      </div>
      <div className="stack">
        <strong>Used Technologies :</strong> {stack}
      </div>
      <br />
      <div className="links">
        <a href={link}>
          <div className="link-btn">
            <button style={{ width: "fit-content" }}>GitHub Link</button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Product;
