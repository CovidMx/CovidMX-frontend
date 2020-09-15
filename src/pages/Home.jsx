import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Estados from '../components/Estados';
import DashboardMexico from '../components/DashboardMexico';
import DashboardGeneros from '../components/DashboardGeneros';
import DashboardGenerosMuertes from '../components/DashboardGenerosMuertes';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Estados />
      <DashboardMexico />
      <DashboardGeneros />
      <DashboardGenerosMuertes />
      <Footer />
    </>
  );
};

export default Home;
