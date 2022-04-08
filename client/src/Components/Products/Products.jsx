import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({
  quantity,
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
  updateState,
}) => {
  return (
    <ul className='flex' id='products'>
      {products.length ? null : <h2 className='no-products-text'>No Products Found !!</h2>}
      {products.map((product) => (
        <ProductCard
          quantity={quantity}
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
