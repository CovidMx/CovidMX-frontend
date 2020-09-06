import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Jun', covid: 400, pv: 0, amt: 2400 },
  { name: 'Jul', covid: 200, pv: 500, amt: 2400 },
  { name: 'Ago', covid: 100, pv: 400, amt: 2400 },
  { name: 'Sep', covid: 250, pv: 100, amt: 2400 },
];

const ChartsEstadosItem = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data} margin={{ left: 50, right: 3, top: 3 }}>
        <Line type='monotone' dataKey='covid' stroke='#8884d8' dot={false} strokeWidth={3} />
        <Line type='monotone' dataKey='pv' stroke='yellow' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartsEstadosItem;
