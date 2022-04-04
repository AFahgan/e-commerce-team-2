import Select from '../Select/Select';
import './Header.css'
function Header({handelSearch , changeCategory , changePrice , price}){
    return <header>
        <h1 className="logo">IKEA</h1>
        <div className="search-div">
            <input type="search" placeholder="search" onKeyDown={(e)=>handelSearch(e)}/>
        </div>
        <div className='contianer'>
        <div className="price-div">
            <span>price</span>
            <input type="range"  min="100" max="2500"  step='5' onChange={(e)=>changePrice(e)}/>
            <span>{price}<i className="fa-solid fa-dollar-sign"></i></span>
        </div>
        <Select  changeCategory={changeCategory}  />
        <i className="fa-solid fa-cart-shopping"></i>
        </div>
    </header>
}
export default Header;