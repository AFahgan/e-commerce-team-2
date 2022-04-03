import './App.css';
import { Component } from 'react';
import Products from './Components/Products/Products';
import Container from './Components/Container/Container';

class App extends Component {
  state = { products: [] };

  render() {
    return (
      <Container>
        <div className='App'>
          <Products />
        </div>
      </Container>
    );
  }
}

export default App;

// todo header component
// todo Landing component
// todo products => productCard
// todo seller page component
// todo cart component
// todo product details component

// todo login pop component
// todo add product pop component
