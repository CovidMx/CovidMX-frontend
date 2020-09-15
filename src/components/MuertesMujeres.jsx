import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MuertesMujeres = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey='rango' tick={{ fill: 'white' }} />
        <YAxis tick={{ fill: 'white' }} />
        <Line dataKey='muertes' type='monotone' stroke='#ED7600' strokeWidth={3} />
        <Line dataKey='recuperados' type='monotone' stroke='#49C96D' strokeWidth={3} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MuertesMujeres;
