import React, { ChangeEvent, useRef, useState } from 'react'

import './settings-card.scss'
import { useAction } from '../../store/action-creators/useAction';
import { SettingsCardProps } from '../../types/SettingsCard';
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import editLogo from '../../assets/icons/edit-svg.svg'
import { UpdateCounterDto } from '../../types/counter';

const SettingsCard: React.FC<SettingsCardProps> = (props: SettingsCardProps) => {

  const { patchCounter, deleteCounter } = useAction();

  const color = props.counter.colour || 'blueviolet';

  const titleInput = useRef<any>(null);
  const [title, setTitle] = useState(props.counter.title);
  const [goal, setGoal] = useState(props.counter.goal);
  const [isTitleActive, setTitleActive] = useState(false);

  const submitHandler = (event: any): void => {
    event.preventDefault();

    const updateCounterDto: UpdateCounterDto = {
      goal,
      title
    }

    patchCounter(props.counter._id, updateCounterDto);
    setTitleActive(false);
  }

  const editTitleHandler = (event: any): void => {
    event.preventDefault();
    setTitleActive(true);
    titleInput.current.focus();
  }

  const deleteCounterHandler = (event: any): void => {
    event.preventDefault();
    deleteCounter(props.counter._id)
  }

  return(
    <div className="settings-card__wrapper">
      <div className="settings-card__container">
        <form className="settings-card__title" onSubmit={ submitHandler }>
          <input type="text"
                 className="settings-card__input settings-card__input--title"
                 defaultValue={ props.counter.title }
                 style={{ color: color }}
                 readOnly={ !isTitleActive }
                 ref={titleInput}
                 onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}/>
          { !isTitleActive &&
              <button className="settings-card__button-edit"
                      type="submit"
                      onClick={ editTitleHandler }
                      disabled={props.counter.isLoading}>
                <img src={ editLogo } alt="edit"/>
              </button>
          }
        </form>
        <form className="settings-card__form" onSubmit={ submitHandler }>
          <div className="settings-card__input-wrapper">
            <input type="number"
                   className="settings-card__input"
                   defaultValue={ props.counter.goal/60 }
                   min={ 30 }
                   max={ 720 }
                   style={{ border: `2px solid ${ color }`, color: color}}
                   onChange={(event: ChangeEvent<HTMLInputElement>) => setGoal(+event.target.value * 60)}
            />
            <div className="settings-card__input-text" style={{ color: color }}> min </div>
          </div>
          <button type="submit"
                  className="settings-card__button settings-card__button--save"
                  disabled={props.counter.isLoading}
                  style={{ backgroundColor: color }}>
            { props.counter.isLoading
              ? <CircularProgress height="100%" color={'#fff'} />
              : 'Save'
            }
          </button>
          <button className="settings-card__button settings-card__button--delete"
                  disabled={props.counter.isLoading}
                  onClick={deleteCounterHandler}
                  style={{ backgroundColor: color }}>
            { props.counter.isLoading
              ? <CircularProgress width="24px" height="24px" color={'#fff'} />
              : <span>Delete</span>
            }
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsCard;
