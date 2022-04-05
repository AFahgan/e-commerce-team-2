import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

const EditProductForm = ({
  handleInputEditChange,
  handleSubmit,
  inputsValues,
  handleEditProductPop,
}) => {
  const { name, description, price, image } = inputsValues || {};

  return (
    <form className='modal'>
      <div className='container'>
        <i className='fa-solid fa-xmark icon' onClick={handleEditProductPop}></i>
        <Input
          inputType='text'
          placeholderText='Enter Product Name'
          inputName='productName'
          handleInputChange={handleInputEditChange}
          value={name}
          name='name'
        />
        <Input
          inputType='text'
          placeholderText='Enter Product Description'
          inputName={'productDescription'}
          handleInputChange={handleInputEditChange}
          value={description}
          name='description'
        />
        <Input
          inputType='url'
          placeholderText='Enter Product image URL'
          inputName={'productImage'}
          handleInputChange={handleInputEditChange}
          value={image}
          name='image'
        />
        <Input
          inputType='number'
          placeholderText='Enter Product Price'
          inputName={'productPrice'}
          handleInputChange={handleInputEditChange}
          value={price}
          name='price'
        />
        <Select isAdd={true} />
        <Button text='Submit' handleOnClick={handleSubmit} />
      </div>
    </form>
  );
};

export default EditProductForm;
