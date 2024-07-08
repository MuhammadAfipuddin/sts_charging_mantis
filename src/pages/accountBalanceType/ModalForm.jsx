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
    balanceTypeName: '',
    rechargeable: '',
    isCurrency: '',
    maximumBalance: '',
    packInner: '',
    unlimitedFlag: '',
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
      <DialogTitle sx={{ color: 'green', fontWeight: 'bold' }}>Account Balance Type Information</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box mb={1}>{renderTextField('balanceTypeName', 'Balance Type Name', 'text', true)}</Box>
            <Box mb={1}>
              {renderSelectField(
                'rechargeable',
                'Rechargeable',
                [
                  { value: 'option1', label: 'Pilihan 1' },
                  { value: 'option2', label: 'Pilihan 2' },
                  { value: 'option3', label: 'Pilihan 3' },
                  { value: 'option4', label: 'Pilihan 4' }
                ],
                true
              )}
            </Box>
            <Box mb={1}>
              {renderRadioGroup('isCurrency', 'Is Currency', [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ])}
            </Box>
            <Box mb={1}>{renderTextField('maximumBalance', 'Maximum Balance', 'number')}</Box>
            <Box mb={1}>
              {renderRadioGroup('packInner', 'Pack Inner', [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ])}
            </Box>
            <Box mb={1}>
              {renderRadioGroup('unlimitedFlag', 'Unlimited Flag', [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ])}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={1}>
              {renderSelectField(
                'balanceCatalog',
                'Balance Catalog',
                [
                  { value: 'option1', label: 'Basic Balance' },
                  { value: 'option2', label: 'Bonus Balance' },
                  { value: 'option3', label: 'Credit Balance' },
                  { value: 'option4', label: 'Given Balance' },
                  { value: 'option5', label: 'Limited Balance' },
                  { value: 'option6', label: 'Non Currency Balance' }
                ],
                true
              )}
            </Box>
            <Box mb={1}>{renderTextField('standardCode', 'Standard Code', 'text', true)}</Box>
            <Box mb={1}>
              {renderSelectField(
                'unit',
                'Unit',
                [
                  { value: 'option1', label: 'Pilihan 1' },
                  { value: 'option2', label: 'Pilihan 2' },
                  { value: 'option3', label: 'Pilihan 3' },
                  { value: 'option4', label: 'Pilihan 4' }
                ],
                true
              )}
            </Box>
            <Box mb={1}>{renderTextField('priority', 'Priority', 'number')}</Box>
            <Box mb={1}>{renderTextField('timeSpan', 'Time Span', 'text', true)}</Box>
            <Box mb={1}>{renderTextField('multiChannel', 'Multi Channel', 'text', true)}</Box>
            <Box mb={1}>
              {renderRadioGroup('excludePackInner', 'Exclude Pack Inner', [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ])}
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
