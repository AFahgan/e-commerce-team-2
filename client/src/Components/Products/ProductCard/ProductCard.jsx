import './ProductCard.css';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ isSeller, isCart, product }) => {
  const { name, price, image, id } = product;
  const navigate = useNavigate();

  return (
    <li className='card' id={id}>
      <div className='card-main'>
        {!isSeller && !isCart && <i className='fa-solid fa-cart-plus' />}

        <img src={image} alt='product' />
      </div>

      {!isSeller && !isCart ? (
        <div className='info'>
          <div className='details'>
            <span className='price'>{price}</span>
            <span className='name'>{name}</span>
          </div>

          <Button text='More' handleOnClick={() => navigate(`/product/${id}`)} />
        </div>
      ) : (
        <div className='info'>
          <span className='name'>{name}</span>
          <div className='actions'>
            {!isCart ? <i className='fa-solid fa-pen-to-square'></i> : false}
            <i className='fa-solid fa-trash-can'></i>
          </div>
        </div>
      )}
    </li>
  );
};

export default ProductCard;
