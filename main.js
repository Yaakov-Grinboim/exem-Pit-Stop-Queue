import { useReducer } from "react";
import {writingDataFromApi, writeToFile, readFromDataFile} from "./services/file_services.js"

const PATH_RACE_DATA_API = "https://server-for-test-week-13.onrender.com/api/race";
const PATH_DATA_FILE = "./data/data_file.json";
const api = await writingDataFromApi(PATH_RACE_DATA_API)
const file = await writeToFile(PATH_DATA_FILE, api)

console.log("Pit Stop Queue - Race Team Management System");
console.log(`Race engineer: "Let's check the current queue status on the pit wall."`);
const race = await readFromDataFile(PATH_DATA_FILE)
console.log("\n========== PIT STOP QUEUE ==========");

console.log("race: " + race.raceName)
console.log("lap:  " + race.currentLap + "/" + race.totalLaps)
console.log("Total cars in race: " + race.cars.length);

const function (){
    statusDone = (race) => race.status ? "done" statusDone++ 
}

console.log(statusDone);
