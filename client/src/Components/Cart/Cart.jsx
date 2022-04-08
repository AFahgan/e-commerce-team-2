import Header from '../Header/Header';
import Products from '../Products/Products';
import './Cart.css';

const Cart = ({
  handelDeleteFromCart,
  handelSearch,
  price,
  category,
  productName,
  handelChange,
  quantity,
}) => {
  const products = JSON.parse(localStorage.getItem('products')) || [];

  const filterProducts = productName
    ? category === 'All'
      ? products.filter((ele) => ele.price >= +price && ele.name.includes(productName))
      : products.filter(
          (ele) =>
            ele.price >= +price && ele.category === category && ele.name.includes(productName),
        )
    : category === 'All'
    ? products.filter((ele) => ele.price >= +price)
    : products.filter((ele) => ele.price >= +price && ele.category === category);

  const totalPrice = filterProducts
    .reduce((acc, { price, quantity }) => acc + +price * quantity, 0)
    .toFixed(2);
  return (
    <>
      <Header handelSearch={handelSearch} handelChange={handelChange} price={price} />
      <div className='action'>
        <p className='total-price'>
          Total Price: <span>${totalPrice}</span>
        </p>
      </div>
      <Products
        quantity={quantity}
        isCart
        products={filterProducts}
        handelDeleteFromCart={handelDeleteFromCart}
      />
    </>
  );
};

export default Cart;
