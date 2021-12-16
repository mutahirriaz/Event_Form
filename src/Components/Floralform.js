import React, {useState} from "react"
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import {Box} from "@mui/material"
import * as yup from "yup";
import {
  Button,
  FormGroup,
  TextField,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import INITIAL_STATE from "../state";
import {addonsfloralservices} from "../rootSlice"

const validationSchema = yup.object({
  colortheme: yup
    .string("Enter your Color Theme")
    .required("Color Theme is required"),
});



const Floralform = () => {

  const formik = useFormik({
    initialValues: {
      colortheme: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  
  const dispatch = useDispatch();
  
  const [values, setValues] = useState({
    kindsofflower: "",
    pricerange: "",
    colortheme: "",
    explanation: "",
  });
  
  const handleChange = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const state = useSelector((state) => JSON.stringify(state.user));
  
  console.log("state", state);
  
  const handleSubmit = (event) => {
    formik.handleSubmit();
    if (Object.keys(formik.errors).length == 0) {
      dispatch(addonsfloralservices(values));
    }
  
    event.preventDefault();
  };

  return (
    <div>
      <Box  component="form"  onSubmit={handleSubmit}>
        <div style={{ textAlign: "left" }}>
          <div>
            <p>Select The Floral Service</p>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {INITIAL_STATE.filter((arr) =>
              arr.extratype.includes("Floral Services")
            ).map((value, id) => {
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "stretch",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Checkbox id={value.id} />
                    </div>
                    <div>{value.extradata}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "30%" }}>
              <FormControl
                variant="standard"
                style={{ width: "100%" }}
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Kinds Of Flower
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  onChange={handleChange("kindsofflower")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INITIAL_STATE.filter((arr) =>
                    arr.extratype.includes("Floral Kind of Flowers")
                  ).map((values, id) => {
                    return (
                      <MenuItem value={values.extradata}>
                        {values.extradata}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>

            <div style={{ width: "30%" }}>
              <FormControl
                variant="standard"
                style={{ width: "100%" }}
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Price Range
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  onChange={handleChange("pricerange")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INITIAL_STATE.filter((arr) =>
                    arr.extratype.includes("Floral Price Range")
                  ).map((values, id) => {
                    return (
                      <MenuItem value={values.extradata}>
                        {values.extradata}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div style={{ width: "30%" }}>
            
             <FormGroup>
             <TextField
                onChange={handleChange('colortheme')}
                value={values.colortheme}
                name="colortheme"
                error={formik.touched.colortheme && Boolean(formik.errors.colortheme)}
                helperText={formik.touched.colortheme && formik.errors.colortheme}
                id="colortheme"   
                label="Specify Your Color Theme *"
                
                name="colortheme"
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "10px",
                  
                }}
              />
             </FormGroup>
              
              
            </div>
          </div>

          <div style={{ justifyContent: "space-between", marginTop: "40px" }}>
            <div style={{ width: "100%" }}>
              <TextField
                onChange={handleChange("explanation")}
                label="Explain how  you want your theme  to be implemented"
                type="text"
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>Upload your refrences images</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button>Choose Files</button>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              type="submit"
              style={{ backgroundColor: "purple", color: "white" }}
             
            >
              Save
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Floralform;

// import React, { useState } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import FormControl from '@mui/material/FormControl';
// import * as Yup from 'yup';
// import {Button, FormGroup, TextField, Select, MenuItem, Checkbox} from "@mui/material"
// import { useDispatch, useSelector } from "react-redux";
// import {setUser,EventType,NoOfGuest,EventDate } from "../rootSlice";
// import InputLabel from '@mui/material/InputLabel';
// import INITIAL_STATE from "../state"
// import {floralservices, kindsofflower, pricerange, colortheme, explanation, addonsfloralservices} from "../rootSlice";

// const initialValues = {

//   colorTheme: "",

// };

// const Dashboard = () => {

//   const dispatch = useDispatch();

//   const [values, setValues] = useState({
//     kindsofflower: "",
//     pricerange : "",
//     colortheme: "",
//     explanation: "",
//   })

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   console.log("values", values)

// const venueServicesSelector = useSelector((state) => state.user.eventfloral.floralservices)

// const state = INITIAL_STATE

//     return (
//         <div  >
//             <Formik
//             enableReinitialize
//       initialValues={ initialValues}
//       validationSchema={Yup.object({

//           colorTheme: Yup.string().min(10, 'Must be greater than 10').required("Required"),

//       })}
//       onSubmit={(values, formikHelpers) => {
//         console.log(values.eventDate + "values")
//         console.log(formikHelpers)
//       }}

//     >

//       {formik => (

//         <div>
//           <div  style={{textAlign:"left"}}>

//             <div  >
//               <p  >Select The Floral Service</p>
//             </div>
//             </div>
//           {console.log(formik.values)}
//           <Form>

//           <div style={{ display:"flex", flexDirection:"row"}}>

//                         {INITIAL_STATE.filter(arr => arr.extratype.includes("Floral Services")).map((value, id) => {
//                           return(
//                             <div  style={{display:"flex", flexDirection:"row"}}>
//                             <div  style={{display:"flex", flexDirection:"row", justifyContent:"stretch", width:"100%", alignItems:"center"}}>
//                               <div>
//                               <Checkbox   id={value.id}
//                                 />
//                               </div>
//                               <div>{value.extradata}</div>
//                             </div>

//                           </div>

//                           )
//                         })}
//                         </div>

//              <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

//              <div style={{width:"30%"}}>
//                           <FormControl variant="standard" style={{width:"100%"}} sx={{ m: 1, minWidth: 120 }}>
//                           <InputLabel id="demo-simple-select-filled-label">Kinds Of Flower</InputLabel>
//                           <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"
//                             onChange={handleChange("kindsofflower")}
//                             >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {INITIAL_STATE.filter(arr => arr.extratype.includes("Floral Kind of Flowers")).map((values, id) => {
//                               return(
//                                 <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
//                               )
//                             })}

//                             </Select>
//                             </FormControl>
//                           </div>

//                           <div style={{width:"30%"}}>
//                           <FormControl variant="standard" style={{width:"100%"}} sx={{ m: 1, minWidth: 120 }}>
//                           <InputLabel id="demo-simple-select-filled-label">Price Range</InputLabel>
//                           <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"
//                             onChange={handleChange("pricerange")}
//                             >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {INITIAL_STATE.filter(arr => arr.extratype.includes("Floral Price Range")).map((values, id) => {
//                               return(
//                                 <MenuItem value={values.extradata}>{values.extradata}</MenuItem>
//                               )
//                             })}

//                             </Select>
//                             </FormControl>
//                           </div>
//                <div  style={{width:"30%"}}>
//               <Field onKeyUp= {handleChange("explanation")} as={TextField} label="Specify Your Color Theme *"  name="colorTheme"   style={{width:"100%" ,  textAlign:"center", marginTop:"10px"}}  />
//               <ErrorMessage name="colorTheme"  />
//                </div>
//              </div>

//               <div style={{ justifyContent:"space-between", marginTop:"40px"}}>
//               <div  style={{width:"100%"}}><TextField onChange={handleChange("explanation")}  label="Explain how  you want your theme  to be implemented"  type="text"  style={{width:"100%" ,  textAlign:"center", marginTop:"10px"}} /></div>

//               </div>

//               <div style={{marginTop:"40px"}}>Upload your refrences images</div>
//               <div style={{display:"flex", flexDirection:"row", }} >
//               <button>Choose Files</button>
//               </div>

//               <div  style={{ textAlign:"center", marginTop:"20px"}}>
//                         <Button  type='submit' style={{backgroundColor:"purple", color:"white"}} onClick = {() => {
//                           dispatch(addonsfloralservices(values))
//                         }} >Save</Button>
//                         </div>
//           </Form>
//         </div>

//       )}

//     </Formik>
//         </div>
//     )
// }

// export default Dashboard
