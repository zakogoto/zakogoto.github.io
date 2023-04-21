import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom/cjs/react-router-dom.min";
import {Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "../appHeader/AppHeader"
import ComicsInfo from "../comicsInfo/SingleComic"
import CharInfo from "../charInfo/CharInfo"
import { MainPage, ComicsPage, CharPage, SingleComicPage, Page404 } from "../pages";

const App = (props) => {
  // const appClass = page === 'char' ? ('bg-decoration') : null
  // const updatePage = (page) => {
  //   switch(page) {
  //     case 'charInfo':
  //       return(
  //         <>
  //           {/* <AppBanner/>
  //           <section className="comics">
  //             <CharInfo charId={selectedChar}/>
  //           </section> */}
  //         </>
  //       )
  //     case 'comics':
  //       return(
  //         <>
  //           {/* <AppBanner/>
  //           <section className="comics">
  //             <ComicsList onComicSelected={onComicSelected}/>
  //           </section> */}
  //         </>
  //       )
  //     case 'comicsItem':
  //       return(
  //         <>
  //           {/* <AppBanner/>
  //           <section className="comics">
  //             <ComicsInfo comicId={selectedComic}/>
  //           </section> */}
  //         </>

  //       )
  //       default:
  //         return (
  //           <>
  //             {/* <RandomChar/>
  //             <section className="main">
  //               <CharList onCharSelected={onCharSelected}/>
  //               <div>
  //                 <ErrorBoundary>
  //                   <CharSidePanel charId={selectedChar}/>
  //                 </ErrorBoundary>
  //                 <Modal modalType={'validationError'}/>
  //               </div>
  //             </section> */}
  //           </>
  //         );
  //   }
  // }

  return (
    <Router>
      <div className={'app'}>
      {/* <div className={`app ${appClass}`}> */}
        <Header/>
        {/* {updatePage(page)} */}
        <Routes>
          <Route path={'/'} element={<MainPage/>} />
          <Route path={'comics'} element={<ComicsPage/>} />
          <Route path={`comics/:comicId`} element={<SingleComicPage/>} />
          <Route path={`/char/id`} element={<CharPage/>} />
          <Route path={'*'} element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
