import React, { useEffect } from 'react';
import './settings-page.scss';
import SettingsCard from '../../components/settings-card/settings-card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';
import AddCard from '../../components/add-card/add-card';
import { useAction } from '../../store/action-creators/useAction';

const SettingsPage: React.FC = () => {

  const { counters } = useTypedSelector(state => state.counters);
  const { _id, isAuth } = useTypedSelector(state => state.user)
  const { fetchCounters } = useAction();

  useEffect(() => {
    if (isAuth) {
      fetchCounters(_id);
    }
  }, [isAuth])

  return(
    <div className="settings-container">
      {
        counters.map((counter: CounterState) => {
          return <SettingsCard counter={counter} key={counter._id}/>
        })
      }
      <AddCard/>
    </div>
  )
}

export default SettingsPage;