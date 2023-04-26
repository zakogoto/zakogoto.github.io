import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMarvelServices from '../../services/MarvelServices';
import AppBanner from '../appBanner/AppBanner';
import ErrorMessage from '../UI/ErrorMessage';
import Spinner from '../UI/Spinner';

const SinglePage = ({Component, dataType}) => {

    const [data, setData] = useState(null)
    const {id} = useParams()
    const {error, getCharacter, getComic, loading, clearError} = useMarvelServices();

    useEffect(() => {
        updateData()
    }, [])

    const updateData = () => {
        if (!id) {
            return;
        }
        clearError();

        switch(dataType) {
            case "comic":
                getComic(id).then(onDataLoaded);
                console.log(id);
                break;
            case 'char':
                getCharacter(id).then(onDataLoaded);
                console.log(id);
                break;
        }
    }

    const onDataLoaded = (data) => {
        setData(data)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;
    const clazz = dataType === 'comic' ? 'comics' : 'chars'
    return (
        <>
            <AppBanner/>
            <section className={clazz}>
                    {errorMessage}
                    {spinner}
                    {content}
            </section>
        </>
    );
};

export default SinglePage;