import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name : 'cities',
    initialState: {
        value: [
            { 
                id:0,
                name: "Tokyo",
                description: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minus.",
                img: 
                "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited : true,
              },
              { 
                id:1,
                name: "New York",
                description: 
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                img: 
                "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited : false,
              },
              { id:2,
                name: "Paris",
                description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.",
                img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited : true,
              },
              { id:3,
                name: "Rome",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptates.",
                img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited : false,
              },
        ],
    },
    reducers: {
        add: (state,action) =>{
             state.value.push(action.payload)
        },
    },
})
export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer