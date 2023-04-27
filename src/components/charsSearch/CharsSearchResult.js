import React from 'react';
import { Link } from 'react-router-dom';

const CharsSearchResult = ({char, charName}) => {
    let {name, thumbnail, id} = char;
    const visibleName = <p><span>{name.slice(0, charName.length)}</span>{name.slice(charName.length)}</p>
    return (
        <div className='results__item'>
            <img className='results__img' src={thumbnail} alt={name} />
            <Link to={`/char/${id}`}>{visibleName}</Link>
        </div>
    );
};

export default CharsSearchResult;