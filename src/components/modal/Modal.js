import './Modal.sass'

export default function Modal({modalType}) {
    
    const modalUpdate =() => {
        switch (modalType) {
            case 'validationError':
                return (
                    <h3 className='modal__error'>This field is required</h3>
                )
            case'charFounded':
                return (
                    <div className='modal__success'>
                        <h3 className='modal__success-text'>There is! Visit page?</h3>
                        <button className='btn btn_gray'>TO PAGE</button>
                    </div>
                )
            case'charNotFounded':
                return(
                    <h3 className='modal__error'>
                        The character was not found. Check the name and try again
                    </h3>
                )
            default:
                return null
        }
    }

    return(
        <div className='modal'>
                <div className='modal__title'>Or find a character by name:</div>
            <form className='modal__form'>
                <input id='search' name='search' type="text" placeholder='Enter name'/>
                <button className="btn btn_red">FIND</button>
            </form>
            {modalUpdate()}
        </div>
    )
}