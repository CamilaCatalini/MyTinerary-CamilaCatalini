import axios from "axios";

const tineraryQueries = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const createTinerary = async(data) =>{
    axios.post('http://localhost:3000/api/tineraries', {
        title: data.title,
        img: data.img,
        info: data.info,
        city: data.city,
        duration: data.duration,
        price: data.price
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
}


export const getAllTineraries = async() =>{
    try {
        const res = await tineraryQueries();
        return res.data.tineraries
    } catch (error) {
        return(error);
    }
}

export const getOneTinerary = async(id) =>{
    try {
        const res = await tineraryQueries('/tineraries/'+id);
        return res.data.tinerary
    } catch (error) {
        return(error);
    }
}

export const deleteOneTinerary = async(id) =>{
    try {
        return axios.delete('http://localhost:3000/api/tineraries/delete/'+id).then(() => true);    
    } catch (error) {
        return(error);
    }
}
