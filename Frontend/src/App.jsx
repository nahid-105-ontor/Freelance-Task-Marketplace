import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css"
import { Route, Routes } from "react-router-dom";
function App(){
  return(
    <div className="full">
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
        <Route index element={<Hero></Hero>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;