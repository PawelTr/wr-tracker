import React, { useEffect } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress-card.scss'

import { ProgressCardProps } from '../../types/ProgressCard';
import { useAction } from '../../store/action-creators/useAction';

const ProgressCard: React.FC<ProgressCardProps> = (props: ProgressCardProps) => {

  const { setActive, setInterval, updateCounter } = useAction();

  let newCurrentSessionValue = props.counter.currentSessionValue;

  const color = 'blueviolet';

  useEffect(() => {
    if (props.counter.currentSessionValue/props.counter.goal === 1) {
      clearInterval(props.counter.activeIntervalId);
    }
  }, [props.counter.currentSessionValue, props.counter.activeIntervalId, props.counter.goal])

  const stopCounter = () => {
    clearInterval(props.counter.activeIntervalId);

    setActive(props.counter._id, false);
    setInterval(props.counter._id, 0);
  }

  const startCounter = () => {
    setActive(props.counter._id, true);

    if (props.counter.activeIntervalId) {
      return;
    }

    if (!props.counter.activeIntervalId) {
      const newIntervalId = window.setInterval(() => {
        newCurrentSessionValue++
        updateCounter(props.counter._id, newCurrentSessionValue);
      }, 1000)

      setInterval(props.counter._id, newIntervalId);
    }
  }

  return(
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card__title"  style={{color: color}}> { props.counter.title } </div>
        <CircularProgressbarWithChildren value={ +(props.counter.currentSessionValue/props.counter.goal * 100).toFixed(0) }
                                         maxValue={ 100 }
                                         strokeWidth={ 12 }
                                         styles={ buildStyles({
                                             pathColor: color
                                           }
                                         )}>
          <div className="card__value" style={{ color: color }}> { (props.counter.currentSessionValue/props.counter.goal * 100).toFixed(0) }% </div>
          <div className="card__text" style={{ color: color }}> Completed </div>
        </CircularProgressbarWithChildren>
        <button type="button"
                className="card__button"
                style={{ backgroundColor: color }}
                onClick={ props.counter.isActive? stopCounter : startCounter }>
          { props.counter.isActive ? 'Stop' : 'Start' }
        </button>
      </div>
    </div>
  );
}

export default ProgressCard;