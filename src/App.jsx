import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import FlightFilters from "./Pages/Listing";
import Header from "./Component/Header/Header";
import Login from "./Pages/Login";
import Mybiz from "./Pages/Mybiz";
import Page404 from "./Component/SearchBox/Page404";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mybiz" element={<Mybiz />} />
        <Route path="/flightfilters" element={<FlightFilters />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
