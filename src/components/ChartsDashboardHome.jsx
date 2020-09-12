import React from 'react';

import ChartBar from './ChartBar';

import '../assets/styles/components/ChartsDashboardHome.scss';

const covid = [
  { name: 'Jun', male: 800, female: 700 },
  { name: 'Jul', male: 200, female: 500 },
  { name: 'Ago', male: 100, female: 400 },
  { name: 'Sep', male: 250, female: 100 },
];

const ChartsDashboardHome = () => {
  return (
    <div className='container'>
      <div className='ChartsDashboard'>
        <div className='ChartsDashboard__bar'>
          <ChartBar info={covid} />
        </div>
        <div className='ChartsDashboard__bar2'>
          <ChartBar info={covid} />
        </div>
      </div>
    </div>
  );
};

export default ChartsDashboardHome;
