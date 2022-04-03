import './Header.css'
function Header({handelSearch}){
    return <header>
        <h1 className="logo">IKEA</h1>
        <div className="search-div">
            <input type="search" placeholder="search" onChange={(e)=>handelSearch(e.target.value)}/>
        </div>
        <div className='contianer'>
        <div className="price-div">
            <span>price</span>
            <input type="range"  min="0" max="100" />
            <span>10 <i class="fa-solid fa-dollar-sign"></i></span>
        </div>
        <select name="category" className="category-select">
            <option value="All">All</option>
            <option value="Chair">Chair</option>
            <option value="Sofa">Sofa</option>
            <option value="Living Room">Living Room</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bed">Bed</option>
        </select>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
    </header>
}
export default Header;