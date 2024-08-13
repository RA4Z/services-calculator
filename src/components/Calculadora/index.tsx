import { useEffect, useState } from 'react';
import Database from './database/data.json'
import Especiais from './database/especiais.json'
import './styles.css';

interface Props {
  setSearch: any
  setTime: any
}

export default function Calculadora({ setTime, setSearch }: Props) {
  const [details, setDetails] = useState<string[]>([])
  const [totalTime, setTotalTime] = useState(0)
  const [data, setData] = useState<any>();
  const [specials, setSpecials] = useState<any>()
  const [formData, setFormData] = useState({
    nomeMaquina: '',
    servico: '',
    materialEspecial: '',
    tamanhoMaquina: '',
  });

  useEffect(() => {
    setDetails(Database.map(item => item.Details))
    setSpecials(Especiais)
  }, [])

  useEffect(() => {
    let timeService = 0
    let timeSpecial = 0
    if (formData.materialEspecial !== '') {
      timeSpecial = specials.find((item: any) => item.Componente === formData.materialEspecial).total
    }
    if (formData.servico !== '') {
      timeService = data.Data.find((item: any) => item.Serviço === formData.servico)[formData.tamanhoMaquina]
    }

    setTotalTime(timeSpecial > timeService ? timeSpecial : timeService)
  }, [formData, specials, data, setTime])

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (value !== data?.Details && name === 'nomeMaquina') {
      setData(Database.filter(item => value === item.Details)[0]);
      setFormData({ ...formData, [name]: value, servico: '', tamanhoMaquina: '' })
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(totalTime)
    setSearch(true)
    setTime(totalTime)
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__title">Calculadora para Serviços</h2>

      <div className="form__group">
        <label htmlFor="nomeMaquina" className="form__label">
          Nome da Máquina:
        </label>
        <select id="nomeMaquina"
          name="nomeMaquina"
          value={formData.nomeMaquina}
          onChange={handleChange}
          className="form__input"
          required >
          <option value="">Selecione a máquina</option> {/* Opção inicial */}
          {details.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="tamanhoMaquina" className="form__label">
          Tamanho da Carcaça:
        </label>
        <select
          id="tamanhoMaquina"
          name="tamanhoMaquina"
          value={formData.tamanhoMaquina}
          onChange={handleChange}
          className="form__input" >
          <option value="">Selecione o tamanho</option>
          {data !== undefined && data.Columns.map((column: any, index: any) => (
            <option key={index} value={column}>
              {column}
            </option>
          ))}
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="materialEspecial" className="form__label">
          Material Especial:
        </label>
        <select
          id="materialEspecial"
          name="materialEspecial"
          value={formData.materialEspecial}
          onChange={handleChange}
          className="form__input" >
          <option value="">Selecione o Material</option>
          {specials !== undefined && specials.map((item: any, index: any) => (
            <option key={index} value={item.Componente}>
              {item.Componente}
            </option>
          ))}
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="servico" className="form__label">
          Serviço:
        </label>
        <select
          id="servico"
          name="servico"
          value={formData.servico}
          onChange={handleChange}
          className="form__input"
          required >
          <option value="">Selecione o serviço</option>
          {data !== undefined && data.Services.map((servico: any, index: any) => (
            <option key={index} value={servico}>
              {servico}
            </option>
          ))}
        </select>
      </div>

      <button className="form__button">
        Calcular Tempo Total de Serviço
      </button>
    </form>
  );
}