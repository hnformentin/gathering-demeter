import React, {useState} from 'react';
import { Button, Dialog, Scrim, Slider, TextField } from '@equinor/eds-core-react';

const { Actions, Title, CustomContent } = Dialog

export default function NewTimerDialog({onCreate, onCancel}) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(5);

  return (
    <Scrim>
      <Dialog>
        <CustomContent>
          <Title>Create New Timer</Title>
          <TextField
            id="textfield-normal"
            placeholder="Name of timer"
            label="Name"
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
          <div>
            <span id="timer-slider">Timer duration (m)</span>
            <Slider value={5} min={0} max={120} onChange={(event) => {setDuration(event.target.value)}} ariaLabelledby="timer-slider" />
          </div>
        </CustomContent>
        <Actions>
          <Button
            variant="ghost"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button onClick={() => onCreate(name, duration)}>Create Timer</Button>
        </Actions>
      </Dialog>
    </Scrim>
  );
}
