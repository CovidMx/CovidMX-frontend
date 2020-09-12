import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ChartsEstadosCards from '../components/ChartsEstadosCards';
import ChartsDashboardHome from '../components/ChartsDashboardHome';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ChartsEstadosCards />
      <ChartsDashboardHome />
      <Footer />
    </>
  );
};

export default Home;
