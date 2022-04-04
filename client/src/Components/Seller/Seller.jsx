import Button from '../Button/Button';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Seller.css';
import AddProductForm from '../AddProductForm/AddProductForm.jsx';

const Seller = ({ products, handleAddProductPop, isAddProduct, handelChange }) => {
  return (
    <>
      <Header />
      <div className='action'>
        <Button text='+ Add Product' handleOnClick={handleAddProductPop} />

        {isAddProduct && <AddProductForm handleAddProductPop={handleAddProductPop} handelChange={handelChange} />}
      </div>
      <Products isSeller products={products} />
    </>
  );
};

export default Seller;
