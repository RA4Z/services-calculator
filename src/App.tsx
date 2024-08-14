import { useEffect, useState } from "react";
import Calculadora from "./components/Calculadora";
import Footer from "./components/Footer";
import Resumo from "./components/Resumo";
import './App.css'
import { getServices, getSpecials } from "./services/connection";

export default function App() {
  const [time, setTime] = useState(0);
  const [search, setSearch] = useState(false);
  const [database, setDatabase] = useState([])
  const [special, setSpecial] = useState([])

  useEffect(() => {
    async function runEffect() {
      if (database.length === 0) setDatabase(await getServices())
      if (special.length === 0) setSpecial(await getSpecials())
    }
    runEffect()
  }, [database, special])

  return (
    <div className="container">
      <div className="center">
        <Calculadora Database={database} Especiais={special} setSearch={setSearch} setTime={setTime} />
        <Footer />
      </div>
      <Resumo search={search} time={time} setSearch={setSearch} />
    </div>
  )
}