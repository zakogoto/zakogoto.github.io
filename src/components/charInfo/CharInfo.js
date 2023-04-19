import { Component } from 'react'
import './CharInfo.sass'


import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import MarvelServices from '../../services/MarvelServices';

export default class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    MarvelService = new MarvelServices();

    onCharListLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return(
            <div className='char-info'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail} = char;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <>
            <img src={thumbnail} alt={name} className="char-info__img" style={imgStyle}/>
            <div className="char-info__text-block">
                <h3 className="char-info__name">{name}</h3>
                <p className="char-info__descr">{description}</p>
            </div>
        </> 
    )
}