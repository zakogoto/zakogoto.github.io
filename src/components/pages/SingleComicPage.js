import React from 'react';
import AppBanner from '../appBanner/AppBanner';
import SingleComic from '../comicsInfo/SingleComic';
import {useParams} from 'react-router-dom'

const SingleComicPage = () => {

    const {comicId} = useParams()
    return (
        <>
           <AppBanner/>
            <section className="comics">
               <SingleComic comicId={comicId}/>
            </section> 
        </>
    );
};

export default SingleComicPage