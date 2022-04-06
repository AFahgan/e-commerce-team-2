import Button from '../Button/Button';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Seller.css';
import AddProductForm from '../AddProductForm/AddProductForm.jsx';
import EditProductForm from '../EditProductForm/EditProductForm';

const Seller = ({
  products,
  handleAddProductPop,
  isAddProduct,
  isEditProduct,
  handleEditProductPop,
  handleEditSubmit,
  inputsValues,
  handleInputChange,
  checkState,
  handleOnClick,
  deletedProductId,
  deletedProductValue,
  handelChange,
  updateState,
  price,
  category,
  handelSearch,
  productName
}) => {
  return (
    <>
      <Header handelChange={handelChange} price={price}  handelSearch={handelSearch}/>
      <div className='action'>
        <Button text='+ Add Product' handleOnClick={handleAddProductPop} />

        {isAddProduct && (
          <AddProductForm
            updateState={updateState}
            handleAddProductPop={handleAddProductPop}
            handelChange={handelChange}
          />
        )}

        {isEditProduct && (
          <EditProductForm
            handleSubmit={handleEditSubmit}
            handleAddProductPop={handleAddProductPop}
            inputsValues={inputsValues}
            handleInputEditChange={handleInputChange}
            handleEditProductPop={handleEditProductPop}
          />
        )}
      </div>
      <Products
        isSeller
        products={
          productName
          ? (
            category === 'All'
            ? products.filter((ele)=> ele.price >= +price && ele.name.includes(productName))
            : products.filter((ele)=> ele.price >= +price && ele.category === category && ele.name.includes(productName))
          )
          : (
            category === 'All'
            ? products.filter((ele) => ele.price >= +price)
            : products.filter((ele) => ele.price >= +price && ele.category === category) 
          )
        }
        isEditProduct={isEditProduct}
        handleEditProductPop={handleEditProductPop}
        handleEditSubmit={handleEditSubmit}
        handleInputChange={handleInputChange}
        checkState={checkState}
        handleOnClick={handleOnClick}
        deletedProductId={deletedProductId}
        deletedProductValue={deletedProductValue}
        updateState={updateState}
      />
    </>
  );
};

export default Seller;
