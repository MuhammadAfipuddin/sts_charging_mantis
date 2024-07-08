import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button as MuiButton,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Box
} from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function ModalForm({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle color={'green'}>Account Item Type Information</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Account Item Type Name</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth required />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Account Balance Type</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth required>
                    <MenuItem value={1}>Pilihan 1</MenuItem>
                    <MenuItem value={2}>Pilihan 2</MenuItem>
                    <MenuItem value={3}>Pilihan 3</MenuItem>
                    <MenuItem value={4}>Pilihan 4</MenuItem>
                    <MenuItem value={5}>Pilihan 5</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Usage Type</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth required>
                    <MenuItem value={1}>Pilihan 1</MenuItem>
                    <MenuItem value={2}>Pilihan 2</MenuItem>
                    <MenuItem value={3}>Pilihan 3</MenuItem>
                    <MenuItem value={4}>Pilihan 4</MenuItem>
                    <MenuItem value={5}>Pilihan 5</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Exchange To</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth required />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Advance Flag</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth required>
                    <MenuItem value={1}>Pilihan 1</MenuItem>
                    <MenuItem value={2}>Pilihan 2</MenuItem>
                    <MenuItem value={3}>Pilihan 3</MenuItem>
                    <MenuItem value={4}>Pilihan 4</MenuItem>
                    <MenuItem value={5}>Pilihan 5</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <FormLabel component="legend">Deduct Erecharge</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <RadioGroup row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Merge Item</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth required />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Remarks</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth required />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Parent Account Item Type</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth required>
                    <MenuItem value={1}>Pilihan 1</MenuItem>
                    <MenuItem value={2}>Pilihan 2</MenuItem>
                    <MenuItem value={3}>Pilihan 3</MenuItem>
                    <MenuItem value={4}>Pilihan 4</MenuItem>
                    <MenuItem value={5}>Pilihan 5</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>Account Item Type Code</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth required />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container alignItems="center" sx={{ mt: 9 }}>
                <Grid item xs={4}>
                  <FormLabel component="legend">Emergency Fee</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <RadioGroup row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
              </Grid>
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
