import { Component } from 'react';
import PropTypes from 'prop-types'; 

import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import MarvelServices from '../../services/MarvelServices';
import Skeleton from '../skeleton/Skeleton';

import './CharSidePanel.sass'

export default class CharSidePanel extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    MarvelService = new MarvelServices();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.MarvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }


    render(){
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;
        return(
            <section className='char-side-panel'>
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </section>
        )
    }
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
                        <li key={i} className="char-side-panel__comics-item">{item.name}</li>
                    )
                })}
        </ul>
        </>
    )
}

CharSidePanel.propTypes = {
    charId: PropTypes.number,
}