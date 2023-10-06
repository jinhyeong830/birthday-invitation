import Home from "./page/Home";
import Present from "./page/Present";
import GlobalStyle from "./style/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from "./components/location/Location";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/present-list" element={<Present />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
