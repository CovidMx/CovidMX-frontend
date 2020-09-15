import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RadialChartM = ({ data }) => {
  return (
    <ResponsiveContainer height={500}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity='.5' />
        <Area dataKey='m_hipertension' type='monotone' stroke='#5D66C9' fill='#5D66C9' stackId='1' />
        <Area dataKey='m_epoc' type='monotone' stroke='#ED7600' fill='#ED7600' stackId='1' />
        <Area dataKey='m_asma' type='monotone' stroke='#00C8FF' fill='#00C8FF' stackId='1' />
        <Area dataKey='m_diabetes' type='monotone' stroke='#49C96D' fill='#49C96D' stackId='1' />
        <Area dataKey='m_tabaquismo' type='monotone' stroke='#C9AC3E' fill='#C9AC3E' stackId='1' />
        <Area dataKey='m_obesidad' type='monotone' stroke='#C93434' fill='#C93434' stackId='1' />
        <XAxis dataKey='rango' />
        <YAxis />
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RadialChartM;
