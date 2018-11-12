import React, { Component } from 'react';
import HeroSection from './components/HeroSection';
import EasySection from './components/EasySection';
import PointsSection from './components/PointsSection';
import InstructionsSection from './components/InstructionsSection';
import NavSection from './components/NavSection';
import './App.css';
import WhoSection from './components/WhoSection';
import PlansSection from './components/PlansSection';
import ReadySection from './components/ReadySection';

class App extends Component {
  render() {
    return (
      <div>
        <NavSection/>
        <HeroSection/>
        <WhoSection/>
        <EasySection/>
        <PointsSection/>
        <PlansSection/>
        <ReadySection/>
        <InstructionsSection/>
      </div>
    );
  }
}

export default App;
