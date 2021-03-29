import React from 'react';

import classes from './Header.module.scss';

const Header: React.FC = () => (
  <header className={classes.component}>
    <img
      className={classes.logo}
      src="assets/logo.png"
      alt="logo"
    />

    <a
      className={classes.link}
      href="https://dev.gnivc.ru:9443/gnivc/ff-web"
      target="_blank"
      rel="noopener noreferrer"
    >
      Документация по разработке приложений
    </a>

    <a
      className={classes.link}
      href="https://dev.gnivc.ru:9443/gnivc/documentation/src/branch/master"
      target="_blank"
      rel="noopener noreferrer"
    >
      Документация по работе с Git
    </a>
  </header>
);

export default Header;
