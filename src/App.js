import { Container} from 'react-bootstrap';
import './App.css';
import Products from './components/Products';

function App() {
  return <Container className='py-4'>    
              <Products />      
        </Container>
}

export default App;
