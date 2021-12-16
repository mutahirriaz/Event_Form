import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikConsumer } from 'formik';
import * as Yup from 'yup';
import {Button, FormGroup} from "@mui/material"
import TextField from "@mui/material/TextField"
import { useDispatch, useSelector } from "react-redux";
import {setUser,EventType,NoOfGuest,EventDate } from "../rootSlice";
import store from "../store"
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';


const initialValues = {
  eventTitle: '',
  eventType: '',
  noOfGuest: 0,
  eventDate: "",
}


const Dashboard = () => {
  
  // const [values, setValues] = useState("")

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const timeChange = (newValue) => {
    setValue(newValue);
  };




  const dispatch = useDispatch();


  const handleChange = (e) => {
    dispatch(setUser(e.target.value));
  };

  const EventHandleChange = (e) => {
    dispatch(EventType(e.target.value));
  }

  const NoOfGuestHandleChange = (e) => {
    dispatch(NoOfGuest(e.target.value));
  }

  // const EventDateHandleChange = (e) => {
    dispatch(EventDate(value));
  // }

  const state = useSelector((state) =>(state.user))

  console.log("sate", state)

  const eventname = useSelector((state) => state.user.eventname)
  const eventtypeid = useSelector((state) => state.user.eventtypeid)
  const eventguest = useSelector((state) => state.user.eventguest)
  const eventdate = useSelector((state) => state.user.eventdate)

  
  // console.log(eventname + ">>")
  // console.log(eventtypeid + ">>")
  // console.log(eventguest + ">>")
  // console.log(eventdate + ">>")


    return (
        <div  >
            <Formik
            enableReinitialize
      initialValues={ initialValues}
      validationSchema={Yup.object({
        eventTitle: Yup.string().max(15, "Must be 15 characters or less").required('Required')
        ,
          eventType: Yup.string().required('Required'),
        noOfGuest: Yup.number().required('Required'),
        eventDate: Yup.date().nullable(),
      })}
      onSubmit={(values, formikHelpers) => {
        // console.log(values.eventDate + "values")
        // console.log(formikHelpers)
      }}

    >
      
      {formik => (
        
        <div>
          <div  style={{textAlign:"left"}}>
            <h1>Create Event</h1>
            <div  style={{backgroundColor:"lightgray", width:"100px"}}>
              <p  style={{padding:"10px 2px 10px 2px"}}>Event Profile</p>
            </div>
            </div>
          {/* {console.log(formik.values)} */}
          <Form>
             <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div  style={{width:"45%"}}>
             <Field label="Event Title"  name="eventTitle" type="text" fullWidth as={TextField } onKeyUp={handleChange} />
             <ErrorMessage name="eventTitle" />
               </div>
               <div  style={{width:"45%"}}>
              <Field label="Event Type" name="eventType" type="number" fullWidth as={TextField} onKeyUp={EventHandleChange}  />
             <ErrorMessage name="eventType" />
               </div>
             </div>

              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"40px"}}>
              <div  style={{width:"45%"}}>
                <Field label="No of Guest" name="noOfGuest" type="number" fullWidth as={TextField}  onKeyUp={NoOfGuestHandleChange}  />
             <ErrorMessage name="noOfGuest" />
                </div>
              <div  style={{width:"45%"}}>
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack>
              <DesktopDatePicker
              label="dd/mm/yyyy"
              inputFormat="MM/dd/yyyy"
              
              onChange={timeChange}
              renderInput={(params) => <TextField {...params} />}
        />
              </Stack>
              </LocalizationProvider>
             <ErrorMessage name="eventDate" />
              </div>
              
              </div>

            
            
          </Form>
        </div>
        
      )}

    </Formik>
        </div>
    )
}

export default Dashboard




