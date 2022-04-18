import React, { useState } from 'react'

import './settings-card.scss'
import { useAction } from '../../store/action-creators/useAction';
import { SettingsCardProps } from '../../types/SettingsCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import successLogo from '../../assets/icons/success.svg'

const SettingsCard: React.FC<SettingsCardProps> = (props: SettingsCardProps) => {

  const { goal } = useTypedSelector((state => state.user.counters[props.id]))

  const actions = useAction()

  const [success, setSuccess] = useState(false)

  const submitHandler: any = (event: any) => {
    event.preventDefault()
    const countInMinutes = +event.target[0].value * 60;
    actions.updateGoal(props.id, countInMinutes)

    setSuccess(() => true)
    if (!success) {
      window.setTimeout(() => {
        setSuccess(() => false)
      }, 1000)
    }
  }

  return(
    <div className="settings-card__wrapper">
      <div className="settings-card__container">
        <form className="settings-card__form" onSubmit={ submitHandler }>
          <div className="settings-card__title" style={{color: props.color}}> goal </div>
          <div className="settings-card__input-wrapper">
            <input type="number"
                   className="settings-card__input"
                   defaultValue={ goal/60 }
                   min={ 30 }
                   max={ 720 }
                   style={{ border: `2px solid ${ props.color }`, color: props.color}}/>
            <div className="settings-card__input-text" style={{ color: props.color }}> min </div>
          </div>
          <button type="submit"
                  className="settings-card__button"
                  style={{ backgroundColor: props.color }}>
            Save
            {success ? <img className="settings-card__button-success" src={successLogo} alt="success"/> : ''}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsCard;
