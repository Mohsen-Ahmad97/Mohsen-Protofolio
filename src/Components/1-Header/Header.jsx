import React, {  useContext, useEffect } from "react";
import "./Header.css"
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import { Stack, IconButton, Divider, Button, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from "react";
import { useTheme } from "@emotion/react";
import NorthIcon from '@mui/icons-material/North';
import { Link } from "react-scroll";
import { links } from "./data";
















const Header = ({ mode, setmode }) => {
    
   
    const [show, setShow]=useState(false);
    const [close, setClose] = useState("none")
    const [sho , setSho] = useState(false)


    const theme = useTheme();
  
useEffect(()=>{
    window.addEventListener("scroll",()=>{
        {window.scrollY >150 ? setSho(true):setSho(false)}
        
       
    })    },[])
   

    return (
        <div id="up" >
        
    
        <Box  sx={{
            flexGrow: 1, display: "flex", justifyContent: "space-between",
            alignItems: "center",
            width: '100%', mx: "auto",
             mt: "10px",
            position: "sticky",
            height:"100px"


        }}>
                 
                {/* menue section */}
            <Paper className="menue-animate" sx={{
                width: { xs: "100%", sm: "100%",md:"100%" },
                display: { xs: close, sm: close, md: close },
                mt: 23,
                mx:"auto"
            }}>


                <MenuList>
                    <MenuItem   sx={{ display: "flex", justifyContent: "flex-end",alignItems:"center",
                    mr:9
                          
                
                }}
                        onClick={() => {

                            setClose("none")
                            setShow(false)

                        }
                        }>
                        <CloseOutlinedIcon     />
                    </MenuItem>


                    {links.map((item) => {
                        return (
                            <Box  className="menue-item" >
                                <MenuItem className="link-menue">

                                    <Link to={item.PathName} href={item.PathName} >{item.Name}</Link>
                                
                                    

                                </MenuItem>
                                <Divider/>

                          
                            </Box>


                        )
                    })}


                </MenuList>
            </Paper>

    
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                    ml:5
                   
                }}
                onClick={() => {
                    setClose("block")
                    setShow("true")

                }
                }
            >
                <MenuIcon />
            </IconButton>
            <Stack className='stac' direction="row" sx={{
                display: { xs: "none", sm: "none", md: "block" },
                justifyContent: "space-between", alignItems: "center",
                ml: "500px"
            }} spacing={4}  >
              {links.map((item) => {
                return(
                    <>
                    
                   
           <Link to={item.PathName} href={item.PathName}  className="link-design"> {item.Name}</Link>
                     
                 
                    </>
                )
                
              }
              )}
          <Button onClick={(() => {
           
           
          }
          )}></Button>
            </Stack>
               {/* light and dark mode button */}
            <IconButton 
            sx={{ ml: {xs:2,sm:2,md:10} }}
                onClick={() => {
                    { localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark") }
                    setmode(theme.palette.mode === "light" ? "dark" : "light")

                }
                }
            >
                {theme.palette.mode == "light" ? <Brightness7Icon /> 
                : <Brightness4Icon sx={{borderRadius:"50%", bgcolor: "orange" }} />}

            </IconButton>
             <Typography className={ show ?"back-color":null} component={"div"} ></Typography> 
    
                
                <Link to="up" href='up' style={{opacity:sho ? 0.8:0 ,transition:"1s"}}> 
                <div className="scroll-bach"><NorthIcon sx={{mt:"20px",ml:'10px'}}/>
                </div>
                </Link>
              


        </Box>
              
        </div>

     
    )
  }

export default Header
