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
}) => {
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          isSeller={isSeller}
          isCart={isCart}
          product={product}
          isEditProduct={isEditProduct}
          handleEditProductPop={handleEditProductPop}
          handleEditSubmit={handleEditSubmit}
          inputsValues={inputsValues}
          handleInputChange={handleInputChange}
        />
      ))}
    </ul>
  );
};

export default Products;
