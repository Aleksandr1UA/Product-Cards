import './AlertMessage.css';
import { useContext, useEffect, useState } from 'react';
import {Alert} from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';

function AlertMessage({messageObject}) {
    const {setAlertMessage} = useContext(ThemeContext);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setAlertMessage({text: ''}), 3000);
        return () => clearTimeout(timer);
    }, [messageObject]);

    return <div className={messageObject.text.length ? 'd-flex w-25 ml-5 mt-5 fixed-top' : 'd-none'}>
        <Alert show={show} variant={messageObject.variant || 'success'} >{messageObject.text}
            <button className={'close-btn'} onClick={() => setShow(false)}>X</button>
        </Alert>
    </div>
        
}   

export default AlertMessage;

