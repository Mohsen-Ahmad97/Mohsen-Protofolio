import React, { useEffect, useState } from "react";
import Header from "./Components/1-Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo } from "react";
import Home from "./Components/Home/Home.jsx";
import { Divider } from "@mui/material";
import Skills from "./Components/3-Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import getDesignTokens from "./Components/Them.jsx";






function App() {
   


    
    const [mode,setmode]=useState( localStorage.getItem("currentMode")===null ?"light"
    :localStorage.getItem("currentMode")==="light"?
    "light":
    "dark");
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])



    return (
     
         

        
      <div  >


        <ThemeProvider theme={theme}>
     
            <CssBaseline />
        

         
         
     


          
                <Header mode={mode} setmode={setmode} />
                <Home/>
                <Divider/>
                <Skills/>
                <Divider/>
                <Contact/>
                <Divider/>
                <Footer/>
            
             

          
               
            
        
        </ThemeProvider>
        </div>
       
     
       
     
       
       

    );
}

export default App;
