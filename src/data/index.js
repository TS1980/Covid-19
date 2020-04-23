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
    catch(error) {console.log("Error in fetchData!")}
}

export const fetchDay = async () => {
    try {
        const {data} = await axios.get(`${api}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    }
    catch(error) {console.log("Error in fetchDay!")}
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${api}/countries`);

    return countries.map((country) => country.name);
  } 
  catch(error) {console.log("Error in fetchCountries!")}
};