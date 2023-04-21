import React from 'react';
import ErrorMessage from '../UI/ErrorMessage';
import {Link} from 'react-router-dom'

const Page404 = () => {
    return (
        <div className='page-404'>
            <ErrorMessage/>
            <p style={{textAlign: 'center'}} >Page doesn't exist</p>
            <Link to={'..'} className='page-404__btn'>Back to main page</Link>
        </div>
    );
};

export default Page404;