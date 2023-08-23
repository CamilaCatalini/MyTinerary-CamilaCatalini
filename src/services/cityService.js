import axios from "axios";

const cityQueries = axios.create({
    baseURL: "http://localhost:3000/api/cities",
});

export const getAllCities = async() =>{
    try {
        const res = await cityQueries();
        return res.data.cities
    } catch (error) {
        return(error);
    }
}

export const getOneCity = async(id) =>{
    try {
        const res = await cityQueries('/'+id);
        return res.data.city
    } catch (error) {
        return(error);
    }
}
