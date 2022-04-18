import React from 'react';
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>DS Labs</h2>
        
        <nav className={classes.header__content__nav}> 
            <ul> 
                <li>
                    <a href='/'>Programme</a>    
                </li>
                <li>
                    <a href='/'>Why DS Labs?</a>    
                </li>
                <li>
                    <a href='/'>Mystery Link!</a>    
                </li>
            </ul>    
            <button>APPLY</button>
        </nav>
        <div className={classes.header__content__toggle}> 
            <BiMenuAltRight />
        </div>
        </div>
    </header>
  )
}

export default Header