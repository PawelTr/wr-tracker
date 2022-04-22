import React, { useEffect } from 'react';
import './settings-page.scss';
import SettingsCard from '../../components/settings-card/settings-card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';
import AddCard from '../../components/add-card/add-card';
import { useAction } from '../../store/action-creators/useAction';

const SettingsPage: React.FC = () => {

  const { counters } = useTypedSelector(state => state.counters);
  const { fetchCounters } = useAction();

  useEffect(() => {
    fetchCounters(0);
  }, [])

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