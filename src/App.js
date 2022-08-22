import { Container, Row } from 'react-bootstrap';
import './App.css';
import Products from './components/Products';

function App() {
  return <Container className='py-4'>
            <Row>
              <Products />
            </Row>
  </Container>
    

}

export default App;
