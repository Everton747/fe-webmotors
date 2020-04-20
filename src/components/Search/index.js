import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.scss';

export default function Search() {

  const [zeroKm, updateZeroKm] = useState(false);
  const [used, updateUsed] = useState(false);

  const [city, updateCity] = useState('São Paulo');

  const [make, updateMake] = useState([]);
  const [model, updateModel] = useState([]);
  const [version, updateVersion] = useState([]);

  useEffect(() => {
    const response = api.get('/make');
    response.then(res => { updateMake(res.data) });
  }, []);

  function handleUpdateModels(e) {
    const response = api.get('/model/', { params: { 'MakeID': e.target.value } });
    response.then(res => { updateModel(res.data) });
  }

  function handleUpdateVersions(e) {
    const response = api.get('/version/', { params: { 'ModelID': e.target.value } });
    response.then(res => { updateVersion(res.data) });
  }

  return (
    <>
      <section className="inputs">
        <h2 className="active">Comprar Carros</h2>
        <h2>Comprar Motos</h2>
        <div className="new-used">
          <div className={zeroKm ? 'checkbox checked' : 'checkbox'} onClick={e => updateZeroKm(!zeroKm)}>✔ Novos</div>
          <div className={used ? 'checkbox checked' : 'checkbox'} onClick={e => updateUsed(!used)}>✔ Usados</div>
        </div>
        <div className="input-group">
          Onde:
          <input type="text" className="city" value={city} onChange={e => updateCity(e.target.value)} />
          <div className="select-group">
            Raio:
            <select type="text" className="radius" placeholder='Raio'>
              <option value="20">20km</option>
              <option value="40">40km</option>
              <option value="100">100km</option>
            </select>
          </div>
        </div>
        <div className="select-group">
          Marca:
          <select type="text" className="vehicle-make" onChange={handleUpdateModels}>
            <option>Todas</option>
            {make.map(make => (
              <option key={make.ID} value={make.ID}>{make.Name}</option>
            ))}
          </select>
        </div>
        <div className="select-group">
          Modelos:
          <select type="text" className="vehicle-model" onChange={handleUpdateVersions}>
            <option>Todos</option>
            {model.map(model => (
              <option key={model.ID} value={model.ID}>{model.Name}</option>
            ))}
          </select>
        </div>
        <select type="text" className="vehicle-year">
          <option value="">Ano Desejado</option>
          <option value="">2013</option>
          <option value="">2012</option>
          <option value="">2011</option>
        </select>
        <select type="text" className="vehicle-price">
          <option value="">Faixa de preço</option>
          <option value="">20 a 40 mil</option>
          <option value="">40 a 60 mil</option>
          <option value="">60 a 70 mil</option>
        </select>
        <div className="select-group input-group">
          Versão:
          <select type="text" className="vehicle-version">
            <option>Todas</option>
            {version.map(version => (
              <option key={version.ID} value={version.ID}>{version.Name}</option>
            ))}
          </select>
        </div>

        <span> > Busca Avançada</span>
        <div className="search-options">
          {/* <h5>Limpar Filtros</h5> */}
          <button>Ver Ofertas</button>
        </div>
      </section>
    </>
  );
}
