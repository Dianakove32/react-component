import React from 'react';
import { dataP } from '../../data';
import '../../assets/styles.css';

interface dataProps {
    data: dataP
}
export default function Card({ data }: dataProps): JSX.Element {
      return (
      <div className='petcard'>
        <h2>{data.pet} {' '} {data.name} </h2>
        <img src={data.img} alt='pict' />
        <div className='petInfo'>
          <p style={{ fontStyle: 'italic' }}>My pet needs a hotel</p>
          <p> from {' '}<b>{data.dayStart}</b> to <b>{data.dayEnd}</b> </p>

          <p className='comment'>{data.comment}</p>
          <p>Contacts: <b>{data.contact}</b> </p>
          <p>
            mobile: <b>{data.phone}</b>
          </p>
        </div>
      </div>

    );
}
