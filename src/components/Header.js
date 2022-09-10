import {useContext} from 'react';
import { Navbar } from 'react-bootstrap';
import ProfileContext from '../context/ProfileContext';
import {Link} from 'react-router-dom';

function Header() {
    const {profile} = useContext(ProfileContext);

    return <header className={'bg-warning d-flex mb-3'}>
        <div className={'container d-flex align-items-center justify-content-between'}>
            <Navbar expand='lg'>
                <Link className={'navbar-brand'} to='/products'>Products</Link>
                <Link className={'navbar-brand'} to='/about-us'>About us</Link>
                <Link className={'navbar-brand'} to='/contacts'>Contacts</Link>
                <Link className={'navbar-brand'} to='/profile'>Profile</Link>
            </Navbar>
            <div><b>{profile.email}</b></div>
        </div>
    </header>
}

export default Header;