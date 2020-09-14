import React, { PureComponent, useEffect, useState } from 'react'
import SingleChartPie from './SingleChartPie'


const ChartPie = () => {

  const [apiData, setInfo] = useState([]);
  
  useEffect(()=>{
    fetch('http://covitmx.info:8000/api/CasosPorEstado/')
    .then(response => response.json())
    .then(data => setInfo(data))
  },[]);

  return (
    <>
      {
        apiData.map(item => {
         
          // <SingleChartPie {...item} />
          return <SingleChartPie key={item.entidad_id} {... item} />
        })
  
      }
    
        </>
  );
}

export default ChartPie;