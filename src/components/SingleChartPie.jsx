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
        <div className="ChartPieCard">
            <h2>{data.entidad_federativa}</h2>
            <h3 className="Pie__title">Casos activos: {data.casos_activos}</h3>
            <div className="Pie__info--recuperados Pie__recuperados">
                Recuperados: {data.recuperados}
            </div>
            <div className="Pie__info--muertes muertos">
                Muertos: {data.muertes}
            </div>
            <ResponsiveContainer height={300}>
                    <PieChart >
                    <Pie
                        data={dataChartPie}
                        
                        labelLine={false}
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