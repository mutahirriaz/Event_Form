import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import FormControl from '@mui/material/FormControl';
import * as Yup from 'yup';
import {Button, FormGroup, TextField, Select, MenuItem, Checkbox} from "@mui/material"
import TextFeild from "@mui/material/TextField"
import { useDispatch } from "react-redux";
import {setUser,EventType,NoOfGuest,EventDate } from "../rootSlice";
import InputLabel from '@mui/material/InputLabel';
import INITIAL_STATE from "../state"
import {} from "./TextFeild"






const Generator = () => {

  const initialValues = {
    Singer: "",
    host: "",
    budget: "",
    
  };

  const [range, setRange] = React.useState('');

  
  const [values, setValues] = useState(null)

  const [checked, setChecked] = React.useState();

  const [secondRange, setSecondRange] = React.useState();



  const dispatch = useDispatch();


  const handleChange = (e) => {
    dispatch(setUser(e.target.value));
  };

  const EventHandleChange = (e) => {
    dispatch(EventType(e.target.value))
  }

  const NoOfGuestHandleChange = (e) => {
    dispatch(NoOfGuest(e.target.value))
  }

  const EventDateHandleChange = (e) => {
    dispatch(EventDate(e.target.value))
  }

  const SelectHandleChange = (event) => {
    setRange(event.target.value);
  };

  const SelectSecondHandleChange = (event) => {
    setSecondRange(event.target.value);
  };

  const checkboxHandleChange = (e) => {
    setChecked( e.target.checked ? 1 : 0)
}




    return (
        <div  >
            <Formik
            enableReinitialize
      initialValues={ initialValues}
      validationSchema={Yup.object({

        kva: Yup.string().min(10, 'Must be greater than 10').required("Required")
        // .max(15, "Must be 15 characters or less")
        //   .required('Required')


      })}
      onSubmit={(values, formikHelpers) => {
        console.log(values.eventDate + "values")
        console.log(formikHelpers)
      }}

    >
      
      {formik => (
        
        <div style={{marginTop:"20px"}} >
          {console.log(formik.values)}
          <Form>

          

             <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap"}}>

                 <div  style={{width:"100%"}}>
                   <TextFeild label="KVA *"  type="text" name="kva" style={{width:"100%" ,  textAlign:"center", marginTop:"20px" , backgroundColor:"#F5F5F5"}} />
                 </div>

             </div>

              <div style={{ justifyContent:"space-between", marginTop:"20px"}}>

                  <button style={{padding:"12px 9px 12px 9px"}}>Choose Files</button>
             
              </div>

              
            
             
          </Form>
        </div>
        
      )}

    </Formik>
        </div>
    )
}

export default Generator


