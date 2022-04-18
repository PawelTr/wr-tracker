import React from 'react';
import { AddCardProps } from '../../types/AddCard';
import logo from '../../assets/icons/add-svg.svg'
import './add-card.scss'

const AddCard: React.FC<AddCardProps> = (props: AddCardProps) => {
  return(
    <div className='card-wrapper'>
      <div className="card-container card-container--add">
        <img src={logo} alt="add-img" className="add-img"/>
      </div>
    </div>
  );
}

export default AddCard;