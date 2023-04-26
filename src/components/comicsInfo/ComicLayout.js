import {Link} from 'react-router-dom'

import './singlePage.sass'

export default function ComicLayout({data}) {
    const {title, description, thumbnail, pages, price, language} = data;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <div className='single-page'>
            <img src={thumbnail} alt={title} className="single-page__img" style={imgStyle}/>
            <div className="single-page__text-block">
                <h2 className="single-page__title">{title}</h2>
                <p className="single-page__descr">
                    {description}
                </p>
                <p className="single-page__amount-page">{pages} pages</p>
                <p className="single-page__language">Language: {language}</p>
                <div className="single-page__price">{price}$</div>
            </div>
            <Link to={'/comics'} className='single-page__btn'>Back to all</Link>
        </div>
    )
}