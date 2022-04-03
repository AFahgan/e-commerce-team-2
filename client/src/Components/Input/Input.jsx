import './Input.css';

function Input ({ inputType, placeholderText }) {
  return (
    <input type={inputType} placeholder={placeholderText} className='form-input'/>
  );
};

export default Input;
