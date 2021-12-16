import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from "@mui/material/Checkbox"
import { TextField } from '@mui/material';
import Dancefloor from "./Dancefloor"
import Display from "./Display"
import Sound from "./Sound"
import Photobooth from "./Photobooth"
import Ushers from "./Ushers"
import Singer from "./Singer"
import Security from "./Security"
import Generator from "./Generator"

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [toggle, setToggle] = React.useState(false)

  const [secondToggle, setSecondToggle] = React.useState(false)

  const [thirdToggle, setThirdToggle] = React.useState(false)
  
  const [fourthToggle, setFourthToggle] = React.useState(false)

  const [fifthToggle, setFifthToggle] = React.useState(false)

  const [sixthToggle, setSixthToggle] = React.useState(false)

  const [seventhToggle, setSeventhToggle] = React.useState(false)

  const [eighthtToggle, setEighthToggle] = React.useState(false)



  const toggleChange = (panel) => (event, isExpand) => {
      setToggle(isExpand  ? panel :  false)
  }

  const SecondToggleChange = (panel) => (event, isExpand) => {
    setSecondToggle(isExpand  ? panel :  false)
}

const ThirdToggleChange = (panel) => (event, isExpand) => {
  setThirdToggle(isExpand  ? panel :  false)
}

const FourthToggleChange = (panel) => (event, isExpand) => {
  setFourthToggle(isExpand  ? panel :  false)
}

const FifthToggleChange = (panel) => (event, isExpand) => {
  setFifthToggle(isExpand  ? panel :  false)
}

const SixthToggleChange = (panel) => (event, isExpand) => {
  setSixthToggle(isExpand  ? panel :  false)
}

const SeventhToggleChange = (panel) => (event, isExpand) => {
  setSeventhToggle(isExpand  ? panel :  false)
}

const EighthToggleChange = (panel) => (event, isExpand) => {
  setEighthToggle(isExpand  ? panel :  false)
}


console.log(toggle === "panel1" ? 1 : 0)
console.log(secondToggle === "panel2" ? 1 : 0)
console.log(thirdToggle === "panel3" ? 1 : 0)
console.log(fourthToggle === "panel4" ? 1 : 0)

  return (
    <div>
      <Accordion expanded={toggle === 'panel1'} onChange={toggleChange('panel1')}  TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary 
        style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px", border:"1px solid  red"}}
          expandIcon={<Checkbox checked={toggle} /> }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Dance Floor
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Dancefloor />
        </AccordionDetails>
        
      </Accordion>
      <Accordion expanded={secondToggle === 'panel2'} onChange={SecondToggleChange('panel2')} style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={secondToggle}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Display</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Display />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={thirdToggle === 'panel3'} onChange={ThirdToggleChange('panel3')} style={{marginTop:"22px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={thirdToggle}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={{ backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Sound
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Sound />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={fourthToggle === 'panel4'} onChange={FourthToggleChange('panel4')} style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={fourthToggle}/>} 
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Photobooth />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={fifthToggle === 'panel5'} onChange={FifthToggleChange('panel5')} style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={fifthToggle}/>} 
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Ushers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Ushers />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={sixthToggle === 'panel6'} onChange={SixthToggleChange('panel6')} style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={sixthToggle}/>} 
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Singer/Celebrity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Singer />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={seventhToggle === 'panel7'} onChange={SeventhToggleChange('panel7')} style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={seventhToggle}/>} 
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Security />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={eighthtToggle === 'panel8'} onChange={EighthToggleChange('panel8')} style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<Checkbox checked={eighthtToggle}/>} 
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{backgroundColor:"#F5F5F5", padding:"10px 0px 10px 15px"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Generator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Generator />
        </AccordionDetails>
      </Accordion>

      <button onClick = {toggleChange}>
          hello
      </button>
    </div>
  );
}