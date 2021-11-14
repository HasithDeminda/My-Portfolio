import "./product.css";

const Product = ({ img, link, topic }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="topic">{topic}</div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
