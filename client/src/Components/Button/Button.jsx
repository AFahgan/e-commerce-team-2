import './Button.css';

const Button = ({ text, handleOnClick }) => {
  return (
    <button className='btn' onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default Button;
