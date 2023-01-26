import SearchForm from './SearchForm'
import { Link, NavLink } from 'react-router-dom'

function Header({handleSearchInput}) {

    return (

        <div className="title">
<h1 className='title-h1'>Pet Adoption Center</h1>
          
            <Link to="/" className='button'>
                Main Page
            </Link>
          
<br></br>
            
            <NavLink to="/pups" className="button">
               Pups that need a home 
             </NavLink>
            
             <br></br>

        <NavLink exact to="/pups/adopted" className="button">
        Pups already adopted
        </NavLink>
        
        <br></br>

        <NavLink to = "/pups/new" className="button">
            Add a new Puppy
         </NavLink>

<br></br>
<br></br>



<SearchForm  handleSearchInput={handleSearchInput}/>
        </div>
       
    )

}


               

        

export default Header