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
      <DialogTitle sx={{ color: 'green', fontWeight: 'bold' }}>Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box mb={1}>{renderTextField('featureName', 'Feature Name', 'text', true)}</Box>
            <Box mb={1}>
              {renderSelectField(
                'reservedFeature',
                'Reserved Feature',
                [
                  { value: 'reserveAttrPrice2', label: 'Reserve Attr Price 2' },
                  { value: 'alwaysActiveFlag', label: 'Always Active Flag' },
                  { value: 'isVip', label: 'IS_VIP' },
                  { value: 'finalUnitActionSortflag', label: 'FINAL_UNIT_ACTION_SORTFLAG' },
                  { value: 'forceGsuValue', label: 'FORCE_GSU_VALUE' },
                  { value: 'materialType', label: 'Material Type' }
                ],
                true
              )}
            </Box>
            <Box mb={1}>{renderTextField('remarks', 'Remarks', 'text', true)}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={1}>
              {renderRadioGroup('measurable', 'Measurable', [
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
