import { useState } from 'react';
import { Link } from 'react-router-dom';
import  { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik";
import * as Yup from 'yup';
import useMarvelServices from '../../services/MarvelServices';
import './charSearch.sass'
import ErrorMessage from '../UI/ErrorMessage';

export default function CharSearch() {

    const [char, setChar] = useState(null);
    const {error, getCharacterByName, loading, clearError} = useMarvelServices();

    const onCharLoaded = (charName) => {
        setChar(charName)
        console.log(charName)
    }
    
    const updateChar = (charName) => {
        clearError();

        getCharacterByName(charName)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage style={{marginTop: 10}} /> : null 
   
    const result = !char ? null : char.id ?
        <div className='modal__success'>
            <h3 className='modal__success-text'>There is {char.name}! Visit page?</h3>
            <Link to={`/char/${char.id}`} className='btn btn_gray' disabled={loading}>TO PAGE</Link>
        </div>  
        :
        <div className='modal__error'>
            The character was not found. Check the name and try again
        </div>

    return(
        <div className='modal'>
            <Formik
                initialValues={{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit = { ({charName}) => {
                    updateChar(charName)
                }} >
                <Form onChange={e => !e.target.value ? setChar(null) : null}>
                    <label htmlFor='charName' className='modal__title'>Or find a character by name:</label>
                    <div className='modal__form'>
                        <Field id='charName' type='text' name='charName' placeholder='Enter name'/>
                        <button type='submit' className="btn btn_red">FIND</button>
                    </div>
                   <FormikErrorMessage className='modal__error' name='charName' component={'h3'} />
                </Form>
            </Formik>
            {errorMessage}
            {result}
        </div>
    )
}