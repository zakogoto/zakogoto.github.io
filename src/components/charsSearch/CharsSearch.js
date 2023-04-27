import React, { useEffect, useState, useRef } from 'react';
import useMarvelServices from '../../services/MarvelServices';

import './charsSearch.sass'
import CharsSearchResult from './CharsSearchResult';
import { Link } from 'react-router-dom';

const CharsSearch = () => {
    const [charName, setCharName] = useState('')
    const [chars, setChar] = useState([])
    const [overlay, setOverlay] = useState(false)
    const ref = useRef()

    const {error, getAllCharactersByName, loading, clearError} = useMarvelServices();

    const onCharLoaded = (charName) => {
        setChar(charName)
        console.log(charName)
    }

    useEffect(()=> {
        updateChar(charName)
    }, [charName])
    
    const updateChar = (charName) => {

        if(!charName) return
        clearError();

        getAllCharactersByName(charName)
            .then(onCharLoaded)
    }

    const hideOverlay = () => {
        setOverlay(false)
        setCharName('')
        setChar([])
        ref.current.value = ''
    }

    return (
        <>
            { overlay ? <div className='overlay' onClick={hideOverlay}/> : null}
            <div className='search'>
                <form onFocus={()=> setOverlay(true)}>
                    <input 
                        ref={ref} 
                        autocomplete="off" 
                        defaultValue={''} 
                        onChange={(e) => setCharName(e.target.value)}
                        id={'CharName'} 
                        name={'charName'} 
                        placeholder={'Find a character by name:'}
                    />
                </form>
                {loading ? <h3 className='results__loading'>loading...</h3> : null}
                {chars.length > 0 && charName && !error && !loading ? 
                    <div className='results'>
                        {chars.map(char => 
                            <CharsSearchResult char={char} charName={charName}/>
                        )}
                    </div>
                    : null
                }
                {
                    chars.length === 0 && charName && !error && !loading ? 
                    <h3 className='results__loading'>The character was not found</h3>
                    : null
                }
            </div>
        </>
    );
};

export default CharsSearch;