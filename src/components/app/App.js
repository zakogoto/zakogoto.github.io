import { lazy, Suspense } from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from "../appHeader/AppHeader"

const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const CharPage = lazy(() => import('../pages/CharPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
const Page404 = lazy(() => import('../pages/404'))

const App = () => {
  return (
    <Router>
      <div className={'app'}>
        <Header/>
        <Suspense>
          <TransitionGroup>
            <Routes>
              <Route path={'/'} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={1}><MainPage/></CSSTransition>} />
              <Route path={'comics'} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={2}><ComicsPage/></CSSTransition>} />
              <Route path={`comics/:comicId`} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={3}><SingleComicPage/></CSSTransition>} />
              <Route path={`/char/id`} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={4}><CharPage/></CSSTransition>} />
              <Route path={'*'} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={5}><Page404 /></CSSTransition>} />
            </Routes>
          </TransitionGroup>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;
