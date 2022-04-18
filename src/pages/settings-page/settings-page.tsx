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
          return <SettingsCard id={counter.id} color='#3e98c7' />
        })
      }
    </div>
  )
}

export default SettingsPage;