import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearch} from '../../action/index'
import './header.css';


const Header = () => {
    const [search, setSearch] = useState();
    const dispatch =  useDispatch()

    const searchChange = (e) => {
        setSearch(e.target.value);
        dispatch(changeSearch(e.target.value))
    }
    return (     
        <nav>
        <div className="nav-wrapper blue lighten-2">
            <div className='header '>
            <a href="#" className="logo">Logo</a>
            <form className='header-search'>
				<input 
                
                value={search} 
                onChange={(e) => searchChange(e)} 
                placeholder="Search Products Here....." 
                />
            </form>
            </div>
        </div>
        </nav>
    )
}

export default Header;

