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
    productImage: '',
    productPrice: '',
    category: '',
  };
  handelChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  addProductToDataBase = () => {
    const { updateState } = this.props;
    const { productName, productDescription, productImage, productPrice, category } =
      this.state;
    axios
      .post(
        '/api/v1/product',
        {
          name: productName,
          description: productDescription,
          image: productImage,
          category: category,
          price: productPrice,
        },
        { 'Content-Type': 'application/json' },
      )
      .then((response) => {
        toast.success('Your Product has been added Successfully!');
        updateState();
      })
      .catch((error) => {
        toast.error('Sorry make sure your input is correct');
      });
  };
  render() {
    const { handleAddProductPop } = this.props;
    return (
      <div className='modal'>
        <div className='container'>
          <i className='fa-solid fa-xmark icon' onClick={handleAddProductPop}></i>
          <Input
            inputType='text'
            placeholderText='Enter Product Name'
            name='productName'
            handleInputChange={this.handelChange}
          />
          <Input
            inputType='text'
            placeholderText='Enter Product Description'
            name={'productDescription'}
            handleInputChange={this.handelChange}
          />
          <Input
            inputType='url'
            placeholderText='Enter Product image URL'
            name={'productImage'}
            handleInputChange={this.handelChange}
          />
          <Input
            inputType='number'
            placeholderText='Enter Product Price'
            name={'productPrice'}
            handleInputChange={this.handelChange}
          />
          <Select isAdd={true} handelChange={this.handelChange} />
          <Button
            text='Submit'
            handleOnClick={() => {
              this.addProductToDataBase();
              handleAddProductPop();
            }}
          />
        </div>
      </div>
    );
  }
}

export default AddProductForm;
