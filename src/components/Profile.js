import './Profile.css';
import { Button, Form, Row, Col } from "react-bootstrap";
import { useRef, useContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import ChangeTheme from './ChangeTheme';
import ThemeContext from '../context/ThemeContext';

function Profile({setProfile}) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [userEmail, setUserEmail] = useLocalStorage('Email', '');
    const [userPassword, setUserPassword] = useLocalStorage('Password', '');
    const [checked, setChecked] = useLocalStorage('Checkbox', false);
    const {setAlertMessage} = useContext(ThemeContext);

    function saveProfile() {
        let newProfile = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        setProfile(newProfile);
        emailRef.current.value = '';
        passwordRef.current.value = '';
        setAlertMessage({text: 'Welcome, ' + newProfile.email});
    }

    return <div className={'d-flex justify-content-end'}>
        <Col>
            <ChangeTheme />
        </Col>
        <Row>
            <Col>
                <Form.Control type={'email'} ref={emailRef}
                            id="validationCustom01"
                            size={'sm'}
                            placeholder={'Enter Email'} required
                            value={userEmail}
                            onChange={e => setUserEmail(e.target.value)}
                            className={'profile-form-email'}></Form.Control>
            </Col>
            <Col>
                <Form.Control type={'password'} 
                            size={'sm'}
                            ref={passwordRef}
                            placeholder={'Enter Password'} required
                            value={userPassword}
                            onChange={e => setUserPassword(e.target.value)}
                            className={'profile-form-password'} formNoValidate></Form.Control>
                <Form.Check type={'checkbox'}
                            value={checked ? (userEmail && userPassword) : ''}
                            onChange={e => setChecked(e.target.value)}
                            className={'text-align-end'}
                            label={'Remember me'} />
            </Col>
            <Col>
                <Button type={'submit'} size={'sm'} className={'primary profile-form-submit'} onClick={saveProfile}>Sign In</Button>
            </Col>
        </Row>
    </div>
}

export default Profile;