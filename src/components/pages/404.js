import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import React from 'react';
import ErrorMessage from '../UI/ErrorMessage';

const Page404 = () => {
    return (
        <>
            <Helmet>
                <meta
                name="description"
                content="Page doesn't exist"
                />
                <title>Page 404</title>
            </Helmet>
            <div className='page-404'>
                <ErrorMessage/>
                <p style={{textAlign: 'center'}} >Page doesn't exist</p>
                <Link to={'..'} className='page-404__btn'>Back to main page</Link>
            </div>
        </>
    );
};

export default Page404;