import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DataPages from "./pages/DataPages";

import Contact from "./pages/Contact";
const App = () => {
 
  return (
    <>
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cartdata/:id" element={<DataPages />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        
      </Routes>
    </>
  );
};

export default App;
