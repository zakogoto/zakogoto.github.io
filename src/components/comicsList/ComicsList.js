import { Component } from 'react'

import './ComicsList.sass'

import xMen from '../../resources/img/x-men.png'
import ultimateXmen from '../../resources/img/x-men-cover.jpg'

class ComicsList extends Component {
    render() {
        const cardsData = [
            {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', imgSrc: ultimateXmen, alt: 'ultimate x-men', price: '9.99$' },
            {name:'X-Men: Days of Future Past', imgSrc: xMen, alt: 'x-men', price: 'NOT AVAILABLE' },
            {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', imgSrc: ultimateXmen, alt: 'ultimate x-men', price: '9.99$' },
            {name:'X-Men: Days of Future Past', imgSrc: xMen, alt: 'x-men', price: 'NOT AVAILABLE' },
            {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', imgSrc: ultimateXmen, alt: 'ultimate x-men', price: '9.99$' },
            {name:'X-Men: Days of Future Past', imgSrc: xMen, alt: 'x-men', price: 'NOT AVAILABLE' },
            {name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', imgSrc: ultimateXmen, alt: 'ultimate x-men', price: '9.99$' },
            {name:'X-Men: Days of Future Past', imgSrc: xMen, alt: 'x-men', price: 'NOT AVAILABLE' }
        ]
        const cards = cardsData.map(({name, alt, imgSrc, price})=> {
            return(
                <li className="comics-list__card">
                    <div className="comics-list__img">
                        <img className="comics-list__img" src={imgSrc} alt={alt} />
                    </div>
                    <div className="comics-list__title">{name}</div>
                    <div className="comics-list__price">{price}</div>
                </li>
            )
        })
        return(
            <section className='comics-list'>
                <ul className="comics-list__wrap">
                    {cards}
                </ul>
                <button className="btn btn_red btn_long btn_main">LOAD MORE</button>
            </section>
        )
    }
}

export default ComicsList;