import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({
  isSeller,
  isCart,
  products,
  isEditProduct,
  handleEditProductPop,
  handleEditSubmit,
  inputsValues,
  handleInputChange,
  handleChangeId,
  handelDeleteFromCart,
  handleOnClick,
  checkState,
  deletedProductId,
  deletedProductValue,
  updateState
}) => {
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard
          isEditProduct={isEditProduct}
          handleEditProductPop={handleEditProductPop}
          handleEditSubmit={handleEditSubmit}
          inputsValues={inputsValues}
          handleInputChange={handleInputChange}
          handleChangeId={handleChangeId}
          handelDeleteFromCart={handelDeleteFromCart}
          key={product.id}
          isSeller={isSeller}
          isCart={isCart}
          product={product}
          handleOnClick={handleOnClick}
          checkState={checkState}
          deletedProductId={deletedProductId}
          deletedProductValue={deletedProductValue}
          updateState={updateState}
        />
      ))}
    </ul>
  );
};

export default Products;
