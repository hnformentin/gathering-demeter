import React, {useState} from 'react';
import './App.css';
import './components/NewTimerDialog'
import { Button, Typography } from '@equinor/eds-core-react'
import NewTimerDialog from './components/NewTimerDialog';

function App() {
  const [showNewTimerDialog, setShowNewTimerDialog] = useState(false)

  const createNewTimer = () => {
    setShowNewTimerDialog(false)
  }

  return (
    <div className="App">
      <Typography variant="h3">Timers</Typography>
      <Button variant="outlined" color="primary" onClick={() => {setShowNewTimerDialog(true)}}>
        New Timer
      </Button>
      {showNewTimerDialog &&
        <NewTimerDialog
          visible={showNewTimerDialog}
          onCreate={createNewTimer}
          onCancel={() => {setShowNewTimerDialog(false)}}/>
      }
    </div>
  );
}

export default App;
