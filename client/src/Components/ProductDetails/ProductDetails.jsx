import Button from "../Button/Button";
import './ProductDetails.css';
const ProductDetails = () => {
  return (
    <div className="productContainer">
      <div className="leftContainer">
        <div className="titleAndPrice">
          <h3 className="title">chair</h3>
          <p className="price">$20.02</p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
          nesciunt a quidem assumenda deleniti totam, fu ga, qui aspernatur
          labore et facere? Maxime ex voluptates, officiis distinctio unde
          dolore tempora.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
          nesciunt a quidem assumenda deleniti totam, fu ga, qui aspernatur
          labore et facere? Maxime ex voluptates, officiis distinctio unde
          dolore tempora.
        </p>
        <Button text="Add To Cart" />
      </div>
      <div className="rightContainer">
        <img
          className="productImg"
          src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="product"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
