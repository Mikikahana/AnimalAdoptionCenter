import './App.css';
import React, { useState, useEffect } from "react"
import DogContainer from './DogContainer';
import Header from './Header';
// import HomePage from './HomePage'
import AdoptedPets from './AdoptedPets';
import AddNewDogForm from './AddNewDogForm';
import { Switch, Route } from 'react-router-dom'


function App() {
  const [pets, setPets] = useState([])
  useEffect(function () {
    fetch("http://localhost:3000/pets")
      .then(function (resp) {
        return resp.json()
      })
      .then(function (data) {
        return setPets(data)
      })
  }, [])

  function handleUpdatedPets(updatedPet) {
    const updatedPetList = pets.map(function (pet) {
      if (pet.id === updatedPet.id) {
        return updatedPet
      }
      else {
        return pet
      }
    })
    setPets(updatedPetList)

    const dogsAdopted = adopted.find(function (dog) {
      return dog.id === updatedPet.id
    })
    if (!dogsAdopted) {
      setAdopted([...adopted, updatedPet])
    }
  }

  const [searchInput, setSearchInput] = useState("")
  function handleSearchInput(e) {
    setSearchInput(e.target.value)
    console.log(e.target.value)
  }

  const filterDogs = pets.filter(function (pet) {
    return pet.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  function handleNewDog(newDog) {
    setPets([...pets, newDog])
  }

  const [adopted, setAdopted] = useState([])

  console.log(adopted)

  return (

    <div className="App">
    
      <Header handleSearchInput={handleSearchInput}/>
      


      <Switch> 

        <Route exact path = "/">
          <HomePage pets = {filterDogs} handleSearchInput=
          {handleSearchInput} handleUpdatedPets={handleUpdatedPets}/>
        </Route>
        
       
        <Route path = "/pups/adopted">
          <AdoptedPets pets={filterDogs} />
        </Route>

        <Route path = "/pups/new">
        <AddNewDogForm handleNewDog={handleNewDog}/>
        </Route>  


        <Route path = "/pups" >
          <DogContainer pets={filterDogs} handleUpdatedPets={handleUpdatedPets} handleSearchInput={handleSearchInput} />
        </Route>
        

      </Switch>

    </div>
  );
}

export default App









