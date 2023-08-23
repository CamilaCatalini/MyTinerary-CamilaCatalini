import axios from "axios";

const regionQueries = axios.create({
    baseURL: "http://localhost:3000/api/regions",
});

export const getAllRegions = async() =>{
    try {
        const res = await regionQueries();
        return res.data.regions
    } catch (error) {
        return(error);
    }
}

export const getOneRegion = async(region) =>{
    
    try {
        const res = await regionQueries('/'+region);
        return res.data.region
    } catch (error) {
        return(error);
    }
}
