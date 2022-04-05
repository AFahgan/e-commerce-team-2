import Header from '../Header/Header';
import Products from '../Products/Products';
import './Cart.css';

const Cart = () => {
  const products = JSON.parse(localStorage.getItem('products')) || []
  console.log(products);
  const totalPrice = products.reduce((acc, { price }) => acc + +price, 0);

  return (
    <>
      <Header />
      <div className='action'>
        <p className='total-price'>
          Total Price: <span>${totalPrice}</span>
        </p>
      </div>
      <Products isCart products={products} />
    </>
  );
};

export default Cart;
