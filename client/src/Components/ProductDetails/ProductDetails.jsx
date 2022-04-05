import Button from "../Button/Button";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ProductDetails.css';

const ProductDetails = ({ handleProductDetails, productDetails , handleChangeId }) => {
  let { id } = useParams();
  const { name, description, image, price } = productDetails;
  axios.get(`http://localhost:3001/api/v1/product/${id}`)
      .then(res => {
        const { name, description, image, price} = res.data[0];
        handleProductDetails({ name, description, image, price })
      })

  return (
    <div className="productContainer">
      <div className="leftContainer">
        <div className="titleAndPrice">
          <h3 className="title">{name}</h3>
          <p className="price">${price}</p>
        </div>
        <p className="description">
          {description}
        </p>
        <Button id={id} text="Add To Cart" handleOnClick={()=>handleChangeId(id)}/>
      </div>
      <div className="rightContainer">
        <img
          className="productImg"
          src={image}
          alt="product"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
