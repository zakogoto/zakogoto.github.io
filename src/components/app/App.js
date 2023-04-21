import { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom/cjs/react-router-dom.min";
import {Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "../appHeader/AppHeader"
// import ComicsInfo from "../comicsInfo/SingleComic"
// import CharInfo from "../charInfo/CharInfo"
// import { MainPage, ComicsPage, CharPage, SingleComicPage, Page404 } from "../pages";

const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const CharPage = lazy(() => import('../pages/CharPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
const Page404 = lazy(() => import('../pages/404'))

const App = () => {
  // const appClass = page === 'char' ? ('bg-decoration') : null
  return (
    <Router>
      <div className={'app'}>
        <Header/>
        <Suspense>
          <Routes>
            <Route path={'/'} element={<MainPage/>} />
            <Route path={'comics'} element={<ComicsPage/>} />
            <Route path={`comics/:comicId`} element={<SingleComicPage/>} />
            <Route path={`/char/id`} element={<CharPage/>} />
            <Route path={'*'} element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;
