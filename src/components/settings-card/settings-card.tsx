import React from 'react'

import './settings-card.scss'
import { useAction } from '../../store/action-creators/useAction';
import { SettingsCardProps } from '../../types/SettingsCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SettingsCard: React.FC<SettingsCardProps> = (props: SettingsCardProps) => {

  const counter = useTypedSelector((state => state.user[`${props.type}Counter`]))

  const actions = useAction()

  const goal = counter.goal

  const submitHandler: any = (event: any) => {
    event.preventDefault()
    const count = +event.target[0].value
    return actions[`update${props.type}Goal`](count)
  }

  return(
    <div className="settings-card__wrapper">
      <div className="settings-card__container">
        <form className="settings-card__form" onSubmit={ submitHandler }>
          <div className="settings-card__title" style={{color: props.color}}> { props.type } goal </div>
          <div className="settings-card__input-wrapper">
            <input type="number"
                   className="settings-card__input"
                   defaultValue={ goal }
                   min={ 30 }
                   max={ 720 }
                   style={{ border: `2px solid ${ props.color }`, color: props.color}}/>
            <div className="settings-card__input-text" style={{ color: props.color }}> min </div>
          </div>
          <button type="submit"
                  className="settings-card__button"
                  style={{ backgroundColor: props.color }}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsCard;
