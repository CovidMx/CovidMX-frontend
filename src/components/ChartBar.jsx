import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

// const ChartBar = (props) => {
//   return (
//     <BarChart width={300} height={250} data={props.data}>
//       <XAxis dataKey='name' />
//       <YAxis />
//       <Tooltip />
//       <Bar fill='green' dataKey='male' />
//       <Bar fill='blue' dataKey='female' />
//     </BarChart>
//   );
// };

const ChartBar = ({ info }) => {
  return (
    <BarChart data={info} width={300} height={300}>
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Bar fill='green' dataKey='male' />
      <Bar fill='blue' dataKey='female' />
    </BarChart>
  );
};

export default ChartBar;
