import React from 'react';
import './settings-page.scss';
import SettingsCard from '../../components/settings-card/settings-card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';
import AddCard from '../../components/add-card/add-card';

const SettingsPage: React.FC = () => {

  const { counters } = useTypedSelector(state => state.counters);

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