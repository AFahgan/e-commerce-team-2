import './App.css';
import { Component } from 'react';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart.jsx';
import Seller from './Components/Seller/Seller.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import axios from 'axios';
class App extends Component {
  state = {
    products: [],
    category: 'All',
    price: 100,
    proudectName: '',
    FilterProducts: [],
    isLogIn: false,
    isAddProduct: false,
    isConfirmsDelete: false,
    deletedProductId:''
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/product').then(({ data }) => {
      this.setState({ products: data });
    });
  };
  setStateProductId = (id) => {
    this.setState(() => ({
      deletedProductId: id,
    }));
  };

  handleLogIn = () => {
    this.setState((previousState) => ({
      isLogIn: !previousState.isLogIn,
    }));
  };
  handConfirmDeleting = () => {
     this.setState((previousState) => ({
      isConfirmsDelete: !previousState.isConfirmsDelete,
    }));
  };
  handleAddProductPop = () => {
    this.setState((previousState) => ({
      isAddProduct: !previousState.isAddProduct,
    }));
  };
  handelSearch = (e) => {
    const { products } = this.state;
    if (e.keyCode === 13) {
      e.target.click();
      this.setState({
        FilterProducts: products.filter((ele) => ele.name.includes(e.target.value)),
      });
    }
  };
  handelChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    const { products, FilterProducts, category, price, isLogIn, isAddProduct,isConfirmsDelete, deletedProductId } = this.state;
    return (
      <div className='App'>
        <Header
          handelSearch={this.handelSearch}
          handelChange={this.handelChange}
          price={price}
        />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Landing checkState={isLogIn} handleOnClick={this.handleLogIn} />
                <Products
                  products={
                    FilterProducts.length
                      ? FilterProducts.filter((ele) =>
                          category === 'All'
                            ? ele.price >= +price
                            : ele.price >= +price && ele.category === category,
                        )
                      : products.filter((ele) =>
                          category === 'All'
                            ? ele.price >= +price
                            : ele.price >= +price && ele.category === category,
                        )
                  }
                />
              </>
            }
          />

          <Route path='/cart' element={<Cart />} />
          <Route
            path='/seller'
            element={
              <Seller
              deletedProductValue={deletedProductId}
              deletedProductId={this.setStateProductId}
                checkState={isConfirmsDelete}
                handleOnClick={this.handConfirmDeleting}
                products={products}
                isAddProduct={isAddProduct}
                handleAddProductPop={this.handleAddProductPop}
                handelChange={this.handelChange}
              />
            }
          />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<h1>not found</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;

// todo add component did mount to get products => abdullha
// todo get productsDetails based on id => abdullah

// todo add to cart in localstorage => mayar
// todo remove from cart localstorage => mayar

// todo add product to database with confrim msg => rand
// todo delete product with confirm pop => rand

// todo seller edit product with editform => amjad
