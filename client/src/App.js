import './App.css';
import { Component } from 'react';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
class App extends Component {
  state = {
    products: [{}],
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
        <Products />
      </div>
    );
  }
}

export default App;

// todo seller page component
// todo cart component
// todo product details component

// todo login pop component
// todo add product pop component
