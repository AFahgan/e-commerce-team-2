import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ products=[1,1,1,1], isSeller, isCart }) => {
  return (
      <ul className='grid'>
        {products.map((product) => (
          <ProductCard isSeller={isSeller} isCart={isCart} {...product}/>
        ))}
      </ul>
  );
};

export default Products;
