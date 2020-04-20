import React from 'react';

import logo from '../../assets/webmotors.svg';
import './styles.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
}
