import React, { useEffect } from 'react';

import ProgressCard from '../../components/progress-card/progress-card';

import './home-page.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';
import AddCard from '../../components/add-card/add-card';
import { useAction } from '../../store/action-creators/useAction';


const HomePage: React.FC = () => {

  const { counters, loading, error } = useTypedSelector(state => state.counters);
  const { fetchCounters } = useAction();

  useEffect(() => {
    fetchCounters(0);
  }, [])

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    alert(error);
  }

  return (
    <div className="home__container">
      { counters.map((counter: CounterState) => {
        return <ProgressCard counter={counter} key={counter._id}/>
      }) }
      <AddCard />
    </div>
  );
}

export default HomePage;