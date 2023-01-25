import DogCard from "./DogCard"

function AdoptedPets({ pets })
{
    const mappedAdopted = pets.map(function (pet)
    {
        if (pet.isAdopted === true) {
            return <DogCard key={pet.id} pet={pet} />
        }
    })
    return (
        <div>
            {mappedAdopted}
        </div>
    )
}

export default AdoptedPets