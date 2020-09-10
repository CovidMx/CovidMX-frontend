import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ChartsEstadosCards from '../components/ChartsEstadosCards';
import ChartBar from '../components/ChartBar';
import Footer from '../components/Footer';

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
      <Hero />
      <ChartsEstadosCards />
      <ChartBar info={covid} />
      <Footer />
    </>
  );
};

export default Home;
