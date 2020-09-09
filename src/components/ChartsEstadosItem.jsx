import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import '../assets/styles/Vars.scss';

const data = [
  { name: 'Jun', covid: 400, pv: 0, amt: 2400 },
  { name: 'Jul', covid: 200, pv: 500, amt: 2400 },
  { name: 'Ago', covid: 100, pv: 400, amt: 2400 },
  { name: 'Sep', covid: 500, pv: 100, amt: 2400 },
];

const ChartsEstadosItem = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data} margin={{ left: 3, right: 3, top: 3, bottom: 3 }}>
        <Line type='monotone' dataKey='covid' stroke='#49C96D' dot={false} strokeWidth={3} />
        <Line type='monotone' dataKey='pv' stroke='#49C96D' />
        {/* <CartesianGrid stroke='#D9D9D9' strokeDasharray='5 5' /> */}
        {/* <XAxis dataKey='name' /> */}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartsEstadosItem;
