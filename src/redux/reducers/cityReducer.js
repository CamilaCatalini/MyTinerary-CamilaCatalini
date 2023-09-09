import { createReducer } from "@reduxjs/toolkit";
import { getCities, getCity, getItineraries } from "../actions/cityActions";

const initialState = {
    cities: [],
    filterCities: [],
    city: {},
    itineraries: []
}

const cityReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(getCities, (state, action)=>{
            return {
                ...state,
                cities: action.payload,
                filterCities: action.payload
            }
        })
        .addCase(getCity,(state, action)=>{
            return{
                ...state,
                city: action.payload
            }
        })
        .addCase(getItineraries,(state,action)=>{
            return{
                ...state,
                itineraries: action.payload
            }
        })
})

export default cityReducer;