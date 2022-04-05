import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ isSeller, isCart, products, handleOnClick, checkState, deletedProductId, deletedProductValue }) => {
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard key={product.id} isSeller={isSeller} isCart={isCart} product={product} handleOnClick={handleOnClick} checkState={checkState} deletedProductId={deletedProductId} deletedProductValue={deletedProductValue}/>
      ))}
    </ul>
  );
};

export default Products;
