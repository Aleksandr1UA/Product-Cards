import { Container} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import ProfileContext from './context/ProfileContext';
import Products from './components/Products';
import Profile from './components/Profile';
import AlertMessage from './components/AlertMessage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/static/AboutUs';
import Contacts from './components/static/Contacts';
import Header from './components/Header';
import NotFoundPage from './components/static/NotFoundPage';
import SingleProduct from './components/SingleProduct';


function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({email: '', password: ''});
  const [alertMessage, setAlertMessage] = useState({text: ''});

  return <>
    <div className={theme}>
      <Container className='py-4'>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <ThemeContext.Provider value={{theme, setTheme, setAlertMessage}}>
        <Profile setProfile={setProfile} profile={profile} />
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/profile' element={<Profile setProfile={setProfile} profile={profile} />} />
            <Route path='/products' element={<Products />}>  
            </Route>
            <Route path='/products/:productId' element={<SingleProduct /> }/>
            <Route path='*' element={<NotFoundPage />} /> 
          </Routes>
          <AlertMessage messageObject={alertMessage} />
        </BrowserRouter>
        </ThemeContext.Provider> 
        </ProfileContext.Provider>    
      </Container>
    </div>
  </>
}

export default App;
