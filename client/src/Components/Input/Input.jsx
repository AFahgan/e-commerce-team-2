import './Input.css';

function Input({ inputType, placeholderText, value, handleInputChange,name }) {
  return (
    <input
      type={inputType}
      placeholder={placeholderText}
      className='form-input'
      value={value}
      onChange={handleInputChange}
      name={name}
    />
  );
};

export default Input;
