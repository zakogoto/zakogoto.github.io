import { lazy, Suspense } from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from "../appHeader/AppHeader"
import CharLayout from "../singlePages/CharLayout";
import ComicLayout from "../singlePages/ComicLayout";

const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SinglePage = lazy(() => import('../pages/SinglePage'))
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
              <Route path={`comics/:id`} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={3}><SinglePage dataType={'comic'} Component={ComicLayout}/></CSSTransition>} />
              <Route path={`/char/:id`} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={4}><SinglePage dataType={'char'} Component={CharLayout}/></CSSTransition>} />
              <Route path={'*'} element={<CSSTransition classNames={'page'} timeout={600} in={true} key={5}><Page404 /></CSSTransition>} />
            </Routes>
          </TransitionGroup>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;
