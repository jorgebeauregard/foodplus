import React, { Component } from 'react';
import HeroSection from './components/HeroSection';
import EasySection from './components/EasySection';
import PointsSection from './components/PointsSection';
import InstructionsSections from './components/InstructionsSection';
import NavSection from './components/NavSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavSection/>
        <HeroSection/>
        <EasySection/>
        <PointsSection/>
        <InstructionsSections/>
      </div>
    );
  }
}

export default App;
