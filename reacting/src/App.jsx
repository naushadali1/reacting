import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex items-center ">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
