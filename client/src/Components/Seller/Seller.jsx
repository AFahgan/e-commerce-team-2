import Button from '../Button/Button';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Seller.css';
import AddProductForm from '../AddProductForm/AddProductForm.jsx';

const Seller = ({ products, handleAddProductPop, isAddProduct }) => {
  return (
    <>
      <Header />
      <div className='action'>
        <Button text='+ Add Product' handleOnClick={handleAddProductPop} />

        {isAddProduct && <AddProductForm handleAddProductPop={handleAddProductPop} />}
      </div>
      <Products isSeller products={products} />
    </>
  );
};

export default Seller;
