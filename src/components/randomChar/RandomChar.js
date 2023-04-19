import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices';
import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'

import './RandomChar.sass'

class RandomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }
    
    componentDidMount() {
        this.updateChar();
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
    
    MarvelService = new MarvelServices();

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.MarvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    render() {
        
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
        return(
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
                    <button onClick={this.updateChar} className='btn btn_red btn_dark-bg'>TRY IT</button>
                </div>
            </section>
        )
    }
}

const View = ({char}) => {
    let {name, description, thumbnail, homepage, wiki} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    
    return (
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
    )
}

export default RandomChar;