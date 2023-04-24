import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

import {Link} from 'react-router-dom'

import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import useMarvelServices from '../../services/MarvelServices';
import Skeleton from '../skeleton/Skeleton';

import './CharSidePanel.sass'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const CharSidePanel = (props) => {

    const [char, setChar] = useState(null)

    const {error, getCharacter, loading, clearError} = useMarvelServices();

    useEffect(() => {
        updateChar()
    }, [props.charId])

    useEffect(() => {
        updateChar()
    }, [])

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        
        clearError()
        getCharacter(charId)
            .then(onCharLoaded);
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const skeleton = char || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    return(
        <SwitchTransition component={null}>
            <CSSTransition key={props.charId} timeout={600} in classNames={'char-side-panel'} unmountOnExit>
                <section className='char-side-panel'>
                    {skeleton}
                    {errorMessage}
                    {spinner}
                    {content}
                </section>
            </CSSTransition>
        </SwitchTransition>
    )
}

const View = ({char}) => {
    
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    let imgStyle = {'objectFit' : 'cover'};
    
    if (
        thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
        || thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
        ) {
            imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <>
                <div className="char-side-panel__wrap">
                <div  className="char-side-panel__img">
                    <img src={thumbnail} alt={name} style={imgStyle} />
                </div>
                <div className="char-side-panel__info">
                    <div className="random-char__name">{name}</div>
                    <div className="char-side-panel__btns">
                        <a href={homepage} rel="noreferrer" target='_blank' className='btn btn_red'>HOMEPAGE</a>
                        <a href={wiki} rel="noreferrer" target='_blank' className='btn btn_gray'>WIKI</a>
                    </div>
                </div>
                </div>
                <p className="random-char__descr char-side-panel__descr">{description}</p>
                <div className="char-side-panel__comics-title">Comics:</div>
                <ul className="char-side-panel__comics-list">
                    {comics.length > 0 ? null : 'There is no comics with this character'}
                    {comics.map((item, i) =>{ 
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char-side-panel__comics-item"><Link to={`comics/${item.resourceURI.substr(43)}`} className='char-side__link'>{item.name}</Link></li>
                        )
                    })}
                </ul>
        </>
    )
}

CharSidePanel.propTypes = {
    charId: PropTypes.number,
}

export default CharSidePanel;