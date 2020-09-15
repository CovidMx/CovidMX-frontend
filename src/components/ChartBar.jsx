//Gráfico de barra para el dashboard principal

import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend } from 'recharts';

const ChartBar = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' opacity='.5' />
        <XAxis dataKey='entidad_federativa' />
        <Bar fill='#49C96D' dataKey='casos_activos' stackId='a' />
        <Bar fill='#ED7600' dataKey='muertes' stackId='a' />
        <Bar fill='#3529A3' dataKey='recuperados' stackId='a' />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
