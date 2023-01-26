import DogCard from "./DogCard"
import SearchForm from "./SearchForm"

function HomePage({ pets, handleUpdatedPets})
{
    const mappedPets = pets.map(function(pet){
        return <DogCard 
        key = {pet.id}
        pet = {pet}
        handleUpdatedPets = {handleUpdatedPets}
        />
    })
    return (
        <div className="puppy-adoption-container">
                
            {mappedPets}
       
        </div>

    )
}
export default HomePage