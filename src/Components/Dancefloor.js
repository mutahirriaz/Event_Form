import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import FormControl from '@mui/material/FormControl';
import * as yup from 'yup';
import {Button, FormGroup, TextField, Select, MenuItem, Checkbox, Box} from "@mui/material"
import TextFeild from "@mui/material/TextField"
import { useDispatch, useSelector } from "react-redux";
import {setUser,EventType,NoOfGuest,EventDate } from "../rootSlice";
import InputLabel from '@mui/material/InputLabel';
import INITIAL_STATE from "../state"
import {addonsdancetype} from "../rootSlice"


const validationSchema = yup.object({
  type: yup
    .string('Enter your Dance Type')
    .required('Preffered Area is required'),
  size: yup
    .string('Enter your Dance Floor')
    .required('Start Time is required'),
  circular: yup
    .string('Enter your Circular Trussing')
    .required('End Time is required'),
     
});

const Dancefloor = () => {


  const formik = useFormik({
    initialValues: {
      type: '',
      size: '',
      circular: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
  
    },
  });

  const [floorType, setFloorType] = React.useState('');

  
  const [values, setValues] = useState({

    type: "",
    addonsDanceSize: "",
    addonsDanceCircullarTrussing: "",
    specs:""
  })

  console.log("values", values)

  const handleChange = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });

    
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    formik.handleSubmit()
    if (Object.keys(formik.errors).length == 0) {
        dispatch(addonsdancetype(values))
    }
    
    event.preventDefault()
}
  const state = useSelector((state) => JSON.stringify(state.user))

  console.log("state", state)





  return (
    <div>
      <Box  component="form" onSubmit={handleSubmit}>
                    <div  style={{display:"flex", flexDirection:"row", flexWrap:"wrap" , justifyContent:"space-between"}}>

            


                      <div style={{width:"30%"}}>
                           <FormGroup>
                           <FormControl variant="standard" style={{width:"100%", backgroundColor:"#F5F5F5"}} sx={{ m: 1, minWidth: 120 }}>
                           <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
                           <Select
                             labelId="demo-simple-select-filled-label"
                             // id="demo-simple-select-filled"
                             name="type"
                             value={values.type}
                             id="type"
                             error={formik.touched.type && Boolean(formik.errors.type)}
                             helperText={formik.touched.type && formik.errors.type}
                             variant="outlined"
                             onChange={handleChange("type")}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {INITIAL_STATE.filter(arr => arr.extratype.includes("Dance Floor Type")).map((values, id) => {
                              return(
                               
                                  <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
                               
                              )
                            })}
                            
                            </Select>
                            
                            </FormControl>
                           </FormGroup>
                          </div>

 

                          <div style={{width:"30%"}}>
                          <FormGroup>
                          <FormControl variant="standard" style={{width:"100%", backgroundColor:"#F5F5F5"}} sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            
                            value={values.addonsDanceSize}
                            name="size"
                            variant="outlined"
                            id="size"
                            error={formik.touched.size && Boolean(formik.errors.size)}
                            helperText={formik.touched.size && formik.errors.size}
                            variant="outlined"
                            onChange={handleChange("addonsDanceSize")}
                           
                           
                            
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {INITIAL_STATE.filter(arr => arr.extratype.includes("Dance Floor Size")).map((values, id) => {
                              return(
                                <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
                              )
                            })}

                            </Select>
                            </FormControl>
                          </FormGroup>
                          </div>

                          <div style={{width:"30%"}}>
                            <FormGroup>
                            <FormControl variant="standard" style={{width:"100%", backgroundColor:"#F5F5F5"}} sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-filled-label">Circular Trussing</InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            // id="demo-simple-select-filled"
                            name="circular"
                            value={values.addonsDanceCircullarTrussing}
                            id="circular"
                            error={formik.touched.circular && Boolean(formik.errors.circular)}
                            helperText={formik.touched.circular && formik.errors.circular}
                            variant="outlined"
                            onChange={handleChange("addonsDanceCircullarTrussing")}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {INITIAL_STATE.filter(arr => arr.extratype.includes("Dance Floor Circular Trussing")).map((values, id) => {
                              return(
                                <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
                              )
                            })}
                            </Select>
                            </FormControl>
                            </FormGroup>
                          </div>
             </div>

              <div style={{marginTop:"10px"}}>
              <div  style={{width:"100%"}}>
                <TextFeild label="Add specification if any" name="Explain" type="text"  
                style={{width:"100%" ,  textAlign:"center", marginTop:"10px", backgroundColor:"#F5F5F5"}} 
                onChange={handleChange("specs")} />
                </div>
              </div>

              <div  style={{ textAlign:"center", marginTop:"20px"}}>
                <Button  type='submit' style={{backgroundColor:"purple", color:"white"}}  >Save</Button>
                </div>

      </Box>
    </div>
  )
}

export default Dancefloor
























// import React, { useState } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import FormControl from '@mui/material/FormControl';
// import * as Yup from 'yup';
// import {Button, FormGroup, TextField, Select, MenuItem, Checkbox} from "@mui/material"
// import TextFeild from "@mui/material/TextField"
// import { useDispatch, useSelector } from "react-redux";
// import {setUser,EventType,NoOfGuest,EventDate } from "../rootSlice";
// import InputLabel from '@mui/material/InputLabel';
// import INITIAL_STATE from "../state"
// import {addonsdancetype} from "../rootSlice"



// const Dashboard = () => {

//   const initialValues = {
//     kindsOfFlower: "",
//     priceRange: "",
//     colorTheme: "",
//     Explain: "",
    
//   };

//   const [floorType, setFloorType] = React.useState('');

  
//   const [values, setValues] = useState({

//     addonsDanceType: "",
//     addonsDanceSize: "",
//     addonsDanceCircullarTrussing: "",
//     specs:""
//   })

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const dispatch = useDispatch();

//   dispatch(addonsdancetype(values));

//     return (
//         <div  >
//             <Formik
//             enableReinitialize
//       initialValues={ initialValues}
//       validationSchema={Yup.object({

//         kindsOfFlower: Yup.string().min(10, 'Must be greater than 10').required("Required"),
//         priceRange: Yup.string().min(10, 'Must be greater than 10').required("Required"),
//         colorTheme: Yup.string().min(10, 'Must be greater than 10').required("Required"),
//         Explain: Yup.string().min(10, 'Must be greater than 10').required("Required"),
        
//       })}

//       onSubmit={(values, formikHelpers) => {
//         console.log(values.eventDate + "values")
//         console.log(formikHelpers)
//       }}

//     >
      
//       {formik => (
        
//         <div style={{marginTop:"20px"}} >
//           {console.log(formik.values)}
//           <Form>

          

//              <div  style={{display:"flex", flexDirection:"row", flexWrap:"wrap" , justifyContent:"space-between"}}>

            


//                      <div style={{width:"30%"}}>
//                           <FormControl variant="standard" style={{width:"100%", backgroundColor:"#F5F5F5"}} sx={{ m: 1, minWidth: 120 }}>
//                           <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
//                           <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"
//                             // value={floorType}
//                             onChange={handleChange("addonsDanceType")}
//                             variant="outlined"
//                             name="kindsOfFlower"
//                             >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {INITIAL_STATE.filter(arr => arr.extratype.includes("Dance Floor Type")).map((values, id) => {
//                               return(
                               
//                                   <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
                               
//                               )
//                             })}
                            
//                             </Select>
                            
//                             </FormControl>
//                           </div>

 

//                           <div style={{width:"30%"}}>
//                           <FormControl variant="standard" style={{width:"100%", backgroundColor:"#F5F5F5"}} sx={{ m: 1, minWidth: 120 }}>
//                           <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
//                           <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"
//                             // value={floorSize}
//                             variant="outlined"
//                             onChange={handleChange("addonsDanceSize")}
//                             >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {INITIAL_STATE.filter(arr => arr.extratype.includes("Dance Floor Size")).map((values, id) => {
//                               return(
//                                 <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
//                               )
//                             })}

//                             </Select>
//                             </FormControl>
//                           </div>

//                           <div style={{width:"30%"}}>
//                           <FormControl variant="standard" style={{width:"100%", backgroundColor:"#F5F5F5"}} sx={{ m: 1, minWidth: 120 }}>
//                           <InputLabel id="demo-simple-select-filled-label">Circular Trussing</InputLabel>
//                           <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"

//                             variant="outlined"
//                             onChange={handleChange("addonsDanceCircullarTrussing")}
//                             >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {INITIAL_STATE.filter(arr => arr.extratype.includes("Dance Floor Circular Trussing")).map((values, id) => {
//                               return(
//                                 <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
//                               )
//                             })}
//                             </Select>
//                             </FormControl>
//                           </div>
//              </div>

//               <div style={{marginTop:"10px"}}>
//               <div  style={{width:"100%"}}>
//                 <TextFeild label="Add specification if any" name="Explain" type="text"  
//                 style={{width:"100%" ,  textAlign:"center", marginTop:"10px", backgroundColor:"#F5F5F5"}} 
//                 onChange={handleChange("specs")} />
//                 </div>
//               </div>

              
            
             
//           </Form>
//         </div>
        
//       )}

//     </Formik>
//         </div>
//     )
// }

// export default Dashboard


