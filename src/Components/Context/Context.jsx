import { createContext, useState} from "react";
import React from 'react'




 export const userContext=createContext();
const Context = ({children}) => {
  const dataTitl = ["All","html", "css", "java scripts ", "bootstrap", "postman", "React js "];
  const [dataTitle,setdataTitle]=useState(dataTitl)
  
 
 
  
  


  return (
   
  <userContext.Provider value={{dataTitle}}>

  {children}
  </userContext.Provider>
  )
}

export default Context
