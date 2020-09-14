import React, { PureComponent, useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import '../assets/styles/components/ChartsPieStates.scss';

const COLORS = ['#49C96D', '#3529A3', '#FFBB28', '#FF8042'];

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

const SingleChartPie = (data) => {

    const dataChartPie = [
        {name: 'recuperados', value: data.recuperados},
        {name: 'muertes', value: data.muertes}
    ]
    

  return (
    <>
    <div style={{ width: '100%', height: 350 }}>
        <div className="ChartPieContainer">
                <h2>Casos activos: {data.casos_activos}</h2>
                {/* <p>{data.casos_por_mil} casos por cada mil habitantes</p> */}
                <div className="recuperados">
                    Recuperados: {data.recuperados}
                </div>
                <div className="muertos">
                    Muertos: {data.muertes}
                </div>
            </div>
        <ResponsiveContainer>
                <PieChart width={350} height={350}>
                <Pie
                    data={dataChartPie}
                    cx={150}
                    cy={100}
                    labelLine={true}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                    dataChartPie.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                </PieChart>
            

        </ResponsiveContainer>
    </div>
    
    
    </>
    // <div>Prueba</div>
  );
}

export default SingleChartPie;