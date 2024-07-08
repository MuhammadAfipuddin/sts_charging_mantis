import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button as MuiButton,
  TextField,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Box
} from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function ModalForm({ open, onClose }) {
  const [formValues, setFormValues] = React.useState({
    billingCycleTypeName: '',
    prePaidOrPostPaid: '',
    dueDate: null,
    quantity: '',
    remarks: '',
    balanceCatalog: '',
    standardCode: '',
    unit: '',
    priority: '',
    timeSpan: '',
    multiChannel: '',
    excludePackInner: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const renderTextField = (id, label, type = 'text', required = false) => (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={4}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </Grid>
      <Grid item xs={8}>
        <TextField
          margin="dense"
          id={id}
          name={id}
          value={formValues[id]}
          onChange={handleChange}
          type={type}
          fullWidth
          required={required}
        />
      </Grid>
    </Grid>
  );

  const renderSelectField = (id, label, options, required = false) => (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={4}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth margin="normal">
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

  const renderRadioGroup = (id, label, options) => (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={4}>
        <FormLabel component="legend">{label}</FormLabel>
      </Grid>
      <Grid item xs={8}>
        <RadioGroup row aria-label={id} name={id} value={formValues[id]} onChange={handleChange}>
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} labelPlacement="start" />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ color: 'green', fontWeight: 'bold' }}>Billing Cycle Information</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>{renderTextField('billingCycleTypeName', 'Billing Cycle Type Name', 'text', true)}</Box>
            <Box>
              {renderRadioGroup('prePaidOrPostPaid', 'Pre-paid/Post-paid', [
                { value: 'Post-paid', label: 'Post-paid' },
                { value: 'Pre-paid', label: 'Pre-paid' }
              ])}
            </Box>
            <Box>{renderTextField('dueDate', 'Due Date', 'date', true)}</Box>
            <Box>{renderTextField('quantity', 'Quantity', 'number', true)}</Box>
            <Box>{renderTextField('remarks', 'Remarks', 'text', true)}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>{renderTextField('billingCycleTypeCode', 'Billing Cycle Type Code', 'text', true)}</Box>
            <Box>{renderTextField('startTime', 'Start Time', 'date', true)}</Box>
            <Box>
              {renderSelectField(
                'timeUnit',
                'Time Unit',
                [
                  { value: 'day', label: 'Days' },
                  { value: 'month', label: 'Month' },
                  { value: 'year', label: 'Year' }
                ],
                true
              )}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <MuiButton variant="contained" color="primary">
          Submit
        </MuiButton>
        <MuiButton variant="outlined">Submit and New</MuiButton>
        <MuiButton variant="outlined" onClick={onClose}>
          Cancel
        </MuiButton>
      </DialogActions>
    </Dialog>
  );
}
