import * as React from 'react';
import { Stack, Button as MuiButton } from '@mui/material';
import ModalForm from './ModalForm';

export default function BasicButtons() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} direction="row">
      <MuiButton variant="contained" onClick={handleClickOpen}>
        New
      </MuiButton>
      <ModalForm open={open} onClose={handleClose} />
    </Stack>
  );
}
