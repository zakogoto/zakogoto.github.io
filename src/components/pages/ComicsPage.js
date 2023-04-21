import { useState } from 'react';
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {

    const [selectedComic, setComic] = useState(null);

    const onComicSelected = (id) => {
      setComic(id)
    }
    return (
        <>
           <AppBanner/>
            <section className="comics">
              <ComicsList onComicSelected={onComicSelected}/>
            </section> 
        </>
    );
};

export default ComicsPage;