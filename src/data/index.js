import axios from "axios";

const api = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const data = await axios.get(api);
        const modifiedData = {
            confirmed: data.data.confirmed,
            recovered: data.data.recovered,
            deaths: data.data.deaths,
            lastUpdate: data.data.lastUpdate
        };

        return modifiedData;
    } 
    catch (error) {}
}