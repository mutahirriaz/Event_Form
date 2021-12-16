import React, { useState } from 'react'
// import {} from "@mui/material"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, FormGroup, TextField} from "@mui/material"
import TextFeild from "./TextFeild";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Switch from "@mui/material/Switch";
import Tabs from "./Tabs"

const Catogeries = () => {

    const [toggle, setToggle] = useState(false)
    const [venue, setVenue] = useState(false)

    
      
  
    const handleClick = () => {
      setToggle(!toggle)
      console.log(toggle)
    }

    const venueClick = () => {
      setVenue(!venue)
      
    }

  


    return (
        <div>
            <div  >
                <p style={{backgroundColor:"lightgray", width:"130px", padding:"10px 0px 10px 0px"}} >Select Categories</p>
            </div>

            
            
     
      
        <div>

       <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flex:"1", marginTop:"20px"}}>
       <div>
          <HomeOutlinedIcon />
          <p>Venue</p>
        </div>
        <div>
          <FastfoodOutlinedIcon />
          <p>Food</p>
        </div>
        <div>
          <AirlineSeatReclineNormalIcon />
          <p>Decorations</p>
        </div>
        <div>
          <AddAPhotoIcon />
          <p>Floral</p>
        </div>
        <div>
          <AcUnitIcon />
          <p>Addons</p>
        </div>
       </div>

       <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flex:"1", marginTop:"0px", alignItems:"center"}}>
       <div>
          <Switch onClick={handleClick} />
        </div>
        <div>
          <Switch  onClick={venueClick}/>
        </div>
        <div>
          <Switch />
        </div>
        <div>
          <Switch />
        </div>
        <div>
          <Switch />
        </div>
       </div>


          {toggle === true ? (<div  style={{marginTop:"10px", marginBottom:"50px"}}>
          <Tabs />
          </div>) : null}
          

        </div>

   
        </div>

    )
}

export default Catogeries
