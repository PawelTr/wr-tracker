import React from 'react';
import './settings-page.scss';
import SettingsCard from '../../components/settings-card/settings-card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CounterState } from '../../types/counter';

const SettingsPage: React.FC = () => {

  const { counters } = useTypedSelector(state => state.user);

  return(
    <div className="settings-container">
      {
        counters.map((counter: CounterState) => {
          return <SettingsCard counter={counter} key={counter.id}/>
        })
      }
    </div>
  )
}

export default SettingsPage;