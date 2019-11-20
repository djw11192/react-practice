import React from 'react';
// import logo from './logo.svg';
import AppHeader from './js/components/common/header/AppHeader';
import AppMain from './js/components/AppMain';
import './App.scss';

const App = () => (

  <div className="app">
    <AppHeader />
    <AppMain/>
    {/* <AppFooter/> */}
  </div>
);

export default App;
