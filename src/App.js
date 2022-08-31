import { Container} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Products from './components/Products';
import Profile from './components/Profile';
import AlertMessage from './components/AlertMessage';

function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({email: '', password: ''});
  const [alertMessage, setAlertMessage] = useState('');

  return <>
    <div className={theme}>
      <Container className='py-4'>
      <ThemeContext.Provider value={{theme, setTheme, alertMessage, setAlertMessage}}>
        <Profile setProfile={setProfile} profile={profile} />
          <Products />
          <AlertMessage />  
        </ThemeContext.Provider>    
      </Container>
    </div>
  </>
}

export default App;
