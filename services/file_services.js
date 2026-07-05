import { log } from 'console';
import { readFile, writeFile } from 'fs/promises';




export async function writingDataFromApi(apiPath) {
    try {
        let raceDataReceiving = await fetch(apiPath);
        let raceData = await raceDataReceiving.json();
        return raceData;
    } catch (error) {
        console.error(error);
    }

}

export async function writeToFile(filePath, data) {
    try {
        await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {
        console.log(e);
    }
}

export async function readFromDataFile(filePath) {
    try {
        let dataFromFile = await readFile(filePath, "utf-8");
        console.log("\nLoading queue data...")
        let data = JSON.parse(dataFromFile);
        return data
    } catch (error) {
        console.log(error);
    } 
}