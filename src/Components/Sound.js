import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import FormControl from '@mui/material/FormControl';
import * as yup from 'yup';
import {Button, TextField, Select, MenuItem, Checkbox, FormGroup, Box} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import {addonssounddescription, addonssoundquantity, addonssoundspecification } from "../rootSlice";
import InputLabel from '@mui/material/InputLabel';
import INITIAL_STATE from "../state";



const validationSchema = yup.object({
  sound: yup
    .string('Enter Sound Description')
    .required('Required'),
    qty: yup
    .string('Enter Quantity')
    .required('Required'),
     
});


const Sound = () => {

  const formik = useFormik({
    initialValues: {
      sound: '',
      qty: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
  
    },
  });

  const [values, setValues] =React.useState({
    sounddescription: '',
    quantity: '',
    specification: '',

  });

  const handleChange = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });

    
  };

  const data = useSelector((state) => JSON.stringify(state.user.eventaddonssound))
  console.log("data", data)


  console.log("valuess", values)


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    formik.handleSubmit()
    if (Object.keys(formik.errors).length == 0) {
      dispatch(addonssounddescription(values))
    }
    
  event.preventDefault()
}

    return (
        <Box component="form" onSubmit={handleSubmit} >
            
             <div  style={{display:"flex", flexDirection:"row",flexWrap:"wrap" ,justifyContent:"space-between", flexWrap:"wrap"}}>

                          <div style={{width:"60%"}}>
                            <FormGroup>
                            <TextField  
                           onChange={handleChange('sounddescription')} 
                           value={values.sounddescription}
                           label="Sound Description" 
                           name="sound" 
                           type="text"
                           id="sound"
                           error={formik.touched.sound && Boolean(formik.errors.sound)}
                           helperText={formik.touched.sound && formik.errors.sound}  
                           style={{width:"100%" ,  textAlign:"center", marginTop:"10px", backgroundColor:"#F5F5F5"}}  />
                            </FormGroup>
                          
                            
                          </div>

                          <div  style={{width:"30%"}}>
                            <FormGroup>
                              <TextField
                               onChange={handleChange('quantity')}
                               label="qty *" 
                               name="qty"
                               value={values.quantity}
                               type="text"
                               id="qty"
                               error={formik.touched.qty && Boolean(formik.errors.qty)}
                               helperText={formik.touched.qty && formik.errors.qty}
                               style={{width:"100%" ,  textAlign:"center", marginTop:"10px" , backgroundColor:"#F5F5F5"}}  />
                              </FormGroup>
                            
                          </div>
            

              <div style={{ justifyContent:"space-between", marginTop:"10px"}}>
              <div  style={{width:"100%"}}>
                <TextField  
                onChange={handleChange('specification')} 
                label="Add your specification (if any)"  
                type="text" 
                value={values.specification}
                fullWidth
                style={{width:"100%" ,  textAlign:"center", marginTop:"10px", backgroundColor:"#F5F5F5", border:"1px solid red"}}  /></div>
              </div>

              </div>
              
              <div  style={{textAlign:"center", marginTop:"20px"}}>
                        <Button  type='submit' style={{backgroundColor:"purple", color:"white"}} >Save</Button>
                        </div>

                        
             
         
        </Box>
        
    )
}

export default Sound


