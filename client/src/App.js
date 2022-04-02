import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1').then(console.log);
  }

  render() {
    return <div className='App'>app</div>;
  }
}


export default App;
