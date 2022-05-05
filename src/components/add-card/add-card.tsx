import React from 'react';
import logo from '../../assets/icons/add-svg.svg'
import './add-card.scss'
import { useAction } from '../../store/action-creators/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';

const AddCard: React.FC = () => {

  const { isCreationLoading } = useTypedSelector(state => state.counters);
  const { _id } = useTypedSelector(state => state.user)
  const { createCounter } = useAction();

  const addCounterHandler = (): void => {
    const newCounter = {
      ownerId: _id,
      title: 'New Counter',
      currentSessionValue: 0,
      weekValue: 0,
      monthValue: 0,
      goal: 240,
      isActive: false,
      activeIntervalId: 0,
      isLoading: false,
    }

    createCounter(newCounter);
  }

  return(
    <div className='card-wrapper'>
      <div className="card-container--add">
        {
          isCreationLoading
          ? <CircularProgress width='64px' height='64px' color={'#fff'} />
          : <button className="card-add__button" onClick={addCounterHandler}>
              <img src={logo} alt="add-img" className="add-img"/>
            </button>
        }
      </div>
    </div>
  );
}

export default AddCard;