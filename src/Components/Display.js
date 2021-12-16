import React, { useState } from "react";
import * as Yup from "yup";
import { Button, FormGroup, TextField } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Switch from "@mui/material/Switch";
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
import { useDispatch, useSelector } from "react-redux";
import Addons from "./Addons"
import { addonsprojectorsize, addonsprojectorqty, addonsledneeded, addonsledsize, addonsledqty, addonssmdplasma, addonssmdsize, addonssmdqty, addonsprojectorsneeded} from "../rootSlice"


const validationSchema = Yup.object({
    projectorNeeded: Yup.string().required("Required"),

    projectorSizeFor: Yup.string().required("Required"),

    projectorQuantityFor: Yup.string().required("Required"),

    ledNeeded: Yup.string().required("Requiired"),

    ledSizeFor: Yup.string().required("Requiired"),

    ledQty: Yup.string().required("Requiired"),

    smdPlasmaNeededfor: Yup.string().required("Requiired"),

    smdPlasmaSizee: Yup.string() .required("Requiired"),

    smdPlasmaQty: Yup.string().required("Requiired"),
})



const VanueForm = () => {
 

 

  const formik = useFormik({
      initialValues: {
      projectorNeeded: '',
      projectorQuantityFor: '',
      projectorSizeFor: '',
      ledNeeded: '',
      ledSizeFor: '',
      ledQty: '',
      smdPlasmaNeededfor: '',
      smdPlasmaSizee: '',
      smdPlasmaQty: '',
     
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
  
    },
  });

  const [values, setValues] = useState({
    addonsprojectorsNeeded: "",
    addonsprojectorSize: "",
     addonsprojectorQty: "",
     addonsledNeeded: "",
     addonsledSize: "",
     addonsledQty: "",
     addonssmdPlasma: "",
     addonssmdSize: "",
     addonssmdQty: "",
     addonsdisplayanySpecify: ""

  })

  const handleChange = (prop) => (event) => {
    formik.handleChange(event);
    setValues({ ...values, [prop]: event.target.value });
  };

  const dispatch = useDispatch();


  const state = useSelector((state) => JSON.stringify(state.user))

  console.log("state", state)

  console.log("values", values)


  const handleSubmit = (event) => {
    formik.handleSubmit()
    if (Object.keys(formik.errors).length == 0) {
        dispatch(addonsprojectorsneeded(values))
    }
    
    event.preventDefault()
}





  return (
    <div>
      <Box  component="form" onSubmit={handleSubmit}>
        
         
      
         
            <div style={{marginTop:"20px"}}>
              

              <Box  >              
                  
                    <div>   
                      
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "20px",
                            flexWrap:"wrap"
                          }}
                        >
                          <div style={{width:"30%" }}>
                            <TextField
                            
                              label="Projectors Needed for *"
                              name="projectorNeeded"
                              onChange={handleChange("addonsprojectorsNeeded")}
                              type="text"
                              id="projectorNeeded"
                              value={values.addonsprojectorsNeeded}
                              error={formik.touched.projectorNeeded && Boolean(formik.errors.projectorNeeded)}
                              helperText={formik.touched.projectorNeeded && formik.errors.projectorNeeded}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="Projectors Size *"
                              name="projectorQuantityFor"
                              onChange={handleChange("addonsprojectorSize")}
                              type="text"
                              id="projectorQuantityFor"
                              value={values.addonsprojectorSize}
                              error={formik.touched.projectorQuantityFor && Boolean(formik.errors.projectorQuantityFor)}
                              helperText={formik.touched.projectorQuantityFor && formik.errors.projectorQuantityFor}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="Projectors Quantity *"
                              name="projectorSizeFor"
                              onChange={handleChange("addonsprojectorQty")}
                              type="text"
                              id="projectorSizeFor"
                              value={values.addonsprojectorQty}
                              error={formik.touched.projectorSizeFor && Boolean(formik.errors.projectorSizeFor)}
                              helperText={formik.touched.projectorSizeFor && formik.errors.projectorSizeFor}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
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
                          
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="Led Needed for *"
                              name="ledNeeded"
                              onChange={handleChange("addonsledNeeded")}
                              type="text"
                              id="ledNeeded"
                              value={values.addonsledNeeded}
                              error={formik.touched.ledNeeded && Boolean(formik.errors.ledNeeded)}
                              helperText={formik.touched.ledNeeded && formik.errors.ledNeeded}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="Led Size *"
                              name="ledSizeFor"
                              onChange={handleChange("addonsledSize")}
                              type="text"
                              id="ledSizeFor"
                              value={values.addonsledSize}
                              error={formik.touched.ledSizeFor && Boolean(formik.errors.ledSizeFor)}
                              helperText={formik.touched.ledSizeFor && formik.errors.ledSizeFor}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="Led Quantity *"
                              name="ledQty"
                              onChange={handleChange("addonsledQty")}
                              type="text"
                              id="ledQty"
                              value={values.addonsledQty}
                              error={formik.touched.ledQty && Boolean(formik.errors.ledQty)}
                              helperText={formik.touched.ledQty && formik.errors.ledQty}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
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
                          
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="SMD Plasma Needed for * "
                              name="smdPlasmaNeededfor"
                              onChange={handleChange("addonssmdPlasma")}
                              type="text"
                              id="smdPlasmaNeededfor"
                              value={values.addonssmdPlasma}
                              error={formik.touched.smdPlasmaNeededfor && Boolean(formik.errors.smdPlasmaNeededfor)}
                              helperText={formik.touched.smdPlasmaNeededfor && formik.errors.smdPlasmaNeededfor}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="SMD Plasma Size *"
                              name="smdPlasmaSizee"
                              onChange={handleChange("addonssmdSize")}
                              type="text"
                              id="smdPlasmaSizee"
                              value={values.addonssmdSize}
                              error={formik.touched.smdPlasmaSizee && Boolean(formik.errors.smdPlasmaSizee)}
                              helperText={formik.touched.smdPlasmaSizee && formik.errors.smdPlasmaSizee}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>
                          <div style={{width:"30%"}}>
                            <TextField
                            
                              label="SMD Plasma Quantity *"
                              name="smdPlasmaQty"
                              onChange={handleChange("addonssmdQty")}
                              type="text"
                              id="smdPlasmaQty"
                              value={values.addonssmdQty}
                              error={formik.touched.smdPlasmaQty && Boolean(formik.errors.smdPlasmaQty)}
                              helperText={formik.touched.smdPlasmaQty && formik.errors.smdPlasmaQty}
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                            
                          </div>


                        </div>

                        <div style={{width:"100%", marginTop:"20px"}}>
                            <TextField
                              label="Add your specification (if any)"
                              name="smdPlasmaQuantity"
                              onChange={handleChange("addonsdisplayanySpecify")}
                              // value={values.addonsdisplayanySpecify}
                              type="text"
                              style={{backgroundColor:"#F5F5F5", width:"100%" ,  textAlign:"center", marginTop:"10px"}}
                            />
                          </div>

                          <div  style={{textAlign:"center", marginTop:"20px"}}>
                        <Button  type='submit' style={{backgroundColor:"purple", color:"white"}} >Save</Button>
                        </div>

                      
                    </div>
                  
                
                
              </Box>

              
            </div>
          
        
      </Box>
    </div>
  );
};

export default VanueForm;




