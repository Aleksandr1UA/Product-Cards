import './AlertMessage.css';
import { useContext, useState } from 'react';
import {Alert} from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';

function AlertMessage() {
    const {alertMessage} = useContext(ThemeContext);
    const [show, setShow] = useState(true);

    return <Alert show={show} className={alertMessage ? 'd-flex w-25 ml-5 mt-5 fixed-top' : 'd-none'} >{alertMessage}
        <button className={'close-btn'} onClick={() => setShow(false)}>X</button>
    </Alert>;   
}   

export default AlertMessage;

