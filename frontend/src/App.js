import React, {useEffect, useState} from 'react';
import './App.css';
import './components/NewTimerDialog'
import { Button, Card, Typography } from '@equinor/eds-core-react'
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

  function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
}

  return (
    <div className="App">
      <Typography variant="h3">Timers</Typography>
      <Button variant="outlined" color="primary" onClick={() => {setShowNewTimerDialog(true)}}>
        New Timer
      </Button>

      {timers.map((timer) => {
        return <Card variant="info">
                <Card.CardHeader>
                  <Card.CardHeaderTitle>
                    <Typography variant="h4">{timer.name}</Typography>
                    <Typography variant="body_short">{sec2time((timer.endTime - currentTime)/1000)}</Typography>
                  </Card.CardHeaderTitle>
                </Card.CardHeader>
              </Card>
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
