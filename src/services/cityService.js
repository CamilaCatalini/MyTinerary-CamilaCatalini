import axios from "axios";

const cityQueries = axios.create({
    baseURL: "http://localhost:3000/api/cities",
});

export const createCity = async(data) =>{
    axios.post('http://localhost:3000/api/cities', {
        title: data.title,
        currency: data.currency,
        img: data.img,
        info: data.info,
        region: data.region,
        location: data.location
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
}


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

export const getLastIdCity = async() =>{
    try {
        const res = await cityQueries('/xxx');
        return res.data.city
    } catch (error) {
        return(error);
    }
}

export const deleteOneCity = async(id) =>{
    try {
        return axios.delete('http://localhost:3000/api/cities/delete/'+id).then(() => true);    
    } catch (error) {
        return(error);
    }
}
