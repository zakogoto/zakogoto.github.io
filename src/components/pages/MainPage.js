import {useState} from 'react';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import CharSidePanel from '../charSidePanel/CharSidePanel';
import Modal from '../modal/Modal';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected =(id) => {
        setChar(id)
    }
    return (
        <>
            <RandomChar/>
            <section className="main">
              <CharList onCharSelected={onCharSelected}/>
              <div>
                <ErrorBoundary>
                  <CharSidePanel charId={selectedChar}/>
                </ErrorBoundary>
                <Modal modalType={'validationError'}/>
              </div>
            </section>
        </>
    );
};

export default MainPage;