import React, { useRef, useState } from 'react'

import './settings-card.scss'
import { useAction } from '../../store/action-creators/useAction';
import { SettingsCardProps } from '../../types/SettingsCard';
import successLogo from '../../assets/icons/success.svg'
import editLogo from '../../assets/icons/edit-svg.svg'
import saveLogo from '../../assets/icons/save-svg.svg'

const SettingsCard: React.FC<SettingsCardProps> = (props: SettingsCardProps) => {

  const { updateGoal, setTitle } = useAction();

  const color = 'blueviolet';

  const titleInput = useRef<any>(null)
  const [success, setSuccess] = useState(false);
  const [isTitleActive, setTitleActive] = useState(false);

  const submitGoalHandler = (event: any): void => {
    event.preventDefault();
    const countInMinutes = +event.target[0].value * 60;
    updateGoal(props.counter._id, countInMinutes);

    setSuccess(() => true)
    if (!success) {
      window.setTimeout(() => {
        setSuccess(() => false)
      }, 1000)
    }
  }

  const submitTitleHandler = (event: any): void => {
    event.preventDefault();
    const newTitle = event.target[0].value;
    setTitle(props.counter._id, newTitle);
    setTitleActive(false);
  }

  const editTitleHandler = (event: any): void => {
    event.preventDefault();
    setTitleActive(true);
    titleInput.current.focus();
  }

  return(
    <div className="settings-card__wrapper">
      <div className="settings-card__container">
        <form className="settings-card__title"  onSubmit={ submitTitleHandler }>
          <input type="text"
                 className="settings-card__input settings-card__input--title"
                 defaultValue={ props.counter.title }
                 style={{ color: color }}
                 readOnly={ !isTitleActive }
                 ref={titleInput}/>
          { isTitleActive
            ?  <button type="submit" className="settings-card__button-save">
                  <img src={ saveLogo }
                       alt="save"/>
                </button>
            :  <button className="settings-card__button-edit" onClick={ editTitleHandler }>
                    <img src={ editLogo }
                         alt="edit"/>
                </button>
          }
        </form>
        <form className="settings-card__form" onSubmit={ submitGoalHandler }>
          <div className="settings-card__input-wrapper">
            <input type="number"
                   className="settings-card__input"
                   defaultValue={ props.counter.goal/60 }
                   min={ 30 }
                   max={ 720 }
                   style={{ border: `2px solid ${ color }`, color: color}}/>
            <div className="settings-card__input-text" style={{ color: color }}> min </div>
          </div>
          <button type="submit"
                  className="settings-card__button"
                  style={{ backgroundColor: color }}>
            Save
            {success ? <img className="settings-card__button-success" src={successLogo} alt="success"/> : ''}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsCard;
