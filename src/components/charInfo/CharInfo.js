import { useEffect, useState } from 'react'
import './CharInfo.sass'


import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import useMarvelServices from '../../services/MarvelServices';

export default function CharInfo(props) {

    // state = {
    //     // char: null,
    //     loading: false,
    //     error: false
    // }

    const [char, setChar] = useState(null);

    const {error, loading, getCharacter} = useMarvelServices();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    useEffect(() => {
            updateChar();
    }, [props.CharId])

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        getCharacter(charId)
            .then(onCharLoaded(charId));
    }

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