# Yassir
Coding challenge
## The problem:
Task: Air quality information

- The goal of this project is to create a REST API responsible for exposing “the air quality information” of a nearest city to GPS coordinates using iqair.com API.
- Implement CRON JOB to check “ air quality “ for the Paris zone ( latitude:  48.856613 ,longitude: 2.352222) every 1 minute than save them in the database ( add date and time when saving the air quality)

## The solution:
Focuses on Backend only

## Functionalities through API:
- Get air quality information of a nearest city to GPS coordinates
  - GET /iqair/cities?lat=tttt&lon=nnnn
- POST /iqair/cities?lat=tttt&lon=nnnn
  - This API is called via scheduler every minute to get air quality information of a nearest city to GPS coordinates and save it in the database.


## Technologies
Nodejs, Expressjs, MongoDB, Mongoose, Jest, Docker, Docker Compose

## Technical descisions:
- Scheduler is a separate service to make the api more scalable by separating the scheduler from the api.
- Add the API and the scheduler in the same repository for simplicity.
- Add extra attributes(city, state, country) to the city-pollution model to make it more usable if we want to add more functionalities in the future.
- Express, is a very lightweight framework.
- MongoDB one of the most famous document database.
- Jest and superagent for unit and integration testing

## Linked:
https://www.linkedin.com/in/ahmed-elbassel/


## API Documentation
GET: localhost:3000/iqair/cities?lat=tttt&lon=nnnn
POST: localhost:3000/iqair/cities?lat=tttt&lon=nnnn
  - This API is called via scheduler every minute.



## Initial data
A script is used to store 400 customers for the first time app runs to allow you to use rest of APIs.

## Run App
- Clone the repo, and go inside it then the below command, if the commands don't run, try it with sudo:
```
git clone git@github.com:elbassel/yassir-test.git
cd yassir-test
docker-compose build
docker-compose up
```


## Run tests
```
npm run test
```

## Linting
```
npm run lint
```
