import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./Navbar";
import About from './components/About';
import HeadTail from './components/HeadTail';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/HeadTail" element={<HeadTail />} />
      </Routes>
    </>
  );
}

export default App;
