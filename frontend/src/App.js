import './App.css';
import './components/NewTimerDialog'
import Container from '@material-ui/core/Container';
import { Button } from '@equinor/eds-core-react'
import NewTimerDialog from './components/NewTimerDialog';

function App() {
  return (
    <div className="App">
      <Container>
        <NewTimerDialog/>
      </Container>
    </div>
  );
}

export default App;
