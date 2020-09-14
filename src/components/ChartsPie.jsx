import React, { PureComponent, useEffect, useState } from 'react'
import SingleChartPie from './SingleChartPie'
import '../assets/styles/components/Hero.scss'


const ChartPie = () => {

  const [apiData, setInfo] = useState([]);
  
  useEffect(()=>{
    fetch('http://covitmx.info:8000/api/CasosPorEstado/')
    .then(response => response.json())
    .then(data => setInfo(data))
  },[]);

  return (
    <>
    <div className="Hero__container">
      <div className="Hero__content">

        {
          apiData.map(item => {
          
            // <SingleChartPie {...item} />
            return <SingleChartPie key={item.entidad_id} {... item} />
          })
    
        }
      </div>

    </div>
    
        </>
  );
}

export default ChartPie;