import { useEffect, useState } from 'react'

import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import useMarvelServices from '../../services/MarvelServices';

import './ComicsInfo.sass'

// import comicsCover from '../../resources/img/x-men.png'


export default function ComicsInfo(props) {
    const [comic, setComic] = useState(null);

    const {error, loading, getComic} = useMarvelServices();

    const onComicLoaded = (comics) => {
        setComic(comics);
    }

    useEffect(() => {
        updateComic();
    }, [props.comicId])

    const updateComic = () => {
        const {comicId} = props;
        if (!comicId) {
            return;
        }
        getComic(comicId)
            .then(onComicLoaded(comicId));
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return(
        <div className='comics-info'>
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({comic}) => {
    const {title, description, thumbnail, pages, price} = comic;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <>
            <img src={thumbnail} alt={title} className="comics-info__img" style={imgStyle}/>
            <div className="comics-info__text-block">
                <h2 className="comics-info__title">{title}</h2>
                <p className="comics-info__descr">
                    {description}
                </p>
                <p className="comics-info__amount-page">{pages} pages</p>
                <p className="comics-info__language">Language: en-us</p>
                <div className="comics-info__price">{price}$</div>
            </div>
            <button className='comics-info__btn'>Back to all</button>
        </>
    )
}