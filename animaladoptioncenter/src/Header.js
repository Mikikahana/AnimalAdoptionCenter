import SearchForm from './SearchForm'
import React, { useState } from 'react'
function Header({ handleSearchInput, handleNewDog })
{
    const [nameInput, setNameInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [breedInput, setBreedInput] = useState(0)
    const [genderInput, setGenderInput] = useState("")
    function handleNameInput(e)
    {
        setNameInput(e.target.value)
    }
    function handleImageInput(e)
    {
        setImageInput(e.target.value)
    }
    function handleBreedInput(e)
    {
        setBreedInput(e.target.value)
    }
    function handleGenderInput(e)
    {
        setGenderInput(e.target.value)
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        let formData = {
            breed: breedInput,
            gender: genderInput,
            name: nameInput,
            image: imageInput,
            likes: 0,
            isAdopted: false
        }
        fetch("http://localhost:3000/pets", {
            method: 'Post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (resp)
            {
                return resp.json()
            })
            .then(function (newDog)
            {
                handleNewDog(newDog)
            })
    }
    return (
        <div className="title">
            <h1>Pet Adoption Center</h1>
            <h3>New Puppy</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Dog name" onChange={handleNameInput} />
                <input type="text" name="image" placeholder="Image URL" onChange={handleImageInput} />
                <input type="text" name="breed" placeholder="breed" onChange={handleBreedInput} />
                <input type="text" name="gender" placeholder="gender" onChange={handleGenderInput} />
                <button type="submit">Add Puppy</button>
            </form>
            <br></br>
            <SearchForm handleSearchInput={handleSearchInput} />
        </div>
    )
}
export default Header