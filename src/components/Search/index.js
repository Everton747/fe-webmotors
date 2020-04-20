import React from 'react';

import './styles.scss';

export default function Search() {
  return (
    <>
      <section className="inputs">
        <h2 className="active">Comprar Carros</h2>
        <h2>Comprar Motos</h2>
        <div className="new-used">
          <div className="checkbox checked">✔ Novos</div>
          <div className="checkbox">✔ Usados</div>
        </div>
        <div className="input-group">
          Onde:
          <input type="text" className="city" value='São Paulo' />
          <div className="select-group">
            Raio:
            <select type="text" className="radius" placeholder='Raio'>
              <option value="" selected>100km</option>
            </select>
          </div>
        </div>
        <div className="select-group">
          Marca:
          <select type="text" className="vehicle-make">
            <option value="">Todas</option>
            <option value="">Chevrolet</option>
          </select>
        </div>
        <div className="select-group">
          Modelos:
          <select type="text" className="vehicle-model">
            <option value="">Todos</option>
            <option value="">Fusca</option>
          </select>
        </div>
        <select type="text" className="vehicle-year">
          <option value="">Ano Desejado</option>
        </select>
        <select type="text" className="vehicle-price">
          <option value="">Faixa de preços</option>
        </select>
        <div className="select-group input-group">
          Versão:
          <select type="text" className="vehicle-version">
            <option value="">Todas</option>
          </select>
        </div>

        <span> > Busca Avançada</span>
        <div className="search-options">
          <h5>Limpar Filtros</h5>
          <button>Ver Ofertas</button>
        </div>
      </section>

    </>
  );
}
