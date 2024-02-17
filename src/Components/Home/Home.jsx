import { Avatar, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import  mohsen from "./images/mohsen.jpg"
import StarRateOutlined from '@mui/icons-material/StarRateOutlined'
import { useTheme } from '@emotion/react'



const Home = () => {
  const [sh , setSh] = useState(false)
  const theme =useTheme();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
     
        {window.scrollY >30 ? setSh(true):setSh(false)}
       
    })    },[])
 



  return (

  <Stack   className= { sh ? "home":null} sx={{ml:{xs:"100px",sm:"100",md:"200px",opacity:sh ?1 :0}
  ,mt:"100px" ,mb:10 }}  id="About"
  >
  
     <Typography className='about-me' sx={{textAlign:'center'}} variant='h2'> about me </Typography>
     {/* left section */}
    <Stack direction={'column'}  sx={{width:{xs:"80%",sm:"80%",md:"100%"},mt:2}} >
     
        <Stack   direction={'row'}>
     
        <Avatar  className="img-avatar" alt="Mohsen Ahmad" src={mohsen} sx={{width:"200px",height:"200px"
           }} />
        <Typography sx={{mt:"90px" ,color:"blue"}}><StarRateOutlined/></Typography>
        </Stack>
        <Stack direction={'column'}>
            <Typography variant='h3' className='title'sx={{mb:2,mt:2}} >front-end developer ,react js </Typography>
            <Typography className={ theme.palette.mode==="light"  ? 'sub-title':"sub-title1"} variant='h6'>
               im front-end developer,i know html5,css, material ui ,bootstrap ,postman and react js 
                i have one year  of experince  and i like learn more  about my work 
            </Typography>

        </Stack>


    </Stack>
  </Stack>
  )
}

export default Home
