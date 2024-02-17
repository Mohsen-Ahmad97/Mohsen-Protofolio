import React, { useEffect, useState } from 'react'
import "./Contact.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';
import { useForm } from "react-hook-form"




const Contact = () => {
  let  pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const [sho , setSho] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        {window.scrollY >1000 ? setSho(true):setSho(false)}
        
       
    })    },[])
    const onSubmit = (data) => console.log(data)

  return (

   
  //  left section  
 
      <Box onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },ml:10,my:10
      }}
      className={sho ?"contact-animate":null}
      id="Contact"
    >
          <Typography  sx={{textAlign:'center'}} variant='h2'> Contact Us </Typography>
    
      <Stack  sx={{alignItems:"center",
       flexDirection:{xs:"column",sm:"column",md:"row"}
           }}>
      <label  >
        Password:
      </label>
       <TextField
          id="outlined-password-input"
          label="Password"
          error= {Boolean(errors.password)}
          helperText={errors.password  ? " minmum entry is 5 characters .":null}

          {...register("password", { required:true, maxLength:10 } )}
        />
      </Stack>
      <Stack  sx={{alignItems:"center", flexDirection:{xs:"column",sm:"column",md:"row"}}}>
      <label  style={{marginRight:"31px"}}>
        Email:
      </label>
       <TextField
          id="outlined-password-input"
          label="email"
          error= {Boolean(errors.email)}
          helperText={errors.email  ? "  should be such as email@gmail.com ":null}

          {...register("email", { required:true,  pattern })}
        
        />
      </Stack>
      <Stack  sx={{alignItems:"center", flexDirection:{xs:"column",sm:"column",md:"row"}}}>
      <label  style={{marginRight:"26px"}}>
        Phone:
      </label>
       <TextField
          id="outlined-phone-input"
          label="Phone"
          error= {Boolean(errors.phone)}
          helperText={errors.phone  ? " minmum entry is 5 characters .":null}

          {...register("phone", { required:true, maxLength:10 } )}
        />
      </Stack>
      <Stack direction={"row"} sx={{ml:10}}>

      
      <TextField
          id="outlined-multiline-flexible"
          label="notes"
          multiline
          minRows={7}
          error= {Boolean(errors.note)}
          helperText={errors.note  ? " minmum entry is 10 characters .":null}

          {...register("note", { required:true, maxLength:100 } )}
        />
      </Stack>
      
      <Button type='submit'   variant='contained' sx={{ml:20,mt:2}}> Submit</Button>
    
    
      
      </Box>
    
   
  )
}

export default Contact
