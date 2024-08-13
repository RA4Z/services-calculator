import Calculadora from "./components/Calculadora";
import Footer from "./components/Footer";
import './App.css'
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  return (
    <div className="container">
      <Calculadora time={time} setTime={setTime} />
      <Footer />
    </div>
  )
}