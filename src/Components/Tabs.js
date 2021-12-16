import React, { useState } from "react";
// import {} from "@mui/material"
import * as Yup from 'yup';
import { Button, FormGroup, TextField } from "@mui/material";
// import TextField from "./Field";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Formik, Field, Form, ErrorMessage } from "formik";
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
import VenueFormm from "./venueForm"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const initialValues = {
  Area: ""
};

const VanueForm = () => {


  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const [toggle, setToggle] = React.useState(false);

  const [startTime, setTimeStart] = React.useState(new Date());

  const [endTimee, setEndTime] = React.useState(new Date());


  const [checked, setChecked] = React.useState();


  console.log("time", startTime)

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
    setValues({ ...values, [prop]: event.target.value });
  };


  console.log("values", values)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const PrefferedAreaChange = (e) => {
  //   setArea1(e.target.value);
  // };
  // const PrefferedArea2Change = (e) => {
  //   dispatch(preferredArea2(e.target.value));
  // };
  // const PrefferedArea3Change = (e) => {
  //   dispatch(preferredArea3(e.target.value));
  // };

  // dispatch(venueService(checked));

  //   dispatch(starTime(startTime));

  //   dispatch(endTime(endTimee));

  //   dispatch(venuepriceRange(range));

    // dispatch(preferredArea1(area1))


  // const venueOtherChange = (e) => {
  //   dispatch(venueOther(e.target.value));
  // };

  // const SelectHandleChange = (event) => {
  //   setRange(event.target.value);
  // };

  // const handleClick = () => {
  //   setToggle(!toggle);
  //   console.log(toggle);
  // };

console.log(checked)

  const checkboxHandleChange = (e) => {
    setChecked( e.target.checked ? 1 : 0)
}


const preferedArea1Selector = useSelector((state) => state.user.eventvenue.preferredarea1) 
const preferedArea2Selector = useSelector((state) => state.user.eventvenue.preferredarea2) 
const preferedArea3Selector = useSelector((state) => state.user.eventvenue.preferredarea3)
const startTimeSelector = useSelector((state) => state.user.eventvenue.starttime) 
const endTimeSelector = useSelector((state) => state.user.eventvenue.endtime) 
const venuePriceRangeSelector= useSelector((state) => state.user.eventvenue.venuepricerange) 
const venueOtherSelector = useSelector((state) => state.user.eventvenue.venueanyothers) 
const venueServicesSelector = useSelector((state) => state.user.eventvenue.venueservices)


// console.log("ared>", area)


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }



  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={
            Yup.object({
              Area: Yup.string().min(10, 'Must be greater than 10').required("Required"),
          })}
          
          onSubmit={(values, formikHelpers) => {
            console.log(values + "values");
            console.log(formikHelpers);
          }}
        >
         
      
          {formik => (
            <div>
              

              <Box>
                <Box style={{ backgroundColor: "#9c28af" }}>
                  <Tabs
                    value={value}
                    variant="fullWidth"
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{ border: "1px solid red" }}
                  >
                    <Tab label={<HomeIcon />} {...a11yProps(0)} style={{  border:"1px solid red" }} />

                    {toggle === true ? (
                      <Tab label={<HomeOutlined />} {...a11yProps(1)} style={{  border:"1px solid red"}} />
                    ) : null}
                    <Tab label={<HomeOutlined />} {...a11yProps(2)} style={{  border:"1px solid red"}} />
                    <Tab label={<HomeOutlined />} {...a11yProps(3)} style={{  border:"1px solid red" }} />
                    <Tab label={<HomeOutlined />} {...a11yProps(4)} style={{ border:"1px solid red"  }} />
                    <Tab label={<HomeOutlined />} {...a11yProps(5)} style={{ border:"1px solid red"  }} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <VenueFormm />
                </TabPanel>
               <div  >
               <TabPanel value={value} index={1} >
                 
                </TabPanel>
               </div>
                <TabPanel value={value} index={2}>
                 
                </TabPanel>
                <TabPanel value={value} index={3}>
                {<Flrolform />}
                </TabPanel>
                <TabPanel value={value} index={4}>
                  {<Addons />}
                </TabPanel>
              </Box>

             
            </div>
           )}
        </Formik>
      </div>
    </div>
  );
};

export default VanueForm;
