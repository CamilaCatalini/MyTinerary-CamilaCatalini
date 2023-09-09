import { createAction } from "@reduxjs/toolkit";

export const getCities = createAction('get_all_cities',(cities)=>{
    return{
        payload: cities
    }
});

export const getCity = createAction('get_one_city',(city)=>{
    return{
        payload: city
    }
}); 

export const getItineraries = createAction('add_itinerary',(itineraries)=>{
    console.log(itineraries)
    return{
        payload: itineraries
    }
}); 