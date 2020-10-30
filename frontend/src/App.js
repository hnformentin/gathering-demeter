import React, {useEffect, useState} from 'react';
import './App.css';
import './components/NewTimerDialog'
import { Button, Typography } from '@equinor/eds-core-react'
import NewTimerDialog from './components/NewTimerDialog';

function App() {
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [timers, setTimers] = useState([])
  const [showNewTimerDialog, setShowNewTimerDialog] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const createNewTimer = (name, duration) => {
    setTimers([...timers, {
      name: name,
      endTime: new Date(Date.now() + duration*60000)
    }]);
    setShowNewTimerDialog(false)
  }

  return (
    <div className="App">
      <Typography variant="h3">Timers</Typography>
      <Button variant="outlined" color="primary" onClick={() => {setShowNewTimerDialog(true)}}>
        New Timer
      </Button>

      {timers.map((timer) => {
        return <Typography key={timer.name} variant="h6">{timer.name}: Remaining time {(timer.endTime - currentTime)/1000}</Typography>
      })}

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
