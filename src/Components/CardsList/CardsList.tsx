import React from 'react';
import {dataPets} from '../../data';
import Card from './Card';
import '../../assets/styles.css'

export default function CardsList(): JSX.Element {
    return (
      <div className='containerCard'>
        {
              dataPets.map((el, i) => <Card key={i} data={el} />)
          }

      </div>
    );
}
