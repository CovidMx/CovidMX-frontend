import React, { PureComponent, useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell } from 'recharts';

const dataChartPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SingleChartPie = () => {

    // const dataChartPie = [
    //     {name: 'recuperados', value: data.recuperados},
    //     {name: 'muertes', value: data.muertes}
    // ]
    // console.log(dataChartPie)

  return (
    // <>
    // <div>
    //     <h1>{data.muertes}</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi cumque assumenda, ea alias eaque? Animi, tempora enim laboriosam quibusdam nostrum eligendi quae facere distinctio quisquam quidem eum? Vel, facere.</p>
      

    //     <PieChart width={400} height={400}>
    //       <Pie
    //         data={dataChartPie}
    //         cx={200}
    //         cy={200}
    //         labelLine={false}
    //         label={renderCustomizedLabel}
    //         outerRadius={80}
    //         fill="#8884d8"
    //         dataKey="value"
    //       >
    //         {
    //           data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
    //         }
    //       </Pie>
    //     </PieChart>
    // </div>
    
    
    // </>
    <div className='TeamCard'>
      <div className='TeamCard__img'>
        
      </div>
      <div className='TeamCard__info'>
        <h2></h2>
        <h4></h4>
        <h5>
          Twitter:
          <a href>
            @
            
          </a>
        </h5>

      </div>
    </div>
  );
}

export default SingleChartPie;