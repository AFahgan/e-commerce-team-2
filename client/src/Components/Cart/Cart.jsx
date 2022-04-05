import Header from '../Header/Header';
import Products from '../Products/Products';
import './Cart.css';

const Cart = ({handelDeleteFromCart}) => {
  const products = JSON.parse(localStorage.getItem('products')) || []
  const totalPrice = products.reduce((acc, { price }) => acc + +price, 0);

  return (
    <>
      <Header />
      <div className='action'>
        <p className='total-price'>
          Total Price: <span>${totalPrice}</span>
        </p>
      </div>
      <Products isCart products={products} handelDeleteFromCart={handelDeleteFromCart} />
    </>
  );
};

export default Cart;
