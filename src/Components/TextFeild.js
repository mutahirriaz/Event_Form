import {ErrorMessage ,useField } from 'formik';
import React from 'react';
import {Button, FormGroup, TextField} from "@mui/material"


const TextFeild = ({label, ...props}) => {

    const [field, meta] = useField(props)
    // console.log(field)

    return (
        <div style={{ textAlign:"center"}}>
            {/* <label htmlFor={field.name}>{label}</label> */}
            <TextField label={field.name+"*"}  autoComplete="off"  {...field}  {...props} style={{width:"100%" ,  textAlign:"center", marginTop:"10px"}} />
            <div  style={{ textAlign:"left", marginTop:"10px", color:"red"}}><ErrorMessage name={field.name} /></div>
        </div>
    )
}

export default TextFeild