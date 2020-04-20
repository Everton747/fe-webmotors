import React, {useState, useEffect} from 'react';

import './styles.scss';

import api from '../../services/api';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';

export default function Index() {

  const [vehicles, updateVehicles] = useState([]);

  useEffect(() => {
    const response = api.get('/vehicles', { params: { 'Page': 1 } });
    response.then(res => { updateVehicles(res.data) });
  }, []);

  return (
    <>
    <Header></Header>
    <Search className="search-bar"></Search>
    <ul>
      {vehicles.map((vehicle) => <li key={vehicle.ID}><Card data={vehicle}></Card></li>)}
    </ul>
    </>
  );
}
