import React,{createContext,useContext,useReducer} from 'react'

export const DataLayerContext=createContext();

export const DataLayer=({ initialState,
    reducer,
    children
})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
       {children}
       {/* {console.log(initialState)} */}
    </DataLayerContext.Provider>
)

// by providing DataLayerContext in useContext now unseReducer function is available to all the components using useDataLayerValue function
export const useDataLayerValue=()=>useContext(DataLayerContext) 