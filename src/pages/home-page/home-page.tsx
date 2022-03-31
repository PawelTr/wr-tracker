import React from 'react';

import ProgressCard from '../../components/progress-card/progress-card';

import './home-page.scss';
import { CounterTypes } from '../../types/counter';


const HomePage: React.FC = () => {

  return (
    <div className="home__container">
      <ProgressCard title="Work day progress" color="#3e98c7" type={CounterTypes.WORK}/>
      <ProgressCard title="Rest day progress" color="cadetblue" type={CounterTypes.REST}/>
    </div>
  );
}

export default HomePage;