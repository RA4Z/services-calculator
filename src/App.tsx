import Calculadora from "./components/Calculadora";
import Footer from "./components/Footer";
import './App.css'
import { useState } from "react";
import Resumo from "./components/Resumo";

export default function App() {
  const [time, setTime] = useState(0);
  const [search, setSearch] = useState(false);

  return (
    <div className="container">
      <div className="center">
        <Calculadora setSearch={setSearch} setTime={setTime} />
        <Footer />
      </div>
      <Resumo search={search} time={time} setSearch={setSearch} />
    </div>
  )
}