import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './AddProductForm.css';

const AddProductForm = ({
  handleAddProductPop,
  handleSubmit,
  inputsValues,
  handleInputChange,
}) => {
  const { name, description, price, image, id } = inputsValues || [];
  return (
    <form className='modal' onSubmit={handleSubmit}>
      <div className='container'>
        <i className='fa-solid fa-xmark icon' onClick={handleAddProductPop}></i>
        <Input
          inputType='text'
          placeholderText='Enter Product Name'
          value={name}
          handleInputChange={handleInputChange}
          name='name'
        />
        <Input
          inputType='text'
          placeholderText='Enter Product Description'
          value={description}
          handleInputChange={handleInputChange}
          name='description'
        />
        <Input
          inputType='url'
          placeholderText='Enter Product image URL'
          value={image}
          handleInputChange={handleInputChange}
          name='image'
        />
        <Input
          inputType='number'
          placeholderText='Enter Product Price'
          value={price}
          handleInputChange={handleInputChange}
          name='price'
        />
        <Select isAdd={true} />
        <Button id={id} text='Submit' />
      </div>
    </form>
  );
};

export default AddProductForm;
