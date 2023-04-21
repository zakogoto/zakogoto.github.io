import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'; 

import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import useMarvelServices from '../../services/MarvelServices';
import './CharList.sass'

function CharList(props) {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
   
    const {loading , error, getAllCharacters} = useMarvelServices();
    
    useEffect(()=> {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllCharacters(offset)
        .then(onCharListLoaded);
    }
    
    const onCharListLoaded = (newCharList) => {
        let ended = false;

        if(newCharList.length < 9) {
            ended = true;
        }
            setCharList(charList => [...charList, ...newCharList]);
            setNewItemLoading(false);
            setOffset(offset => offset + 9);
            setCharEnded(ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char-list__card_selected'));
        itemRefs.current[id].classList.add('char-list__card_selected');
        itemRefs.current[id].focus();
    }

    function renderItems (arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'}
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            } else if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') {
                imgStyle = {'objectFit' : 'contain'};
            }
            return(
                <li className="char-list__card"
                    ref={el => itemRefs.current[i] = el}
                    tabIndex={0}
                    key={item.id}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            e.preventDefault()
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                    onClick={() => {
                        props.onCharSelected(item.id)
                        focusOnItem(i);
                    }}    
                >
                    <div className="char-list__img">
                        <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    </div>
                    <div className="char-list__name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className="char-list__wrap">
                {items}
            </ul>
        )
        
    }
        
    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    console.log('Render')

    return (
        <section className='char-list bg-decoration'>
            {errorMessage}
            {spinner}
            {items}
            <button 
                className="btn btn_red btn_long btn_main"
                style={{display: charEnded? 'none' : 'block'}}
                disabled={newItemLoading}
                onClick={() => onRequest(offset)} 
            >
                LOAD MORE
            </button>
        </section>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func
}

export default CharList;