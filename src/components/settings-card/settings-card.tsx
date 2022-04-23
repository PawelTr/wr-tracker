import React, { useRef, useState } from 'react'

import './settings-card.scss'
import { useAction } from '../../store/action-creators/useAction';
import { SettingsCardProps } from '../../types/SettingsCard';
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import successLogo from '../../assets/icons/success.svg'
import editLogo from '../../assets/icons/edit-svg.svg'
import saveLogo from '../../assets/icons/save-svg.svg'

const SettingsCard: React.FC<SettingsCardProps> = (props: SettingsCardProps) => {

  const { patchCounter, deleteCounter } = useAction();

  const color = props.counter.colour || 'blueviolet';

  const titleInput = useRef<any>(null)
  const [success, setSuccess] = useState(false);
  const [isTitleActive, setTitleActive] = useState(false);

  const submitGoalHandler = (event: any): void => {
    event.preventDefault();
    const countInMinutes = +event.target[0].value * 60;
    patchCounter(props.counter._id, { goal: countInMinutes })

    setSuccess(() => true)
    if (!success) {
      window.setTimeout(() => {
        setSuccess(() => false)
      }, 1000)
    }
  }

  const submitTitleHandler = (event: any): void => {
    event.preventDefault();
    const title = event.target[0].value;
    patchCounter(props.counter._id, { title })
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
        <form className="settings-card__title"  onSubmit={ submitTitleHandler }>
          <input type="text"
                 className="settings-card__input settings-card__input--title"
                 defaultValue={ props.counter.title }
                 style={{ color: color }}
                 readOnly={ !isTitleActive }
                 ref={titleInput}/>
          { props.counter.isLoading && <CircularProgress width="36px" height="36px" color={'#000'} /> }
          { isTitleActive
            ?  <button type="submit" className="settings-card__button-save" disabled={props.counter.isLoading}>
                  <img src={ saveLogo }
                       alt="save"/>
                </button>
            :  <button className="settings-card__button-edit" onClick={ editTitleHandler } disabled={props.counter.isLoading}>
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
                  className="settings-card__button settings-card__button--save"
                  disabled={props.counter.isLoading}
                  style={{ backgroundColor: color }}>
            { props.counter.isLoading
              ? <CircularProgress width="36px" height="36px" color={'#fff'} />
              : ( <div><span>Save</span> {success && <img className="settings-card__button-success" src={successLogo} alt="success"/>}</div>
              )
            }
          </button>
          <button className="settings-card__button settings-card__button--delete"
                  disabled={props.counter.isLoading}
                  onClick={deleteCounterHandler}
                  style={{ backgroundColor: color }}>
            { props.counter.isLoading
              ? <CircularProgress width="36px" height="36px" color={'#fff'} />
              : <span>Delete</span>
            }
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsCard;
