import React, { useEffect, useState } from 'react'
import "./Footer.css"
import { Stack, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [sho , setSho] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        {window.scrollY >1350 ? setSho(true):setSho(false)}
       
        
       
    })    },[])

  return (

<Stack direction={"column"} id="Footer"
    className={sho ?'footer-f':null} 
   sx={{mx:"auto",alignItems:"center" ,my:5,opacity:sho ? 1:0,gap:2,width:{sx:"100px",md:"80%"}}}>
  <Stack direction={"row"}  sx={{gap:{  xs:20,sx:20,md:40}}}   >
  <Typography>  Email: </Typography>
   
     <Link  to='https://mohsnahmad50@gmail.com' target='_blank' className=' icon-footer '  style={{}}>
       <EmailIcon /></Link>
       

  </Stack>
 <Stack direction={"row"}  sx={{gap:{xs:10,md:30}}}  >
  <Typography> work:0948356750</Typography>
   <Typography className='icon-footer'><PhoneAndroidIcon/></Typography>
   </Stack>
   <Stack direction={"row"}  sx={{gap:{xs:10,md:30}}}  >
  <Typography> mobile:0982810722</Typography>
   <Typography className=' icon-footer'><PhoneIcon/></Typography>
   </Stack>
   <Stack direction={"row"}  sx={{gap:{xs:19,md:40}}}  >
  <Typography>LinkedIn</Typography>
   <Link className=' icon-footer' to='https://www.linkedin.com/in/mohsen-ahmad' target='_blank'><LinkedInIcon /></Link>
   </Stack>
</Stack>
    





  )
}

export default Footer
