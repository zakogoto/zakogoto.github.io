import {useState} from 'react';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import CharSidePanel from '../charSidePanel/CharSidePanel';
import Modal from '../modal/Modal';
import { Helmet } from 'react-helmet';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected =(id) => {
        setChar(id)
    }
    return (
        <>
          <Helmet>
            <meta
              name="description"
              content="Marvel information portal"
            />
            <title>Marvel information portal</title>
          </Helmet>
          <RandomChar/>
          <section className="main">
            <CharList onCharSelected={onCharSelected}/>
            <div>
              <ErrorBoundary>
                <CharSidePanel charId={selectedChar}/>
              </ErrorBoundary>
              <ErrorBoundary>
                <Modal/>
              </ErrorBoundary>
            </div>
          </section>
        </>
    );
};

export default MainPage;