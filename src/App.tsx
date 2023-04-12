import { Link } from "react-router-dom";
import Me from "./components/Me";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <div className="centrado">
          <Me />
        </div>
      </Container>
    </>
  );
}

export default App;
