import React from 'react';
import logo from '../../assets/icons/add-svg.svg'
import './add-card.scss'
import { useAction } from '../../store/action-creators/useAction';

const AddCard: React.FC = () => {

  const { addCounter } = useAction();

  const addCounterHandler = (): void => {
    const newCounter = {
      _id: Math.random(),
      ownerId: 0,
      title: 'New Counter',
      currentSessionValue: 0,
      weekValue: 0,
      monthValue: 0,
      goal: 60,
      isActive: false,
      activeIntervalId: 0,
    }

    addCounter(newCounter);
  }

  return(
    <div className='card-wrapper'>
      <div className="card-container--add">
        <button className="card-add__button" onClick={addCounterHandler}>
          <img src={logo} alt="add-img" className="add-img"/>
        </button>
      </div>
    </div>
  );
}

export default AddCard;