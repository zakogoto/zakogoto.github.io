import { Link } from 'react-router-dom';

import './singlePage.sass'
import { Helmet } from 'react-helmet';

export default function CharLayout({data}) {

    const {name, description, thumbnail} = data;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <>
            <Helmet>
                <meta
                name="description"
                content={`${name} information`}
                />
                <title>{name}</title>
            </Helmet>
            <div className='single-page'>
                <img src={thumbnail} alt={name} className="single-page__img-char" style={imgStyle}/>
                <div className="single-page__text-block">
                    <h3 className="single-page__title">{name}</h3>
                    <p className="single-page__descr">{description}</p>
                </div>
                <Link to={'/'} className='single-page__btn'>Back to main</Link>
            </div> 
        </>
    )
}