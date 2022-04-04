import './App.css';
import { Component } from 'react';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';

class App extends Component {
  state = {
    products: [],
    category:'All',
    price:100,
    proudectName: '',
    FilterProducts: [],
    isLogIn: false,
  };

  handleLogIn = () => {
    this.setState((previousState) => ({
      isLogIn: !previousState.isLogIn
    }));
  };
  handelSearch = (e) => {
    const { products } = this.state;
    if (e.keyCode === 13) {
      e.target.click();
      this.setState({
        FilterProducts: products.filter(
          (ele) => ele.name.includes(e.target.value)
        ),
      });
    }
  };
  changePrice = (e) => {
    this.setState({ price: e.target.value });
  };
  changeCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  render() {
    const { products, FilterProducts, category, price, isLogIn } = this.state;
    return (
      <div className="App">
        <Header
          handelSearch={this.handelSearch}
          changePrice={this.changePrice}
          changeCategory={this.changeCategory}
        />
        <Landing checkState={isLogIn} handleOnClick={this.handleLogIn}/>
        <Products
          products={
            FilterProducts.length
              ? FilterProducts.filter((ele) =>
                  category === 'All'
                    ? ele.price === +price
                    : ele.price === +price && ele.category === category
                )
              : products.filter((ele) =>
                  category === 'All'
                    ? ele.price === +price
                    : ele.price === +price && ele.category === category
                )
          }
        />
      </div>
    );
  }
}

export default App;

// todo product details component

// todo login pop component
// todo add product pop component
