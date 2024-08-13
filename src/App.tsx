import { useEffect, useState } from 'react';
import Database from './database/data.json'
import './App.css';

function App() {
  const [details, setDetails] = useState<string[]>([])
  const [data, setData] = useState<any>();
  const [formData, setFormData] = useState({
    nomeMaquina: '',
    servico: '',
    materialEspecial: '',
    tamanhoMaquina: '',
  });

  useEffect(() => {
    setDetails(Database.map(item => item.Details))
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData(Database.filter(item => value === item.Details)[0]);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode enviar os dados para o seu backend
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form__title">Dados da Máquina</h2>

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
          <input
            type="text"
            id="tamanhoMaquina"
            name="tamanhoMaquina"
            value={formData.tamanhoMaquina}
            onChange={handleChange}
            className="form__input" />
        </div>

        <div className="form__group">
          <label htmlFor="servico" className="form__label">
            Serviço:
          </label>
          <input
            type="text"
            id="servico"
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="materialEspecial" className="form__label">
            Material Especial:
          </label>
          <input
            type="text"
            id="materialEspecial"
            name="materialEspecial"
            value={formData.materialEspecial}
            onChange={handleChange}
            className="form__input" />
        </div>
        <button type="submit" className="form__button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;