import { useState, useEffect } from 'react';
import useMarvelServices from '../../services/MarvelServices';
import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'

import './RandomChar.sass'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const  RandomChar = () => {

    const [char, setChar] = useState({});
    const {error, getCharacter, loading, clearError} = useMarvelServices();
    
    useEffect(()=> {
        updateChar()
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }
    

    const updateChar = () => {
        clearError()
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded);
    }

 
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
    return(
        <TransitionGroup component={null}>
            <section className='random-char'>
                    {errorMessage}
                    {spinner}
                    {content}
                <div className="random-char__new">
                    <p className="random-char__text">
                        Random character for today!
                        Do you want to get to know him better?
                        <br /> <br />
                        Or choose another one
                    </p>
                    <button onClick={updateChar} className='btn btn_red btn_dark-bg'>TRY IT</button>
                </div>
            </section>
        </TransitionGroup>
    )
}

const View = ({char}) => {
    let {name, description, thumbnail, homepage, wiki} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    
    return (
        <CSSTransition key={name} timeout={500} in classNames={'random-char__about'}>
            <div className="random-char__about">
                <div  className="random-char__img">
                    <img src={thumbnail} alt={name} style={imgStyle}/>
                </div>
                <div className="random-char__info">
                    <div className="random-char__name">{name}</div>
                    <p className="random-char__descr">
                        {description}
                    </p>
                    <div className="random-char__btns">
                        <a href={homepage} className='btn btn_red' rel="noreferrer" target='_blank'>HOMEPAGE</a>
                        <a href={wiki} className='btn btn_gray' rel="noreferrer" target='_blank'>WIKI</a>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default RandomChar;