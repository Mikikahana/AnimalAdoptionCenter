import SearchForm from './SearchForm'
import { Link, NavLink } from 'react-router-dom'

function Header({ handleSearchInput }) {

    return (

        <div className="title">
            <h1 className='title-h1'>Pet Adoption Center</h1>
        <div class="link-container">
            <Link to="/" className='button'>
                Main Page
            </Link>


            <NavLink to="/pups" className="button">
                Pups that need a home
            </NavLink>


            <NavLink exact to="/pups/adopted" className="button">
                Pups already adopted
            </NavLink>


            <NavLink to="/pups/new" className="button">
                Add a new Puppy
            </NavLink>

        </div>


            <SearchForm handleSearchInput={handleSearchInput} />
        </div>

    )

}






export default Header