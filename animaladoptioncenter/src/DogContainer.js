import DogCard from "./DogCard"
function DogContainer({ pets, handleUpdatedPets })
{
    const mappedPets = pets.map(function (pet)
    {
        return <DogCard key={pet.id} pet={pet} handleUpdatedPets={handleUpdatedPets} />
    })
    return (
        <div className="puppy-adoption-container">
            {mappedPets}
        </div>
    )
}
export default DogContainer







