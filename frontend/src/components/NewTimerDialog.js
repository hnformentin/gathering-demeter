import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { Button, Slider, TextField } from '@equinor/eds-core-react'

export default function NewTimerDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New Timer
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen={true} maxWidth="lg" aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Timer</DialogTitle>
        <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="textfield-normal"
              placeholder="Name of timer"
              label="Name"
            />
          </Grid>
          <Grid item xs={12}>
            <div>
              <span id="timer-slider">Timer duration (m)</span>
              <Slider value={5} min={0} max={120} ariaLabelledby="timer-slider" />
            </div>
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create Timer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
