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
import { ToastContainer, toast } from 'react-toastify';
import NotFoundPage from './Components/NotFound/NotFound';


class App extends Component {
  state = {
    products: [],
    category: 'All',
    price: 10,
    productName: '',
    isLogIn: false,
    isAddProduct: false,
    isEditProduct: false,
    inputsValues: { name: '', description: '', price: 0.0, image: '' },
    editedProductId: null,
    isConfirmsDelete: false,
    deletedProductId: '',
    productDetails: { id: '', name: '', description: '', image: '', price: '' },
    productsCart: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/product').then(({ data }) => {
      this.setState({ products: data });
    });
  }

  updateState = () => {
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

  handleEditProductPop = ({ target: { id } }) => {
    const { name, description, image, category, price } =
      this.state.products.find(({ id: pId }) => pId === +id) || [];

    this.setState((previousState) => ({
      isEditProduct: !previousState.isEditProduct,
      inputsValues: { name, description, image, category, price },
      editedProductId: id,
    }));
  };

  handleInputChange = ({ target }) => {
    this.setState({
      inputsValues: { ...this.state.inputsValues, [target.name]: target.value },
    });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    const id = this.state.editedProductId;
    const inputsValues = this.state.inputsValues;

    axios
      .patch(`http://localhost:3001/api/v1/product/${id}`, inputsValues)
      .then(() =>
        this.setState((previousState) => ({ isEditProduct: !previousState.isEditProduct })),
      )
      .then(this.updateState)
      .then(() => toast.success('Your Product has been edited Successfully!'));
  };

  handelSearch = (e) => {
    this.setState({ productName: e.target.value });
  };

  handelChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleProductDetails = ({ id, name, description, image, price }) => {
    this.setState({
      productDetails: { id, name, description, image, price },
    });
  };
  handleChangeId = (Id) => {
    const { products } = this.state;
    window.localStorage.setItem(
      'products',
      JSON.stringify(
        window.localStorage.products
          ? [
              ...JSON.parse(window.localStorage.products),
              ...products.filter((e) => e.id === +Id),
            ]
          : [...products.filter((e) => e.id === +Id)],
      ),
    );
    toast.success('Your Product has been added in Cart Successfully!');
  };
  handelDeleteFromCart = (id) => {
    let products = JSON.parse(window.localStorage.products);
    this.setState({ productsCart: JSON.parse(window.localStorage.products) });
    for (let i = 0; i <= products.length; i++) {
      if (products[i].id === id) {
        products[i] = [];
        break;
      }
    }
    window.localStorage.clear();
    window.localStorage.setItem('products', JSON.stringify(products.filter((e) => e.length !== 0)));
  };
  
  render() {
    const {
      productName,
      products,
      category,
      price,
      isLogIn,
      isAddProduct,
      isConfirmsDelete,
      deletedProductId,
      productDetails,
      isEditProduct,
      inputsValues,
    } = this.state;
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
                <ToastContainer />
                <Landing checkState={isLogIn} handleOnClick={this.handleLogIn} />
                <Products
                  handleChangeId={this.handleChangeId}
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
                />
              </>
            }
          />

          <Route
            path='/cart'
            element={<Cart
              handelSearch={this.handelSearch}
              productName={productName}
              handelChange={this.handelChange}
              handelDeleteFromCart={this.handelDeleteFromCart}
              price={price}
              category={category}
            />}
          />
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
                isEditProduct={isEditProduct}
                handleAddProductPop={this.handleAddProductPop}
                handleEditProductPop={this.handleEditProductPop}
                handleEditSubmit={this.handleEditSubmit}
                inputsValues={inputsValues}
                handleInputChange={this.handleInputChange}
                handelChange={this.handelChange}
                updateState={this.updateState}
                price={price}
                category={category}
                handelSearch={this.handelSearch}
                productName={productName}
              />
            }
          />
          <Route
            path='/product/:id'
            element={
              <>
                <ToastContainer />
                <ProductDetails
                  handleChangeId={this.handleChangeId}
                  handleProductDetails={this.handleProductDetails}
                  productDetails={productDetails}
                />
              </>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
