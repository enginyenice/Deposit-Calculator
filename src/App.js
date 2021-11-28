import './App.css';
// import ProjectNavbar from './components/ProjectNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import DepositCalculator from './components/DepositCalculator';
function App() {
  return (
    <>
    {/* <Container fluid className='mb-2' >
    <ProjectNavbar></ProjectNavbar>
    </Container> */}
    <Container className="mt-4">
      {/* <ProjectAlert></ProjectAlert> */}
      <DepositCalculator></DepositCalculator>
    </Container>
    </>
  );
}

export default App;
