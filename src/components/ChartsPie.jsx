import React, { PureComponent, useEffect, useState } from 'react'
// import SingleChartPie from './SingleChartPie'

const ChartPie = () => {

  const [apiData, setInfo] = useState([]);
  
  useEffect(()=>{
    fetch('http://covitmx.info:8000/api/CasosPorEstado/')
    .then(response => response.json())
    .then(data => setInfo(data))
  },[]);

  return (
    <>
    <div>
      
      {
        apiData.map(item => {
        //  console.log(item);
          <SingleChartPie {...item} />
        })
      }

    </div>
    
    
    </>
  );
}

export default ChartPie;