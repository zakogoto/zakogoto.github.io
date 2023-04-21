import { useState } from 'react';

import './AppHeader.sass';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className='header'>
            <Link to={'/'} className={'header__main'}>
                <span>Marvel</span> information portal
            </Link>
            <div className="header__toggle">
                {/* {buttons} */}
                <NavLink end to={'/'} className={({isActive}) => isActive ? 'header__toggler header__toggler_active': 'header__toggler'}>Char</NavLink>
                <div className="header__divider">/</div>
                <NavLink to={'/comics'} className={({isActive}) => isActive ? 'header__toggler header__toggler_active': 'header__toggler'}>Comics</NavLink>
            </div>
        </header>
    )
}

export default Header;