import React, { FC } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import './assets/styles.css';
import CardsList from './Components/CardsList/CardsList';

export const App: FC = () => {
  return (
    <div className='App'>
      <SearchBar />
      <CardsList />
    </div>
  );
};
