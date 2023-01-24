    import React, {useState} from "react"
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

    const [likesInput, setLikesInput] = useState(pet.likes);

    function handleLike() 
    {
        setLikesInput(likesInput + 1);
        let formData = {
            likes: likesInput + 1
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
        <div className="puppy-box">
            <img className="puppy-image" src={image}></img>
            <h4 className="puppy-name">{name}</h4>
            <p>{breed}</p>
            <p>{gender}</p>
            <br></br>
            <button 
                className={isAdopted === true ? "adopt-button" : "adopt-button"}    onClick={handleClick}>{isAdopted ? "Adopted" : "Adopt pet"}
            </button>
            <button className="like-button" onClick={handleLike}>
                ❤ {likesInput}
            </button>

        </div>
    )
}
export default DogCard











