import { useState } from 'react';
import { Helmet } from 'react-helmet';
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {

    return (
        <>
          <Helmet>
            <meta
              name="description"
              content="Page with list of our comics"
            />
            <title>Marvel comics page</title>
          </Helmet>
           <AppBanner/>
            <section className="comics">
              <ComicsList />
            </section> 
        </>
    );
};

export default ComicsPage;