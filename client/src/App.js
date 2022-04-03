import './App.css';
import { Component } from 'react';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';

class App extends Component {
  state = {
    products: [],
    proudectName: '',
  };
  handelSearch = (value) => {
    this.setState({ proudectName: value });
  };
  render() {
    return (
      <div className='App'>
        <Header handelSearch={this.handelSearch} />
        <Landing />
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;

// todo product details component

// todo login pop component
// todo add product pop component
