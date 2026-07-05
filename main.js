import {writingDataFromApi, writeToFile} from "./services/file_services.js"

const PATH_RACE_DATA_API = "https://server-for-test-week-13.onrender.com/api/race";
const PATH_DATA_FILE = "./data/data_file.json";
const api = await writingDataFromApi(PATH_RACE_DATA_API)
const file = await writeToFile(PATH_DATA_FILE, api)