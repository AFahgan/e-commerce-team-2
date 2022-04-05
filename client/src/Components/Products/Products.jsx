import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ isSeller, isCart, products , handleChangeId }) => {
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard handleChangeId={handleChangeId} key={product.id} isSeller={isSeller} isCart={isCart} product={product} />
      ))}
    </ul>
  );
};

export default Products;
