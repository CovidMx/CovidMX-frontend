import React from 'react';

import Header from '../components/Header';
import ChartsEstadosCards from '../components/ChartsEstadosCards';
import ChartBar from '../components/ChartBar';

import '../assets/styles/App.scss';

const covid = [
  { name: 'Jun', male: 800, female: 700 },
  { name: 'Jul', male: 200, female: 500 },
  { name: 'Ago', male: 100, female: 400 },
  { name: 'Sep', male: 250, female: 100 },
];

const Home = () => {
  return (
    <>
      <Header />
      <ChartsEstadosCards />
      <ChartBar info={covid} />
    </>
  );
};

export default Home;
