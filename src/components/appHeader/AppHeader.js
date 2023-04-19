import { Component } from 'react';

import './AppHeader.sass';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const BtnsData = [
            {name:'char', label:'Characters' },
            {name:'comics', label:'Comics' }
        ]
        const buttons = BtnsData.map((item, i) => {
            const divider = item.name === BtnsData[1].name ? (null) : (<div className="header__divider">/</div>) 
            const active = item.name === this.props.typeOfPage;
            const clazz = active ? ('header__toggler header__toggler_active') : ('header__toggler')
            return (
                <>
                <button 
                    key={i}
                    name={item.name} 
                    className={clazz}
                    data-toggle={item.name}
                    onClick={()=>this.props.togglePage(item.name)}>
                        {item.label} 
                    </button>
                {divider}
                </>
            )
        })
        return(
            <header className='header'>
                <h3><span>Marvel</span> information portal</h3>
                <div className="header__toggle">
                    {buttons}
                </div>
            </header>
        )
    }
}

export default Header;