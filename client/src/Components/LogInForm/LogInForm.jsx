import Button from '../Button/Button';
import Input from '../Input/Input';

import './LogInForm.css';
// 
const LogInForm = ({ handleOnClick }) => {
  return (
    <div className="modal" >
      <div className='container'>
      <i className="fa-solid fa-xmark icon" onClick={handleOnClick}></i>
        < Input inputType='text' placeholderText='Enter Your User-Name' />
        < Input inputType={'password'} placeholderText={'Enter Your Password'} />
        <Button text='Log In' />
      </div>
    </div>
  )
}

export default LogInForm;