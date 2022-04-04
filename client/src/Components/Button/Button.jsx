import './Button.css';

const Button = ({ text, handleOnClick , id}) => {
  return (
    <button className='btn' id={id} onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default Button;
