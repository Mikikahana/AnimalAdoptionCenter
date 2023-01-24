function DogCard({ pet, handleUpdatedPets })
{
    const { name, breed, gender, image, isAdopted } = pet
    function handleClick()
    {
        let formData = {
            isAdopted: true
        }
        fetch(`http://localhost:3000/pets/${pet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((updatedPet) => handleUpdatedPets(updatedPet))
    }
    return (
        <div>
            <img src={image}></img>
            <h4>{name}</h4>
            <p>{breed}</p>
            <p>{gender}</p>
            <button className={isAdopted === true ? "a class 1" : "a class 2"} onClick={handleClick}>{isAdopted ? "Adopted" : "Adopt pet"}</button>
        </div>
    )
}
export default DogCard











