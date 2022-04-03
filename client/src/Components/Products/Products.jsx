import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ isSeller, isCart, products }) => {
  return (
    <ul className='grid'>
      {products.map((product) => (
        <ProductCard isSeller={isSeller} isCart={isCart} product={product} />
      ))}
    </ul>
  );
};

export default Products;
