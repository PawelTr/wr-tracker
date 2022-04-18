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
        return <ProgressCard counter={counter} key={counter.id}/>
      }) }
      <AddCard type={AddCardTypes.COUNTER_CARD}/>
    </div>
  );
}

export default HomePage;