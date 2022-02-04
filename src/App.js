import { Box, Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./Pages/Questions";
import ScroeScreen from "./Pages/ScroeScreen";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="" element={<Settings />}></Route>
            <Route path="questions" element={<Questions />}></Route>
            <Route path="score" element={<ScroeScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
