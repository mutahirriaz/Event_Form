import { configureStore, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./state";


// const rootSlice = createSlice({
//     name: "root",
//     initialState: {
//         eventTitle: '',
//         eventType: '',
//         noOfGuest: 0,goal
//         eventDate: 0,
//         prefferedArea1: '',
//         prefferedArea2: '',
//         prefferedArea3: '',
//         specification: '',
//     },
//     reducers: {
//         chooseTitle: (state, action) => {state.eventTitle = action.payload},
//         chooseType: (state, action) => {state.eventType = action.payload},
//         chooseGuest: (state, action) => {state.noOfGuest = action.payload},
//         chooseDate: (state, action) => {state.eventDate = action.payload},
//         choosePrefferedAred1: (state, action) => {state.prefferedArea1 = action.payload},
//         choosePrefferedAred2: (state, action) => {state.prefferedArea2 = action.payload},
//         choosePrefferedAred3: (state, action) => {state.prefferedArea3 = action.payload},
//         specification: (state, action) => {state.specification = action.payload},
//     }
// })

const initialState = 
  {

      "eventname": "",

      "eventtypeid": 0,

      "eventguest": "",

      "eventdate": "",

    "eventvenue" : {
      // "venueservices": "",
      // "preferredarea1": "",
      // "preferredarea2": "",
      // "preferredarea3": "",
      // "starttime": "",
      // "endtime": "",
      // "venuepricerange": "",
      // "venueanyothers": "",
    },
    "eventfloral" : {
      // "floralservices": "",
      // "kindsofflower": "",
      // "pricerange": "",
      // "colortheme": "",
      // "explanation": "",
    },
    "eventaddonsdancefloor": {
      // "addonsdancetype": "",
      // "addonsdancesize": "",
      // "addonsdancecirculartrussing": "",
      // "addonsdanceanyspecify": ""
  },
  "eventaddonsdisplay": {
    // "addonsprojectorsneeded": "",
    //  "addonsprojectorsize": "",
    //  "addonsprojectorqty": "",
    //  "addonsledneeded": "",
    //  "addonsledsize": "",
    //  "addonsledqty": "",
    //  "addonssmdplasma": "",
    //  "addonssmdsize": "",
    //  "addonssmdqty": "",
    //  "addonsdisplayanyspecify": ""
 },
 "eventaddonssound": {
  
 }

 
  }




const userSlice = createSlice({

  name: 'user',
  initialState: initialState,
  reducers: {
    
    setUser: (state = initialState, action) => {
      state.eventname = action.payload
    },


    EventType: (state, action) => {
      state.eventtypeid = action.payload
    },

    NoOfGuest: (state, action) => {
      state.eventguest = action.payload
    },

    EventDate: (state, action) => {
      state.eventdate = action.payload
    },

    eventVenue: (state, action) => {
      state.eventvenue = action.payload
    },

    addonsfloralservices: (state, action) => {
      state.eventfloral = action.payload
    },

    addonsdancetype: (state, action) => {
      state.eventaddonsdancefloor = action.payload
    },

    addonsprojectorsneeded: (state, action) => {
      state.eventaddonsdisplay = action.payload
    },

    addonssounddescription: (state, action) => {
      state.eventaddonssound = action.payload
    },

  },
});

console.log(userSlice.actions.setUser())



export const { 
  setUser,
  EventType,
  NoOfGuest,
  EventDate,
  eventVenue,
  addonsfloralservices,
  addonsdancetype,
  addonsprojectorsneeded,
  addonssounddescription
 } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
