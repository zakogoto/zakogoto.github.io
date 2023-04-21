import { useState, useEffect, useRef } from 'react'
import useMarvelServices from '../../services/MarvelServices';
import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import { Link } from 'react-router-dom';


import './ComicsList.sass'

const ComicsList = (props) => {
    
    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);
   
    const {loading, error, getAllComics} = useMarvelServices(true);
    
    useEffect(()=> {
        onRequest(offset, true)
    }, [])


    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
        .then(onComicsListLoaded);
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;

        if(newComicsList.length < 8) {
            ended = true;
        }
            setComicsList(comicsList => [...comicsList, ...newComicsList]);
            setNewItemLoading(false);
            setOffset(offset => offset + 8);
            setComicsEnded(ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char-list__card_selected'));
        itemRefs.current[id].classList.add('char-list__card_selected');
        itemRefs.current[id].focus();
    }

    const cards = comicsList.map((comic, i)=> {
        let imgStyle = {'objectFit' : 'cover'}
        if (comic.thumbnail ==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'сontain'};
        }
        // } else if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') {
        //     imgStyle = {'objectFit' : 'contain'};
        // }
        return(
            <Link
                to={`/comics/${comic.id}`}
                ref={el => itemRefs.current[i] = el}
                tabIndex={0}
                key={comic.id}
                className="comics-list__card">
                <div className="comics-list__img">
                    <img className="comics-list__img" src={comic.thumbnail} alt={comic.title} style={imgStyle} />
                </div>
                <div className="comics-list__title">{comic.title}</div>
                <div className="comics-list__price">{comic.price}$</div>
            </Link>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return(
        <section className='comics-list'>
            {errorMessage}
            {spinner}
            <ul className="comics-list__wrap">
                {cards}
            </ul>
            <button 
                className="btn btn_red btn_long btn_main"
                style={{display: comicsEnded? 'none' : 'block'}}
                disabled={newItemLoading}
                onClick={() => onRequest(offset)} 
            >LOAD MORE</button>
        </section>
    )
}

export default ComicsList;