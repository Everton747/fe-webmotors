import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import './styles.scss';

import api from '../../services/api';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';

export default function Index() {

  const [vehicles, updateVehicles] = useState([]);
  const [hasMore, updateHasMore] = useState(true);

  function handleMoreVehicles(e) {
    const response = api.get('/vehicles', { params: { 'Page': e } });
    response.then(res => { updateVehicles(vehicles.concat(res.data)) });
    if(e > 3) updateHasMore(false);
  }

  return (
    <>
      <Header></Header>
      <Search className="search-bar"></Search>
      <ul>
      <InfiniteScroll
        pageStart={0}
        loadMore={e => handleMoreVehicles(e)}
        hasMore={hasMore}
      >
        {vehicles.map((vehicle) => <li key={vehicle.ID}><Card data={vehicle}></Card></li>)}
      </InfiniteScroll>
      </ul>
    </>
  );
}
