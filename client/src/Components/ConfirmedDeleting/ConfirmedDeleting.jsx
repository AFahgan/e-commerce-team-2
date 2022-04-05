import Button from '../Button/Button';

const ConfirmedDeleting = ({ handleOnClick, handelDelete }) => {
  return (
    <div className='modal'>
      <div className='container'>
        <i className='fa-solid fa-xmark icon' onClick={handleOnClick}></i>
        <h2> Are you sure of deleting this item?</h2>
        <Button text='Confirms Deleting' handleOnClick={handelDelete} />
        <Button text='Cancel' handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default ConfirmedDeleting;
