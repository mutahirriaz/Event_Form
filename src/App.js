import "./App.css";
import Catogeries from "./Components/Catogeries";
import Dashboard from "./Components/Dashboard";
import { Container } from "@mui/material";
import Addons from "./Components/Addons";

function App() {
  return (
    <div >
      <Container maxWidth="xl">
        <Dashboard />
        <Catogeries />
        {/* <Tabs /> */}
        {/* <Addons /> */}
      </Container>
    </div>
  );
}

export default App;
