import React from 'react';
import './AppHeader.scss';

const AppHeader = () => (

  <header className="header">
    <div className="header__inner container">
      <div className="header__name">
        <span class="header__initial">
          D
        </span>
        David Weber
      </div>
      <div className="header__links">
        <a href="/">Projects</a>
        <a href="/">About</a>
      </div>
    </div>
  </header>
);

export default AppHeader;
