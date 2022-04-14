import React, { memo, useState } from 'react';
import styles from './NavTab.module.scss';
import { NavLink } from 'react-router-dom';

const NavTab = () => {
  const navTab = [
    { name: 'Admin', link: '/admin' },
    { name: 'User', link: '/' },
  ];

  return (
    <div className={styles.wraper}>
      {navTab.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.link}
          className={styles.navtab}
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#1677e5',
                  borderBottom: '2.5px solid #1677e5',
                  borderRadius: '2px',
                }
              : {}
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default memo(NavTab);
