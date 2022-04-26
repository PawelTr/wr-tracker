import React, { useEffect } from 'react';

import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';

import ProgressCard from '../../components/progress-card/progress-card';
import AddCard from '../../components/add-card/add-card';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../store/action-creators/useAction';
import { CounterState } from '../../types/counter';

import './home-page.scss';



const HomePage: React.FC = () => {

  const { counters, isLoading, error } = useTypedSelector(state => state.counters);
  const { _id, isAuth } = useTypedSelector(state => state.user)
  const { fetchCounters } = useAction();

  useEffect(() => {
    if (isAuth) {
      fetchCounters(_id);
    }
  }, [isAuth])

  if (isLoading) {
    return <div className='loader-container'>
      <CircularProgress width='64px' height='64px' color={'#fff'} />
    </div>
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