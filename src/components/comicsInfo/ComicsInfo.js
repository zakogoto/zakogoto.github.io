import './ComicsInfo.sass'

import comicsCover from '../../resources/img/x-men.png'

export default function ComicsInfo() {
    return(
        <section className='comics-info'>
            <img src={comicsCover} alt="X-Men: Days of Future Past" className="comics-info__img" />
            <div className="comics-info__text-block">
                <h2 className="comics-info__title">X-Men: Days of Future Past</h2>
                <p className="comics-info__descr">
                    Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                </p>
                <p className="comics-info__amount-page">144 pages</p>
                <p className="comics-info__language">Language: en-us</p>
                <div className="comics-info__price">9.99$</div>
            </div>
            <button className='comics-info__btn'>Back to all</button>
        </section>
    )
}