import './Input.css';

function Input ({ inputType, placeholderText,inputName, handelChange }) {
  return (
    <input type={inputType} placeholder={placeholderText} name={inputName} className='form-input' 
    onChange={(e) => handelChange(e.target.name, e.target.value)} required/>
  );
};

export default Input;
