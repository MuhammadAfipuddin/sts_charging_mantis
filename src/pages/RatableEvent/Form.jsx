import * as React from 'react';
import { TextField, Grid, Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';
// import DropDownMenu from 'material-ui/DropDownMenu';

export default function EventForm() {
  const [formValues, setFormValues] = React.useState({
    eventName: '',
    eventStorage: '',
    eventCode: '',
    displayName: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const renderTextField = (id, label, required = false) => (
    <Grid container alignItems="center" spacing={2} mb={2}>
      <Grid item xs={4}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </Grid>
      <Grid item xs={8}>
        <TextField margin="dense" id={id} name={id} value={formValues[id]} onChange={handleChange} fullWidth required={required} />
      </Grid>
    </Grid>
  );

  const renderSelectField = (id, label, options, required = false) => (
    <Grid container alignItems="center" spacing={2} mb={2}>
      <Grid item xs={4}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <Select id={id} name={id} value={formValues[id]} onChange={handleChange} required={required}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );

  const handleCancel = () => {
    setFormValues({
      eventName: '',
      eventStorage: '',
      eventCode: '',
      displayName: '',
      remarks: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formValues);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
      {renderTextField('eventName', 'Event Name', true)}
      {renderSelectField(
        'eventStorage',
        'Event Storage',
        [
          { value: 'storage1', label: 'Storage 1' },
          { value: 'storage2', label: 'Storage 2' },
          { value: 'storage3', label: 'Storage 3' }
        ],
        true
      )}
      {renderTextField('eventCode', 'Event Code', true)}
      {renderTextField('displayName', 'Display Name', true)}
      {renderTextField('remarks', 'Remarks')}

      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          OK
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
