import Select from '../Select/Select';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Header({ handelSearch, handelChange, price }) {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const routes = ['/', '/cart', '/seller'];

  return (
    <header>
      <h1 onClick={() => navigate('/')} className='logo'>
        IKEA
      </h1>

      {routes.includes(path) && (
        <>
          <div className='search-div'>
            <input type='search' placeholder='search' onKeyDown={(e) => handelSearch(e)} />
          </div>
          <div className='contianer'>
            <div className='price-div'>
              <span>price</span>
              <input
                type='range'
                min='50'
                max='2500'
                step='5'
                name='price'
                value={price}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
              />
              <span>
                <i className='fa-solid fa-dollar-sign'></i>
              </span>
            </div>
            <Select handelChange={handelChange} />
            <i onClick={() => navigate('/cart')} className='fa-solid fa-cart-shopping'>
             
            </i>
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
