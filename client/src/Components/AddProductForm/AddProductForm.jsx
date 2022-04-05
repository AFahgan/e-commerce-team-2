import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './AddProductForm.css';
import { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddProductForm extends Component {
  state = {
    productName: '',
    productDescription: '',
    productImage : '',
    productPrice : '',
    category: ''
  };
  handelChange = (name, value) => {
    this.setState({ [name]: value });
  };
  addProductToDataBase = () => {
    const {productName, productDescription, productImage, productPrice, category} = this.state;
    axios.post('http://localhost:3001/api/v1/product',{
      name: productName,
      description: productDescription,
      image: productImage,
      category: category,
      price: productPrice,
    }, {'Content-Type': 'application/json'})
    .then((response) => {
      toast.success('Your Product has been added Successfully!');
    }).catch((error) => {
      console.log(error);
      toast.error('Sorry make sure your input is correct');
    });
  }
render () {
  const {handleAddProductPop} =  this.props;
  return (
    <div className='modal'>
      <ToastContainer />
      <div className='container'>
        <i className='fa-solid fa-xmark icon' onClick={handleAddProductPop}></i>
        <Input inputType='text' placeholderText='Enter Product Name' inputName='productName' handelChange={this.handelChange}/>
        <Input inputType='text' placeholderText='Enter Product Description' inputName={'productDescription'} handelChange={this.handelChange} />
        <Input inputType='url' placeholderText='Enter Product image URL' inputName={'productImage'} handelChange={this.handelChange} />
        <Input inputType='number' placeholderText='Enter Product Price' inputName={'productPrice'} handelChange={this.handelChange} />
        <Select isAdd={true} handelChange={this.handelChange}/>
        <Button text='Submit' handleOnClick={this.addProductToDataBase} />
      </div>
    </div>
  );
}
};

export default AddProductForm;
