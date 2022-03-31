import React, { useEffect } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress-card.scss'

import { ProgressCardProps } from '../../types/ProgressCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../store/action-creators/useAction';

const ProgressCard: React.FC<ProgressCardProps> = (props: ProgressCardProps) => {

  const { goal, currentSessionValue, isActive, activeIntervalId } = useTypedSelector(state => state.user[`${props.type}Counter`])

  const actions = useAction();

  let newCurrentSessionValue = currentSessionValue

  useEffect(() => {
    if (currentSessionValue/goal === 1) {
      clearInterval(activeIntervalId);
    }
  }, [currentSessionValue, activeIntervalId, goal])

  const stopCounter = () => {
    clearInterval(activeIntervalId);

    actions[`set${props.type}Active`](false)
    actions[`set${props.type}Interval`](0)
  }

  const startCounter = () => {
    actions[`set${props.type}Active`](true)

    if (activeIntervalId) {
      return;
    }

    if (!activeIntervalId) {
      const newIntervalId = window.setInterval(() => {
        newCurrentSessionValue++
        actions[`update${props.type}Counter`](newCurrentSessionValue);
      }, 1000)

      actions[`set${props.type}Interval`](newIntervalId)
    }
  }

  return(
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card__title"  style={{color: props.color}}> { props.title } </div>
        <CircularProgressbarWithChildren value={ +(currentSessionValue/goal * 100).toFixed(0) }
                                         maxValue={ 100 }
                                         strokeWidth={ 12 }
                                         styles={ buildStyles({
                                             pathColor: props.color
                                           }
                                         )}>
          <div className="card__value" style={{ color: props.color }}> { (currentSessionValue/goal * 100).toFixed(0) }% </div>
          <div className="card__text" style={{ color: props.color }}> Completed </div>
        </CircularProgressbarWithChildren>
        <button type="button"
                className="card__button"
                style={{ backgroundColor: props.color }}
                onClick={ isActive? stopCounter : startCounter }>
          { isActive ? 'Stop' : 'Start' }
        </button>
      </div>
    </div>
  );
}

export default ProgressCard;