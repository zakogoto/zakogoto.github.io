import { useState } from "react"

import Header from "../appHeader/AppHeader"
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import ComicsList from "../comicsList/ComicsList"
import CharSidePanel from "../charSidePanel/CharSidePanel"
import AppBanner from "../appBanner/AppBanner"
import ComicsInfo from "../comicsInfo/ComicsInfo"
import CharInfo from "../charInfo/CharInfo"
import Modal from "../modal/Modal"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"

const App = (props) => {

  const [page, setPage] = useState('char');
  const [selectedChar, setChar] = useState(null);
  const [selectedComic, setComic] = useState(null);

  const togglePage = (page) => {
    setPage(page)
  }

  const onCharSelected =(id) => {
    setChar(id)
  }

  const onComicSelected = (id) => {
    setComic(id)
  }

  const appClass = page === 'char' ? ('bg-decoration') : null
  const updatePage = (page) => {
    switch(page) {
      case 'charInfo':
        return(
          <>
            <AppBanner/>
            <section className="comics">
              <CharInfo charId={selectedChar}/>
            </section>
          </>
        )
      case 'comics':
        return(
          <>
            <AppBanner/>
            <section className="comics">
              <ComicsList onComicSelected={onComicSelected}/>
            </section>
          </>
        )
      case 'comicsItem':
        return(
          <>
            <AppBanner/>
            <section className="comics">
              <ComicsInfo comicId={selectedComic}/>
            </section>
          </>

        )
        default:
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
    }
  }

  return (
    <div className={`app ${appClass}`}>
            <Header typeOfPage={page} togglePage={togglePage}/>
            {updatePage(page)}
          </div>
  )
}

export default App;
