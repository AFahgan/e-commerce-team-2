import './App.css';
import { Component } from 'react';
import Button from './Components/Button/Button';

class App extends Component {
  state = { products: [] };

  render() {
    return (
      <div className='App'>
        <Button text='add product' />
      </div>
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
