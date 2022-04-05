import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ isSeller, isCart, products , handleChangeId ,  handelDeleteFromCart}) => {
  console.log(handelDeleteFromCart);
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard handelDeleteFromCart={handelDeleteFromCart} handleChangeId={handleChangeId} key={product.id} isSeller={isSeller} isCart={isCart} product={product} />
      ))}
    </ul>
  );
};

export default Products;
