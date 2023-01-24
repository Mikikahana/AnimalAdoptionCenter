import './App.css';
import React, { useState, useEffect } from "react"
import DogContainer from './DogContainer';
import Header from './Header';
import HomePage from './HomePage'
function App()
{
  const [pets, setPets] = useState([])
  useEffect(function ()
  {
    fetch("http://localhost:3000/pets")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {console.log(data)
        return setPets(data)
        
      })
  }, [])
  function handleUpdatedPets(updatedPet)
  {
    const updatedPetList = pets.map(function (pet)
    {
      if (pet.id === updatedPet.id) {
        return updatedPet
      }
      else {
        return pet
      }
    })
    setPets(updatedPetList)
  }
  const [searchInput, setSearchInput] = useState("")
  function handleSearchInput(e)
  {
    setSearchInput(e.target.value)
  }
  const filterDogs = pets.filter(function (pet)
  {
    return pet.name.toLowerCase().includes(searchInput.toLowerCase())
  })
  function handleNewDog(newDog)
  {
    setPets([...pets, newDog])
  }
  return (
    <div className="App">
      <Header handleSearchInput={handleSearchInput} handleNewDog={handleNewDog} />
      <HomePage />
      <DogContainer pets={filterDogs} handleUpdatedPets={handleUpdatedPets} />
    </div>
  );
}
export default App









