import React from 'react';
import './settings-page.scss';
import SettingsCard from '../../components/settings-card/settings-card';
import { CounterTypes } from '../../types/counter';

const SettingsPage: React.FC = () => {

  return(
    <div className="settings-container">
      <SettingsCard type={CounterTypes.WORK} color="#3e98c7"/>
      <SettingsCard type={CounterTypes.REST} color="cadetblue"/>
    </div>
  )
}

export default SettingsPage;