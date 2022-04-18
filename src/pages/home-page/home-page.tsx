import React from 'react';

import ProgressCard from '../../components/progress-card/progress-card';

import './home-page.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';
import AddCard from '../../components/add-card/add-card';
import { AddCardTypes } from '../../types/AddCard';


const HomePage: React.FC = () => {

  const { counters } = useTypedSelector(state => state.user);

  return (
    <div className="home__container">
      { counters.map((counter: CounterState) => {
        return <ProgressCard id={counter.id} color="#3e98c7" title="Counter"/>
      }) }
      <AddCard type={AddCardTypes['COUNTER-CARD']}/>
    </div>
  );
}

export default HomePage;