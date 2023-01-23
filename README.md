# AnimalAdoptionCenter

## table of contents
 - [General Information]
 - [Github Repo]
 - [Technologies Used]
 - [Backend API Endpoints]
 - [Environment Setup]
 - [Project Status]
 - [Room for Improvement]

## General Information
This project, part of Flatiron Software Engineering track, Phase 2, focused on implementing a get server request from an external API and using that data to build out a front end page to display that data. We worked in a group of 4 to complete this task.

Phase 2 Project for Flatiron School: Animal Adoption Center: 
Check out our live frontend here

## Github Repo
- GitHub Repo: https://github.com/Mikikahana/AnimalAdoptionCenter

## Technologies Used: 
- javascript
- html
- css
- react

### Backend API Endpoints

| Method | Endpoint            | Params           | Description                                          |
| ------ | --------------      | ---------------- | ---------------------------------------------------- |
| GET    | /breed              |                  | returns breed type                                   |
| GET    | /gender             |                  | returns gender of dog                                |
| GET    | /name               |                  | returns name of the dog                              |
| GET    | /image              |                  | returns image of the dog                             |
| GET    | /isAdopted          |                  | returns a true/false value of if the dog is adopted  |
| POST   | /pets               |                  | posts a new object into the pets array               |
| PATCH  | /likes              |                  | updates the current amount of likes                  |


## Environment Setup

### Clone repository
**clone** the project repository from github: [https://github.com/Mikikahana/AnimalAdoptionCenter]

## Project Status
- Project is: _in progress_.

## Features
- Page will render all the dogs currently up for adoption with their respective information.
- Clicking the "adopt" button will adopt the dog and move it into the adopted bin.
- A search feature that allows you to type a dog's name and filter the list.
- A like button that updates with the new number after every click.