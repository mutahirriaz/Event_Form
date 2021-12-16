import React, { useState } from "react";
// import {} from "@mui/material"
import * as yup from 'yup';
import { Button, FormGroup, TextField } from "@mui/material";
// import TextField from "./Field";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Switch from "@mui/material/Switch";
import VenueForm from "./Tabs";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import HomeIcon from "./Homeicon";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import INITIAL_STATE from "../state"
import Dashboard from "./Dashboard";
import Flrolform from "./Floralform"
import Addons from "./Addons"
import { useDispatch, useSelector } from "react-redux";
import TextFeild from "./TextFeild"
import { eventVenue} from "../rootSlice";


const validationSchema = yup.object({
    prefferedarea: yup
      .string('Enter your Prefered Area')
      .required('Preffered Area is required'),
    starttime: yup
      .string('Enter your Start Time')
      .required('Start Time is required'),
    endtime: yup
      .string('Enter your End Time')
      .required('End Time is required'),
       
  });




const VanueForm = () => {

    


  const dispatch = useDispatch();

  const [startTime, setTimeStart] = React.useState(new Date());

  const [endTimee, setEndTime] = React.useState(new Date());


  const [checked, setChecked] = React.useState();


//   console.log("time", startTime)

 
  const formik = useFormik({
    initialValues: {
      prefferedarea: '',
      starttime: '',
      endtime: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
  
    },
  });

  const [values, setValues] = useState({
    prefferedArea1: "",
    prefferedArea2: "",
    prefferedArea3: "",
    startTime: startTime,
    endTime: endTimee,
    priceRange: "",
    specs: "",
  })


  const handleChangee = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });
  };
  

  const state = useSelector((state) => JSON.stringify(state.user))

  console.log("state", state)

// console.log(checked)
// console.log(values)


  const checkboxHandleChange = (e) => {
    setChecked( e.target.checked ? 1 : 0)
}


    const handleSubmit = (event) => {
        formik.handleSubmit()
        if (Object.keys(formik.errors).length == 0) {
            dispatch(eventVenue(values))
        }
        
        event.preventDefault()
    }

    // console.log("formik",formik)





  return (
    <div>
        <Box component="form" onSubmit={handleSubmit}>
        <p>Select the venue Services</p>
                      
                      <div style={{display:"flex", flexDirection:"row"}}>

                         {INITIAL_STATE.filter(arr => arr.extratype.includes("Venue Services")).map((value, id) => {
                        //   console.log("arr", value)
                          return(
                            <div  style={{display:"flex", flexDirection:"row"}}> 
                            <div  style={{display:"flex", flexDirection:"row", justifyContent:"stretch", width:"100%", alignItems:"center"}}>
                              <div>
                              <Checkbox checked={checked}  id={value.id}
                                name={value.extratype}
                                value={value.extradata} onChange={checkboxHandleChange} />
                              </div>
                              <div>{value.extradata}</div>
                            </div>
                            
                          </div>

                          )
                        })}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "20px",
                            flexWrap:"wrap"
                          }}
                        >
                          <div style={{width:"30%"}}>
                          <FormGroup>
                            
                             <TextField 
                                onChange={handleChangee('prefferedArea1')}
                                label="Preffered Area 1 *"
                                name="prefferedarea" 
                                id="prefferedarea"
                                value={values.prefferedArea1}
                                error={formik.touched.prefferedarea && Boolean(formik.errors.prefferedarea)}
                                helperText={formik.touched.prefferedarea && formik.errors.prefferedarea}    />
                             {/* <ErrorMessage name="Area" /> */}
                          </FormGroup>
                          
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                              label="Preffered Area 2"
                              type="text"
                              
                              fullWidth
                              onChange={handleChangee("prefferedArea2")}
                              
                            />
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                              label="Preffered Area 3"
                              type="text"
                             
                              onChange={handleChangee("prefferedArea3")}
                              fullWidth
                              
                              
                            />
                            
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "20px",
                            flexWrap:"wrap"
                          }}
                        >
                          
                           <div style={{width:"30%"}} >
                           <FormGroup>

                           <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack>
                            <TimePicker
                              label="Start Time"
                              value={startTime}
                              onChange={(newValue) => {
                                setTimeStart(newValue);
                              }}
                              renderInput={(params) => <TextField 
                                name="starttime"
                                id="starttime"
                                error={formik.touched.starttime && Boolean(formik.errors.starttime)}
                                helperText={formik.touched.starttime && formik.errors.starttime}
                                 {...params} />

                                }
                            />
                            </Stack>
                          </LocalizationProvider>

                           </FormGroup>
                           
                          </div>
                          <div  style={{width:"30%"}}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Stack>
                              <TimePicker
                                label="End Time"
                                
                                value={endTimee}
                                onChange={(newValue) => {
                                  setEndTime(newValue);
                                }}
                                renderInput={(params) => <TextField  {...params} />}
                                />
                              </Stack>
                          </LocalizationProvider>
                          </div>
                          <div style={{width:"30%"}}>
                          <FormControl variant="standard" style={{width:"100%"}} sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            
                            onChange={handleChangee("priceRange")}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {INITIAL_STATE.filter(arr => arr.extratype.includes("Venue Price Range")).map((values, id) => {
                              return(
                                <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
                              )
                            })}

                            </Select>
                            </FormControl>
                          </div>


                        </div>
                        <div >
                        <TextField
                              label="Any other specification  you want to add"
                              name="specification"
                              type="text"
                              onChange={handleChangee("specs")}
                              fullWidth
                              
                              ></TextField>
                        </div>

                        <div  style={{ textAlign:"center", marginTop:"20px"}}>
                         <Button  type='submit' style={{backgroundColor:"purple", color:"white"}}  >Save</Button>
                        </div>


        </Box>
    </div>
  );
};

export default VanueForm;








































// import React, { useState } from "react";
// // import {} from "@mui/material"
// import * as Yup from 'yup';
// import { Button, FormGroup, TextField } from "@mui/material";
// // import TextField from "./Field";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import Switch from "@mui/material/Switch";
// import VenueForm from "./Venueform";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import HomeOutlined from "@mui/icons-material/HomeOutlined";
// import HomeIcon from "./Homeicon";
// import Checkbox from '@mui/material/Checkbox';
// import Stack from '@mui/material/Stack';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
// import Select from '@mui/material/Select';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import INITIAL_STATE from "../state"
// import Dashboard from "./Dashboard";
// import Flrolform from "./Floralform"
// import Addons from "./Addons"
// import { useDispatch, useSelector } from "react-redux";
// import TextFeild from "./TextFeild"
// import { eventVenue} from "../rootSlice";


// const validationSchema = yup.object({
//     prefferedarea: yup
//       .string('Enter your email')
//       .required('Email is required')
//   });


// const initialValues = {
//   Area: ""
// };

// const VanueForm = () => {


//   const dispatch = useDispatch();

//   const [value, setValue] = React.useState(0);

//   const [toggle, setToggle] = React.useState(false);

//   const [startTime, setTimeStart] = React.useState(new Date());

//   const [endTimee, setEndTime] = React.useState(new Date());


//   const [checked, setChecked] = React.useState();


//   console.log("time", startTime)

//   const [values, setValues] = useState({
//     prefferedArea1: "",
//     prefferedArea2: "",
//     prefferedArea3: "",
//     startTime: startTime,
//     endTime: endTimee,
//     priceRange: "",
//     specs: "",
//   })

//   const handleChangee = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };


//   console.log("values", values)
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // const PrefferedAreaChange = (e) => {
//   //   setArea1(e.target.value);
//   // };
//   // const PrefferedArea2Change = (e) => {
//   //   dispatch(preferredArea2(e.target.value));
//   // };
//   // const PrefferedArea3Change = (e) => {
//   //   dispatch(preferredArea3(e.target.value));
//   // };

//   // dispatch(venueService(checked));

//   //   dispatch(starTime(startTime));

//   //   dispatch(endTime(endTimee));

//   //   dispatch(venuepriceRange(range));

//     // dispatch(preferredArea1(area1))


//   // const venueOtherChange = (e) => {
//   //   dispatch(venueOther(e.target.value));
//   // };

//   // const SelectHandleChange = (event) => {
//   //   setRange(event.target.value);
//   // };

//   // const handleClick = () => {
//   //   setToggle(!toggle);
//   //   console.log(toggle);
//   // };

// console.log(checked)

//   const checkboxHandleChange = (e) => {
//     setChecked( e.target.checked ? 1 : 0)
// }


// const preferedArea1Selector = useSelector((state) => state.user.eventvenue.preferredarea1) 
// const preferedArea2Selector = useSelector((state) => state.user.eventvenue.preferredarea2) 
// const preferedArea3Selector = useSelector((state) => state.user.eventvenue.preferredarea3)
// const startTimeSelector = useSelector((state) => state.user.eventvenue.starttime) 
// const endTimeSelector = useSelector((state) => state.user.eventvenue.endtime) 
// const venuePriceRangeSelector= useSelector((state) => state.user.eventvenue.venuepricerange) 
// const venueOtherSelector = useSelector((state) => state.user.eventvenue.venueanyothers) 
// const venueServicesSelector = useSelector((state) => state.user.eventvenue.venueservices)


// // console.log("ared>", area)


//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } }



//   return (
//     <div>
//       <div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={
//             Yup.object({
//               Area: Yup.string().min(10, 'Must be greater than 10').required("Required"),
//           })}
          
//           onSubmit={(values, formikHelpers) => {
//             console.log(values + "values");
//             console.log(formikHelpers);
//           }}
//         >
         
      
//           {formik => (
//             <div>
              

//               <Box>
                
                  
//                     <div>
                        
//                         <p>Select the venue Services</p>

//                         <div style={{display:"flex", flexDirection:"row"}}>

//                         {INITIAL_STATE.filter(arr => arr.extratype.includes("Venue Services")).map((value, id) => {
//                           console.log("arr", value)
//                           return(
//                             <div  style={{display:"flex", flexDirection:"row"}}> 
//                             <div  style={{display:"flex", flexDirection:"row", justifyContent:"stretch", width:"100%", alignItems:"center"}}>
//                               <div>
//                               <Checkbox checked={checked}  id={value.id}
//                                 name={value.extratype}
//                                 value={value.extradata} onChange={checkboxHandleChange} />
//                               </div>
//                               <div>{value.extradata}</div>
//                             </div>
                            
//                           </div>

//                           )
//                         })}
//                         </div>

                        
//                       <Form>
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "space-between",
//                             marginTop: "20px",
//                             flexWrap:"wrap"
//                           }}
//                         >
//                           <div style={{width:"30%"}}>
//                           <FormGroup>
                            
//                              <Field onKeyUp={handleChangee("prefferedArea1")} as={TextField} label="Preffered Area 1 *" name="Area"     />
//                              <ErrorMessage name="Area" />
//                           </FormGroup>
                          
//                           </div>
//                           <div style={{width:"30%"}}>
//                             <TextField
//                               label="Preffered Area 2"
//                               type="text"
                              
//                               fullWidth
//                               onChange={handleChangee("prefferedArea2")}
                              
//                             />
//                           </div>
//                           <div style={{width:"30%"}}>
//                             <TextField
//                               label="Preffered Area 3"
//                               type="text"
                             
//                               onChange={handleChangee("prefferedArea3")}
//                               fullWidth
                              
                              
//                             />
                            
//                           </div>
//                         </div>

//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "space-between",
//                             marginTop: "20px",
//                             flexWrap:"wrap"
//                           }}
//                         >
                          
//                            <div style={{width:"30%"}} >
//                            <LocalizationProvider dateAdapter={AdapterDateFns}>
//                             <Stack>
//                             <TimePicker
//                               label="Start Time"
//                               value={startTime}
//                               onChange={(newValue) => {
//                                 setTimeStart(newValue);
//                               }}
//                               renderInput={(params) => <TextField {...params} />}
//                             />
//                             </Stack>
//                           </LocalizationProvider>
//                           </div>
//                           <div  style={{width:"30%"}}>
//                           <LocalizationProvider dateAdapter={AdapterDateFns}>
//                               <Stack>
//                               <TimePicker
//                                 label="End Time"
                                
//                                 value={endTimee}
//                                 onChange={(newValue) => {
//                                   setEndTime(newValue);
//                                 }}
//                                 renderInput={(params) => <TextField  {...params} />}
//                                 />
//                               </Stack>
//                           </LocalizationProvider>
//                           </div>
//                           <div style={{width:"30%"}}>
//                           <FormControl variant="standard" style={{width:"100%"}} sx={{ m: 1, minWidth: 120 }}>
//                           <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
//                           <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"
                            
//                             onChange={handleChangee("priceRange")}
//                             >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {INITIAL_STATE.filter(arr => arr.extratype.includes("Venue Price Range")).map((values, id) => {
//                               return(
//                                 <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
//                               )
//                             })}

//                             </Select>
//                             </FormControl>
//                           </div>


//                         </div>
//                         <div >
//                         <Field
//                               label="Any other specification  you want to add"
//                               name="specification"
//                               type="text"
//                               onChange={handleChangee("specs")}
//                               fullWidth
//                               as={TextField}
//                               ></Field>
//                         </div>

//                         <div  style={{border:"1px solid red", textAlign:"center", marginTop:"20px"}}>
//                         <Button  type='submit' style={{backgroundColor:"purple", color:"white"}} disabled={!formik.dirty || !formik.isValid} onClick={() => {
//                           dispatch(eventVenue(values))
//                         }} >Save</Button>
//                         </div>

//                       </Form>
//                     </div>
               
               
             
               
                
//               </Box>

             
//             </div>
//            )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default VanueForm;

