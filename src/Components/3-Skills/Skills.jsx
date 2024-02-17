import { Box, Button, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import "./Skills.css"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { userContext } from '../Context/Context';
import { data } from './data';






















const Skills = () => {

    

    const [open, setopen] = useState("");
    const [show, setshow] = useState(false);
    const [arr, setArr] = useState(data)
    const {dataTitle}=useContext(userContext)
    

   
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            {window.scrollY >300 ? setshow(true) :setshow(false)}
        })    },[])

      const handelButton=(itemm)=>{
        setopen(itemm)
      
        const result=data.filter((item) => {
            return  itemm ==="All"? item :item.title.includes(itemm);
          
          
        }
        )
         setArr(result);
     
      }
    
    return (
        <Stack sx={{ ml: "100px ", mt: "30px",mb:5,
        flexDirection:{xs:"column",sm:"column",md:"row"},width:{xs:"80%",sm:"80%",md:"100%"}
         }} 
          className= {show ? 'parent-card':null}  id="Skills">
         <Typography  sx={{textAlign:'center'}} variant='h2'> Skills </Typography>




            {/* left section */}

            <Stack   sx={{ml:{xs:0,sm:0,md:10},mb:5,flexDirection:{xs:"row",sm:"row",md:"column"},minWidth:"200px",
                     flexWrap:"wrap",gap:2,
                     opacity:show ? 1 :0
                  
            
            }}>
                {dataTitle.map((itemm) => {
                    return (
                        <Box >
                          
                            
                            <Button sx={{
                                mt: 2, width: "150px", opacity: 0.5,
                                color: 'inherit'
                            }}
                                onClick={() => {handelButton (itemm) }}
                                 
                                  
                              
                                variant="outlined"
                                className={open === itemm ? "active card-animate" : null}
                               
                            >{itemm}</Button>
                        </Box>

                    )

                }
                )}

            </Stack>



                {/* right section  */}
            <Stack direction={'row'} sx={{mr: 20 ,flexWrap:"wrap",flexGrow:1,gap:7,minWidth:400,
                 opacity:show ? 1 :0
                }}
                   >




                {arr.map((item) => {
                    return (
                        <Card sx={{maxWidth:200 ,height:400}}   
                         className= "card-animate" > 
                      
                        
                        
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.image}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                   {item.category}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" className='ficonavor-icon'>
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                               


                            </CardActions>
                            <Typography variant="body2" color="text.secondary">
                                   {item.date}
                                </Typography>
                        </Card>

                    )

                }
                )}


            </Stack>

        </Stack>
    )
}

export default Skills;
