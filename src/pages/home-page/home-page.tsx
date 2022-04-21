import React from 'react';

import ProgressCard from '../../components/progress-card/progress-card';

import './home-page.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';
import AddCard from '../../components/add-card/add-card';


const HomePage: React.FC = () => {

  const { counters } = useTypedSelector(state => state.counters);

  return (
    <div className="home__container">
      { counters.map((counter: CounterState) => {
        return <ProgressCard counter={counter} key={counter.id}/>
      }) }
      <AddCard />
    </div>
  );
}

export default HomePage;