import React from 'react';
import Component_A from './Component_A';
import Component_B from './B/Component_B';
import './style.css';

export default function App() {
  return (
    <div>
      <Component_A />
      <Component_B />
      <p>*****Demo******</p>
    </div>
  );
}
