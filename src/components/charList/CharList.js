import { Component } from 'react'
import PropTypes from 'prop-types'; 

import Spinner from "../UI/Spinner"
import ErrorMessage from '../UI/ErrorMessage'
import MarvelServices from '../../services/MarvelServices';
import './CharList.sass'

export default class CharList extends Component {
    
    state = {
        charList: [],
        loading: true,
        newItemLoading: false,
        error: false,
        offset: 210,
        charEnded: false
    }

    MarvelService = new MarvelServices();

    componentDidMount() {
        this.onRequest()
    }
    
    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.MarvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }


    onCharListLoaded = (newCharList) => {
        let ended = false;

        if(newCharList.length < 9) {
            ended = true;
        }
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char-list__card_selected'));
        this.itemRefs[id].classList.add('char-list__card_selected');
        this.itemRefs[id].focus();
    }

    renderItems (arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'}
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            } else if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') {
                imgStyle = {'objectFit' : 'contain'};
            }
            return(
                <li className="char-list__card"
                    ref={this.setRef}
                    tabIndex={0}
                    key={item.id}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            e.preventDefault()
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}
                    onClick={() => {
                        this.props.onCharSelected(item.id)
                        this.focusOnItem(i);
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


    render() {

        const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;
        
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <section className='char-list'>
                {errorMessage}
                {spinner}
                {content}
                <button 
                style={{display: charEnded? 'none' : 'block'}}
                    disabled={newItemLoading}
                    className="btn btn_red btn_long btn_main"
                    onClick={() => this.onRequest(offset)} 
                >
                    LOAD MORE
                </button>
            </section>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func
}