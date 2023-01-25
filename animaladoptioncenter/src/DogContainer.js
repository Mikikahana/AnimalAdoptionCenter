import DogCard from "./DogCard"
import SearchForm from "./SearchForm"

function DogContainer({ pets, handleUpdatedPets, handleSearchInput }) {


    const mappedPets = pets.map(function (pet) {
        if (pet.isAdopted === false) {
        return <DogCard
            key={pet.id}
            pet={pet}
            handleUpdatedPets={handleUpdatedPets} />
}})

    return (
       
        <div className="puppy-adoption-container">
             <SearchForm  handleSearchInput={handleSearchInput}/>
            {mappedPets}
        </div>
    )
}
export default DogContainer







