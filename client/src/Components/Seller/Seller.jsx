import Button from '../Button/Button';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Seller.css';

const Seller = ({ products }) => {
  return (
    <>
      <Header />
      <div className='action'>
        <Button text='+ Add Product' />
      </div>
      <Products isSeller products={products} />
    </>
  );
};

export default Seller;
