
import { Link, NavLink } from 'react-router-dom'

function Header() {

    return (

        <div className="title">
<h1 className='title-h1'>Pet Adoption Center</h1>

            <Link to="/">
                Main Page
            </Link>

            <NavLink to="/pups">
               Pups that need a home 
             </NavLink>

        <NavLink exact to="/pups/adopted">
        Pups already adopted
        </NavLink>


        <NavLink to = "/pups/new">
            Add a new Puppy
         </NavLink>

        </div>
    )
}


               

        

export default Header