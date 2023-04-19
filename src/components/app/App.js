import { Component } from "react"

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChar: null,
      page: 'char'
    }
  }

  togglePage = (page) => {
    this.setState(({page}))
  }

  onCharSelected =(id) => {
    this.setState({
      selectedChar: id
    })
  }


  render() {
    const appClass = this.state.page === 'char' ? ('bg-decoration') : null
    const updatePage = (page) => {
      switch(page) {
        case 'charInfo':
          return(
            <>
              <AppBanner/>
              <section className="comics">
                <CharInfo charId={this.state.selectedChar}/>
              </section>
            </>
          )
        case 'comics':
          return(
            <>
              <AppBanner/>
              <section className="comics">
                <ComicsList/>
              </section>
            </>
          )
        case 'comicsItem':
          return(
            <>
              <AppBanner/>
              <section className="comics">
                <ComicsInfo/>
              </section>
            </>

          )
          default:
            return (
              <>
                <RandomChar/>
                <section className="main">
                  <CharList onCharSelected={this.onCharSelected}/>
                  <div>
                    <ErrorBoundary>
                      <CharSidePanel charId={this.state.selectedChar}/>
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
              <Header typeOfPage={this.state.page} togglePage={this.togglePage}/>
              {updatePage(this.state.page)}
            </div>
    )
  }
}

export default App;
