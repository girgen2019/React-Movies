/** @format */
import React, { Component } from 'react';
import './App.css';
import { Header } from './Layout/Header';
import { Footer } from './Layout/Footer';
import { Main } from './Layout/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
